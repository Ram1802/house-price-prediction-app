import React from "react";

const recommendations = [
  { title: "Luxury Apartment in Mumbai", price: "₹1.8 Cr", tag: "Best ROI" },
  { title: "2BHK in Pune", price: "₹78 L", tag: "Hot Deal" },
  { title: "Beach Villa in Goa", price: "₹2.4 Cr", tag: "Premium" },
];

const Recommendations = () => {
  return (
    <div className="glass-card rounded-3xl p-6">
      <h2 className="text-2xl font-bold mb-4">Recommended Properties</h2>
      <div className="space-y-4">
        {recommendations.map((item, index) => (
          <div key={index} className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.price}</p>
              </div>
              <span className="px-3 py-1 rounded-full text-xs bg-purple-500/20 text-purple-300">
                {item.tag}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;