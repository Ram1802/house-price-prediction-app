import React from "react";
import Navbar from "../components/Navbar";
import AnimatedBackground from "../components/AnimatedBackground";

const Settings = () => {
  return (
    <div className="relative min-h-screen bg-slate-950 text-white overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10">
        <Navbar />
        <div className="max-w-5xl mx-auto px-6 py-10">
          <div className="glass-card rounded-3xl p-8">
            <h1 className="text-3xl font-bold mb-6">Settings</h1>
            <div className="space-y-6">
              <div>
                <label className="block mb-2 text-slate-300">Notification Preferences</label>
                <input type="checkbox" className="scale-125" /> <span className="ml-2">Enable Email Alerts</span>
              </div>

              <div>
                <label className="block mb-2 text-slate-300">Default Prediction Location</label>
                <input
                  type="text"
                  placeholder="Enter city..."
                  className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 outline-none"
                />
              </div>

              <button className="px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-600 transition font-semibold">
                Save Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;