import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-slate-100 dark:bg-slate-950">
      <Sidebar />
      <main className="flex-1 p-6">
        <Navbar />
        <div className="mt-6">{children}</div>
      </main>
    </div>
  );
}