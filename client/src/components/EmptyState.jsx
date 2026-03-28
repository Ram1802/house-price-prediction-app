export default function EmptyState({ title = "No data found" }) {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-10 text-center">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{title}</h2>
      <p className="text-slate-500 dark:text-slate-400 mt-2">
        Once you start using this feature, data will appear here.
      </p>
    </div>
  );
}