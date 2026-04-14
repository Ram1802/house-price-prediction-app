import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext";
import { motion } from "framer-motion";
import { FaEnvelope, FaLock, FaGoogle, FaArrowLeft } from "react-icons/fa";
import { useGoogleLogin } from "@react-oauth/google";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const { login } = useAuth();
  const navigate = useNavigate();

  const redirectUser = (data) => {
    login(data);
    toast.success("Login successful");

    if (data.user?.role === "admin") {
      navigate("/admin");
    } else {
      navigate("/dashboard");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", form);
      redirectUser(res.data);
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
    }
  };

  const googleLogin = useGoogleLogin({
    flow: "implicit",
    onSuccess: async (tokenResponse) => {
      try {
        const res = await API.post("/auth/google", {
          access_token: tokenResponse.access_token,
        });
        redirectUser(res.data);
      } catch (err) {
        toast.error(err.response?.data?.message || "Google login failed");
      }
    },
    onError: () => {
      toast.error("Google login cancelled or failed");
    },
  });

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 px-4">
      
      <div className="absolute top-[-80px] left-[-80px] w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-md bg-white/10 backdrop-blur-2xl border border-white/10 p-8 rounded-[2rem] shadow-2xl relative z-10"
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-slate-300 hover:text-white mb-6 transition"
        >
          <FaArrowLeft /> Back
        </Link>

        <h2 className="text-4xl font-extrabold text-white mb-2">Welcome Back 👋</h2>
        <p className="text-slate-300 mb-8">
          Login to access your smart house prediction dashboard
        </p>

        <form onSubmit={handleSubmit} className="grid gap-5">
          <div className="relative">
            <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full pl-12 pr-4 py-3 rounded-2xl bg-slate-900/70 border border-slate-700 text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>

          <div className="relative">
            <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full pl-12 pr-4 py-3 rounded-2xl bg-slate-900/70 border border-slate-700 text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </div>

          <button className="btn-premium py-3 rounded-2xl text-lg">
            Login
          </button>
        </form>

        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-slate-700"></div>
          <span className="text-slate-400 text-sm">OR</span>
          <div className="flex-1 h-px bg-slate-700"></div>
        </div>

        <button
          onClick={() => googleLogin()}
          className="w-full flex items-center justify-center gap-3 py-3 rounded-2xl border border-slate-600 bg-white/5 hover:bg-white/10 transition-all duration-300 text-white font-semibold"
        >
          <FaGoogle className="text-red-400" />
          Continue with Google
        </button>

        <p className="mt-6 text-slate-300 text-center">
          Don’t have an account?{" "}
          <Link to="/register" className="text-blue-400 hover:text-blue-300 font-semibold">
            Register
          </Link>
        </p>
      </motion.div>
    </div>
  );
}