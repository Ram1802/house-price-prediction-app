import React from "react";
import { BellRing, TrendingUp, Crown, Bot } from "lucide-react";

const notifications = [
  { icon: <TrendingUp size={16} />, title: "Mumbai property prices increased by 12%" },
  { icon: <Bot size={16} />, title: "AI generated a new smart recommendation" },
  { icon: <Crown size={16} />, title: "Premium feature unlocked for trial users" },
];

const NotificationPanel = ({ open }) => {
  if (!open) return null;

  return (
    <div className="absolute right-0 top-14 w-80 glass-card rounded-3xl p-5 shadow-2xl z-50">
      <div className="flex items-center gap-2 mb-4">
        <BellRing className="text-cyan-400" size={18} />
        <h3 className="font-bold text-lg">Notifications</h3>
      </div>

      <div className="space-y-3">
        {notifications.map((item, index) => (
          <div key={index} className="p-4 rounded-2xl bg-white/5 flex items-start gap-3 hover:bg-white/10 transition">
            <div className="mt-1 text-cyan-400">{item.icon}</div>
            <p className="text-sm text-slate-200">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationPanel;