import React from "react";
import Navbar from "../components/Navbar";
import AnimatedBackground from "../components/AnimatedBackground";
import StatsCards from "../components/StatsCards";
import MarketTrends from "../components/MarketTrends";
import RecentPredictions from "../components/RecentPredictions";

const Analytics = () => {
  return (
    <div className="relative min-h-screen bg-slate-950 text-white overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10">
        <Navbar />
        <main className="max-w-7xl mx-auto px-6 py-10 space-y-8">
          <StatsCards />
          <div className="grid lg:grid-cols-2 gap-6">
            <MarketTrends />
            <RecentPredictions />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Analytics;