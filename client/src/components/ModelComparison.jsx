const models = [
  { name: "Linear Regression", accuracy: "84%" },
  { name: "Random Forest", accuracy: "91%" },
];

export default function ModelComparison() {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {models.map((model, i) => (
        <div key={i} className="bg-slate-900 p-6 rounded-3xl border border-slate-800 shadow-xl">
          <h2 className="text-2xl font-bold">{model.name}</h2>
          <p className="text-slate-400 mt-2">Accuracy: {model.accuracy}</p>
        </div>
      ))}
    </div>
  );
}