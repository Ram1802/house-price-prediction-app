import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import AnimatedBackground from "../components/AnimatedBackground";
import FloatingParticles from "../components/FloatingParticles";
import FloatingChatbot from "../components/FloatingChatbot";
import StatsCards from "../components/StatsCards";
import PremiumBanner from "../components/PremiumBanner";
import RecentPredictions from "../components/RecentPredictions";
import MarketTrends from "../components/MarketTrends";
import Recommendations from "../components/Recommendations";
import DashboardHero from "../components/DashboardHero";
import ExportButtons from "../components/ExportButtons";
import PDFDownloadButton from "../components/PDFDownloadButton";
import LoadingScreen from "../components/LoadingScreen";
import PremiumUpgradeButton from "../components/PremiumUpgradeButton";
import PredictionForm from "../components/PredictionForm";
import CSVUploader from "../components/CSVUploader";
import DownloadCSVButton from "../components/DownloadCSVButton";
import ImageUploader from "../components/ImageUploader";
import PropertyMap from "../components/PropertyMap";
import PriceChart from "../components/PriceChart";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <AnimatedBackground />
      <FloatingParticles />

      <div className="relative z-10">
        <Navbar />

        <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">
          <DashboardHero />
          <PremiumBanner />
          <StatsCards />

          <section className="flex flex-wrap gap-4">
  <PremiumUpgradeButton />
  <ExportButtons />
  <PDFDownloadButton />
</section>

          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 glass-card p-6 rounded-3xl">
              <h2 className="text-2xl font-bold mb-4">House Price Prediction</h2>
              <PredictionForm />
            </div>
            <Recommendations />
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="glass-card p-6 rounded-3xl">
              <h2 className="text-2xl font-bold mb-4">Upload Property Image</h2>
              <ImageUploader />
            </div>

            <div className="glass-card p-6 rounded-3xl">
              <h2 className="text-2xl font-bold mb-4">Bulk CSV Upload</h2>
              <CSVUploader />
              <div className="mt-4">
                <DownloadCSVButton />
              </div>
            </div>
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="glass-card p-6 rounded-3xl">
              <h2 className="text-2xl font-bold mb-4">Property Analytics</h2>
              <PriceChart />
            </div>

            <div className="glass-card p-6 rounded-3xl">
              <h2 className="text-2xl font-bold mb-4">Property Map</h2>
              <PropertyMap />
            </div>
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <RecentPredictions />
            <MarketTrends />
          </section>
        </main>

        <FloatingChatbot />
      </div>
    </div>
  );
};

export default Dashboard;