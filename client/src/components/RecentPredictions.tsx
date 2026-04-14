import React from "react";

const data = [
  { city: "Mumbai", area: "1200 sqft", price: "₹1.2 Cr", status: "High" },
  { city: "Pune", area: "980 sqft", price: "₹82 L", status: "Medium" },
  { city: "Goa", area: "1500 sqft", price: "₹1.8 Cr", status: "Premium" },
  { city: "Nagpur", area: "1100 sqft", price: "₹58 L", status: "Budget" },
];

const RecentPredictions = () => {
  return (
    <div className="glass-card rounded-3xl p-6 overflow-x-auto">
      <h2 className="text-2xl font-bold mb-4">Recent Predictions</h2>
      <table className="w-full text-left text-sm">
        <thead className="text-slate-400 border-b border-white/10">
          <tr>
            <th className="py-3">City</th>
            <th className="py-3">Area</th>
            <th className="py-3">Predicted Price</th>
            <th className="py-3">Market</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition">
              <td className="py-4">{item.city}</td>
              <td>{item.area}</td>
              <td>{item.price}</td>
              <td>
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-xs">
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentPredictions;