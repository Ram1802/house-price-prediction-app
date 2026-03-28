import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white flex items-center justify-center px-6">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <p className="text-blue-400 font-semibold mb-3">AI Powered Real Estate Intelligence</p>
          <h1 className="text-5xl font-extrabold leading-tight">
            Predict House Prices <br /> Like a Pro
          </h1>
          <p className="text-slate-300 mt-6 text-lg">
            Industry-level ML-based property valuation platform with analytics, CSV prediction,
            AI insights, image upload, map view, and admin dashboard.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              to="/register"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-2xl font-semibold"
            >
              Get Started
            </Link>
            <Link
              to="/login"
              className="border border-slate-600 hover:bg-slate-800 px-6 py-3 rounded-2xl font-semibold"
            >
              Login
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 border border-white/10 rounded-[2rem] p-8 shadow-2xl backdrop-blur-xl"
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-800/70 p-6 rounded-3xl">
              <h3 className="text-xl font-bold">91%</h3>
              <p className="text-slate-400 mt-2">Model Accuracy</p>
            </div>
            <div className="bg-slate-800/70 p-6 rounded-3xl">
              <h3 className="text-xl font-bold">1240+</h3>
              <p className="text-slate-400 mt-2">Predictions</p>
            </div>
            <div className="bg-slate-800/70 p-6 rounded-3xl">
              <h3 className="text-xl font-bold">CSV</h3>
              <p className="text-slate-400 mt-2">Bulk Prediction</p>
            </div>
            <div className="bg-slate-800/70 p-6 rounded-3xl">
              <h3 className="text-xl font-bold">AI</h3>
              <p className="text-slate-400 mt-2">Suggestions</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}