import React from "react";
import { Crown, X, CheckCircle } from "lucide-react";

const features = [
  "Unlimited AI predictions",
  "Advanced analytics",
  "Priority AI chatbot",
  "PDF reports",
  "Export history",
  "Market trend forecasting",
];

const PremiumModal = ({ open, setOpen }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="glass-card w-full max-w-2xl rounded-[2rem] p-8 relative">
        <button
          onClick={() => setOpen(false)}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10"
        >
          <X size={18} />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-14 h-14 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center">
            <Crown className="text-black" />
          </div>
          <div>
            <h2 className="text-3xl font-bold">Upgrade to Premium</h2>
            <p className="text-slate-400">Unlock advanced AI-powered real estate tools</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="p-4 rounded-2xl bg-white/5 flex items-center gap-3">
              <CheckCircle className="text-green-400" size={18} />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <button className="w-full btn-premium text-lg py-4">
          Upgrade for ₹499 / month
        </button>
      </div>
    </div>
  );
};

export default PremiumModal;