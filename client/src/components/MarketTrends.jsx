import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

const trends = [
  { city: "Mumbai", growth: "+12.4%", up: true },
  { city: "Pune", growth: "+8.2%", up: true },
  { city: "Goa", growth: "+15.8%", up: true },
  { city: "Nagpur", growth: "-2.1%", up: false },
];

const MarketTrends = () => {
  return (
    <div className="glass-card rounded-3xl p-6">
      <h2 className="text-2xl font-bold mb-4">Live Market Trends</h2>
      <div className="space-y-4">
        {trends.map((item, index) => (
          <div key={index} className="flex items-center justify-between p-4 rounded-2xl bg-white/5">
            <div>
              <h3 className="font-semibold">{item.city}</h3>
              <p className="text-sm text-slate-400">Real estate demand</p>
            </div>
            <div className={`flex items-center gap-2 font-bold ${item.up ? "text-green-400" : "text-red-400"}`}>
              {item.up ? <TrendingUp size={18} /> : <TrendingDown size={18} />}
              {item.growth}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketTrends;