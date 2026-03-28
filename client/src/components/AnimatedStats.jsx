import { motion } from "framer-motion";

const stats = [
  { title: "Total Predictions", value: 1240 },
  { title: "Registered Users", value: 320 },
  { title: "CSV Uploads", value: 76 },
  { title: "Model Accuracy", value: "91%" },
];

export default function AnimatedStats() {
  return (
    <div className="grid md:grid-cols-4 gap-4">
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="bg-slate-900 p-6 rounded-3xl border border-slate-800 shadow-xl"
        >
          <h2 className="text-slate-400">{stat.title}</h2>
          <p className="text-3xl font-bold mt-2">{stat.value}</p>
        </motion.div>
      ))}
    </div>
  );
}