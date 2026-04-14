import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight, FaChartLine, FaHome, FaRobot, FaShieldAlt } from "react-icons/fa";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white px-6">
      
      {/* Animated background blobs */}
      <div className="absolute top-[-80px] left-[-80px] w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-[30%] left-[45%] w-56 h-56 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-14 items-center w-full">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-sm font-semibold mb-5"
            >
              🚀 AI Powered Real Estate Intelligence
            </motion.p>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight gradient-title">
              Predict House Prices <br /> Smarter & Faster
            </h1>

            <p className="text-slate-300 mt-6 text-lg max-w-xl leading-relaxed">
              Modern ML-based property valuation platform with real-time analytics, CSV prediction,
              AI insights, image upload, maps, and admin dashboard.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/register"
                className="btn-premium flex items-center gap-2 px-7 py-4 rounded-2xl text-lg"
              >
                Get Started <FaArrowRight />
              </Link>

              <Link
                to="/login"
                className="px-7 py-4 rounded-2xl border border-slate-600 hover:bg-slate-800/80 transition-all duration-300 font-semibold text-lg shadow-lg hover:scale-105"
              >
                Login
              </Link>
            </div>

            {/* Features */}
            <div className="mt-10 grid sm:grid-cols-2 gap-4 max-w-2xl">
              <div className="glass-card p-4 flex items-center gap-3">
                <FaChartLine className="text-blue-400 text-xl" />
                <span className="text-slate-200">Real-time Analytics</span>
              </div>
              <div className="glass-card p-4 flex items-center gap-3">
                <FaRobot className="text-purple-400 text-xl" />
                <span className="text-slate-200">AI Suggestions</span>
              </div>
              <div className="glass-card p-4 flex items-center gap-3">
                <FaHome className="text-cyan-400 text-xl" />
                <span className="text-slate-200">Smart Property Insights</span>
              </div>
              <div className="glass-card p-4 flex items-center gap-3">
                <FaShieldAlt className="text-green-400 text-xl" />
                <span className="text-slate-200">Secure & Fast</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT PANEL */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="glass-card p-8 rounded-[2rem] shadow-2xl relative"
          >
            <div className="absolute -top-5 -right-5 bg-blue-500 text-white px-4 py-2 rounded-2xl shadow-lg animate-bounce">
              Live AI
            </div>

            <h2 className="text-2xl font-bold mb-6">Platform Highlights</h2>

            <div className="grid grid-cols-2 gap-4">
              <motion.div whileHover={{ scale: 1.05 }} className="bg-slate-800/70 p-6 rounded-3xl">
                <h3 className="text-2xl font-bold text-blue-400">91%</h3>
                <p className="text-slate-400 mt-2">Model Accuracy</p>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} className="bg-slate-800/70 p-6 rounded-3xl">
                <h3 className="text-2xl font-bold text-purple-400">1240+</h3>
                <p className="text-slate-400 mt-2">Predictions</p>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} className="bg-slate-800/70 p-6 rounded-3xl">
                <h3 className="text-2xl font-bold text-cyan-400">CSV</h3>
                <p className="text-slate-400 mt-2">Bulk Prediction</p>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} className="bg-slate-800/70 p-6 rounded-3xl">
                <h3 className="text-2xl font-bold text-green-400">AI</h3>
                <p className="text-slate-400 mt-2">Suggestions</p>
              </motion.div>
            </div>

            <div className="mt-8 bg-slate-900/60 border border-slate-700 rounded-3xl p-5">
              <p className="text-slate-400 text-sm mb-2">Prediction Example</p>
              <h3 className="text-3xl font-bold text-white">₹ 48,75,000</h3>
              <p className="text-green-400 mt-2 text-sm">+12% growth estimate</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}