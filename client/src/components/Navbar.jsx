import React from "react";
import { Sun, Moon } from "lucide-react";

const Navbar = ({ user, darkMode, setDarkMode, handleLogout }) => {
  return (
    <div className="w-full px-6 py-4 glass-card mb-6 flex items-center justify-between">
      <div>
        <h1 className="welcome-text">
          Welcome, {user?.name || "Rambabu"} 👋
        </h1>
        <p className="soft-text text-sm mt-1">
          Smart house price analytics dashboard
        </p>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="w-10 h-10 rounded-full bg-slate-800 text-white flex items-center justify-center hover:bg-slate-700 transition"
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full font-semibold transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;