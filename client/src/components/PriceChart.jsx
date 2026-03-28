import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const data = [
  { name: "Jan", price: 4500000 },
  { name: "Feb", price: 5200000 },
  { name: "Mar", price: 6100000 },
  { name: "Apr", price: 7000000 },
  { name: "May", price: 8000000 },
];

export default function PriceChart() {
  return (
    <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 shadow-xl">
      <h2 className="text-2xl font-bold mb-4">Market Price Trend</h2>
      <div className="h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" stroke="white" />
            <YAxis stroke="white" />
            <Tooltip />
            <Line type="monotone" dataKey="price" stroke="#3b82f6" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}