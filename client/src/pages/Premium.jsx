import React from "react";
import Navbar from "../components/Navbar";
import AnimatedBackground from "../components/AnimatedBackground";
import { Crown, Sparkles, CheckCircle } from "lucide-react";

const Premium = () => {
  const features = [
    "Unlimited house price predictions",
    "Advanced AI market insights",
    "CSV bulk upload access",
    "Premium analytics dashboard",
    "Future trend forecasting",
    "Priority AI chatbot support",
  ];

  return (
    <div className="relative min-h-screen bg-slate-950 text-white overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10">
        <Navbar />
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="glass-card rounded-3xl p-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center">
                <Crown className="text-black" size={30} />
              </div>
            </div>

            <h1 className="text-4xl font-bold mb-4">Upgrade to Premium</h1>
            <p className="text-slate-300 mb-8">
              Unlock the full power of AI-based real estate analysis and premium features.
            </p>

            <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto text-left mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-2xl bg-white/5">
                  <CheckCircle className="text-green-400" size={20} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold hover:scale-105 transition shadow-xl flex items-center gap-2 mx-auto">
              <Sparkles size={18} />
              Upgrade for ₹499/month
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Premium;