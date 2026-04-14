import React from "react";
import { Crown, Sparkles } from "lucide-react";

const PremiumBanner = () => {
  return (
    <div className="glass-card rounded-3xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border border-yellow-400/20 bg-gradient-to-r from-yellow-500/10 to-orange-500/10">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <Crown className="text-yellow-400" />
          <h2 className="text-2xl font-bold">Upgrade to Premium</h2>
        </div>
        <p className="text-slate-300">
          Unlock AI trend prediction, smart reports, unlimited analysis, and advanced market insights.
        </p>
      </div>

      <button className="px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold hover:scale-105 transition shadow-xl flex items-center gap-2">
        <Sparkles size={18} />
        Upgrade Now
      </button>
    </div>
  );
};

export default PremiumBanner;