import React from "react";
import { Sparkles, TrendingUp, Crown } from "lucide-react";
import TypingText from "./TypingText";

const DashboardHero = () => {
  const user = JSON.parse(localStorage.getItem("user")) || { name: "Ram" };

  return (
    <section className="glass-card rounded-[2rem] p-8 md:p-10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 blur-3xl rounded-full" />

      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-sm mb-5">
          <Sparkles size={16} />
          AI-Powered Real Estate Intelligence
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
          Welcome, <span className="gradient-title">{user.name}</span>
        </h1>

        <TypingText />

        <div className="mt-8 flex flex-wrap gap-4">
          <button className="btn-premium flex items-center gap-2">
            <TrendingUp size={18} />
            Explore Market Insights
          </button>

          <button className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition flex items-center gap-2">
            <Crown size={18} />
            Unlock Premium
          </button>
        </div>
      </div>
    </section>
  );
};

export default DashboardHero;