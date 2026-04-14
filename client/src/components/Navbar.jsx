import React, { useState } from "react";
import {
  Bell,
  Crown,
  LogOut,
  Menu,
  Search,
  Settings,
  Sun,
  Moon,
  User,
  X,
  Sparkles,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const navigate = useNavigate();
  const { darkMode, setDarkMode } = useTheme();

  const user = JSON.parse(localStorage.getItem("user")) || {
    name: "Ram Shinde",
    email: "ram@example.com",
    plan: "Free",
  };

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/5 dark:bg-slate-900/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          HouseAI
        </div>

        <div className="hidden lg:flex items-center bg-white/5 border border-white/10 rounded-full px-4 py-2 w-[340px]">
          <Search size={18} className="text-slate-400" />
          <input
            type="text"
            placeholder="Search properties, cities..."
            className="bg-transparent outline-none px-3 w-full text-sm"
          />
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link to="/dashboard" className="hover:text-cyan-400 transition">Dashboard</Link>
          <Link to="/history" className="hover:text-cyan-400 transition">History</Link>
          <Link to="/analytics" className="hover:text-cyan-400 transition">Analytics</Link>
          <Link to="/premium" className="hover:text-cyan-400 transition">Premium</Link>
          <Link to="/settings" className="hover:text-cyan-400 transition">Settings</Link>
        </nav>

        <div className="flex items-center gap-3 relative">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:scale-105 transition"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button className="relative w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:scale-105 transition">
            <Bell size={18} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          <button className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold shadow-lg hover:scale-105 transition">
            <Crown size={16} />
            Upgrade
          </button>

          <button
            onClick={() => setProfileOpen(!profileOpen)}
            className="w-11 h-11 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-white font-bold shadow-lg"
          >
            {user?.name?.charAt(0) || "U"}
          </button>

          {profileOpen && (
            <div className="absolute right-0 top-14 w-72 bg-slate-900/95 border border-white/10 rounded-2xl shadow-2xl p-4 backdrop-blur-xl">
              <div className="border-b border-white/10 pb-3 mb-3">
                <h3 className="font-bold text-lg">{user.name}</h3>
                <p className="text-sm text-slate-400">{user.email}</p>
                <span className="inline-block mt-2 px-3 py-1 rounded-full text-xs bg-yellow-500/20 text-yellow-300 border border-yellow-400/30">
                  {user.plan || "Free"} Plan
                </span>
              </div>

              <div className="space-y-2 text-sm">
                <Link to="/profile" className="w-full flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-white/10 transition">
                  <User size={16} /> My Profile
                </Link>
                <Link to="/settings" className="w-full flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-white/10 transition">
                  <Settings size={16} /> Settings
                </Link>
                <Link to="/premium" className="w-full flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-white/10 transition">
                  <Sparkles size={16} /> Premium
                </Link>
                <button
                  onClick={logout}
                  className="w-full flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-red-500/20 text-red-400 transition"
                >
                  <LogOut size={16} /> Logout
                </button>
              </div>
            </div>
          )}

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3">
          <Link to="/dashboard" className="block">Dashboard</Link>
          <Link to="/history" className="block">History</Link>
          <Link to="/analytics" className="block">Analytics</Link>
          <Link to="/premium" className="block">Premium</Link>
          <Link to="/settings" className="block">Settings</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;