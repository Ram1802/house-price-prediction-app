import React, { useEffect, useState } from "react";
import { Home, TrendingUp, MapPin, IndianRupee } from "lucide-react";

const stats = [
  { title: "Predictions", target: 1248, icon: <Home /> },
  { title: "Growth", target: 18, suffix: "%", icon: <TrendingUp /> },
  { title: "Locations", target: 87, icon: <MapPin /> },
  { title: "Avg Price", target: 95, prefix: "₹", suffix: "L", icon: <IndianRupee /> },
];

const Counter = ({ target, prefix = "", suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const increment = target / (duration / 20);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [target]);

  return <span>{prefix}{count}{suffix}</span>;
};

const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
      {stats.map((stat, index) => (
        <div key={index} className="glass-card rounded-3xl p-5 hover:scale-[1.02] transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm">{stat.title}</p>
              <h3 className="text-3xl font-bold mt-2">
                <Counter target={stat.target} prefix={stat.prefix} suffix={stat.suffix} />
              </h3>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-cyan-400">
              {stat.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;