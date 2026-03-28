import { useEffect, useState } from "react";
import API from "../services/api";
import DashboardLayout from "../layouts/DashboardLayout";
import Loader from "../components/Loader";
import EmptyState from "../components/EmptyState";

export default function History() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get("/predict/history")
      .then((res) => setHistory(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">Prediction History</h1>

      {loading ? (
        <Loader />
      ) : history.length === 0 ? (
        <EmptyState title="No predictions yet" />
      ) : (
        <div className="grid gap-4">
          {history.map((item) => (
            <div
              key={item._id}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5"
            >
              <p className="text-slate-900 dark:text-white font-semibold">
                ₹ {item.predictedPrice}
              </p>
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                Area: {item.area}, Bedrooms: {item.bedrooms}, Bathrooms: {item.bathrooms}
              </p>
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                Model: {item.modelUsed}
              </p>
            </div>
          ))}
        </div>
      )}
    </DashboardLayout>
  );
}