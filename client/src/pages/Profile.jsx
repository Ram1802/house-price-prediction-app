import React from "react";
import Navbar from "../components/Navbar";
import AnimatedBackground from "../components/AnimatedBackground";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user")) || {
    name: "Ram Shinde",
    email: "ram@example.com",
    plan: "Free",
  };

  return (
    <div className="relative min-h-screen bg-slate-950 text-white overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10">
        <Navbar />
        <div className="max-w-5xl mx-auto px-6 py-10">
          <div className="glass-card rounded-3xl p-8">
            <div className="flex items-center gap-5">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-4xl font-bold">
                {user.name.charAt(0)}
              </div>
              <div>
                <h1 className="text-3xl font-bold">{user.name}</h1>
                <p className="text-slate-400">{user.email}</p>
                <span className="inline-block mt-2 px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-300 border border-yellow-400/30">
                  {user.plan} Plan
                </span>
              </div>
            </div>

            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-white/5">
                <h3 className="font-semibold mb-2">Account Type</h3>
                <p className="text-slate-400">Standard User Account</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5">
                <h3 className="font-semibold mb-2">Usage</h3>
                <p className="text-slate-400">32 Predictions This Month</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;