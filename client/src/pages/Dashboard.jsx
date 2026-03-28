import DashboardLayout from "../layouts/DashboardLayout";
import PredictionForm from "../components/PredictionForm";
import CSVUploader from "../components/CSVUploader";
import DownloadCSVButton from "../components/DownloadCSVButton";
import ImageUploader from "../components/ImageUploader";
import PropertyMap from "../components/PropertyMap";
import AIChatbot from "../components/AIChatbot";
import PriceChart from "../components/PriceChart";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="grid lg:grid-cols-2 gap-6">
        <PredictionForm />
        <CSVUploader />
        <DownloadCSVButton />
        <ImageUploader />
        <PropertyMap />
        <AIChatbot />
        <div className="lg:col-span-2">
          <PriceChart />
        </div>
      </div>
    </DashboardLayout>
  );
}