import React from "react";
import { LayoutDashboard, History, ShieldCheck, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    { name: "Dashboard", path: "/dashboard", icon: <LayoutDashboard size={18} /> },
    { name: "History", path: "/history", icon: <History size={18} /> },
    { name: "Admin", path: "/admin", icon: <ShieldCheck size={18} /> },
    { name: "Home", path: "/", icon: <Home size={18} /> },
  ];

  return (
    <aside className="w-[250px] min-h-screen bg-slate-950/80 border-r border-slate-800 p-4 hidden md:block">
      <div className="mb-8">
        <h2 className="text-2xl font-bold gradient-title">HouseAI</h2>
        <p className="text-slate-400 text-sm mt-1">Prediction Platform</p>
      </div>

      <nav className="space-y-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                isActive
                  ? "bg-blue-600 text-white shadow-lg"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              {item.icon}
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;