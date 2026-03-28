import DashboardLayout from "../layouts/DashboardLayout";
import AnimatedStats from "../components/AnimatedStats";
import ModelComparison from "../components/ModelComparison";

export default function AdminPanel() {
  return (
    <DashboardLayout>
      <div className="grid gap-6">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Admin Panel</h1>
        <AnimatedStats />
        <ModelComparison />
      </div>
    </DashboardLayout>
  );
}