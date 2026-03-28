import { useRef, useState } from "react";
import API from "../services/api";
import toast from "react-hot-toast";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Loader from "./Loader";

export default function PredictionForm() {
  const [form, setForm] = useState({
    area: "",
    bedrooms: "",
    bathrooms: "",
    locationScore: "",
    age: "",
  });

  const [result, setResult] = useState(null);
  const [aiTip, setAiTip] = useState("");
  const [loading, setLoading] = useState(false);
  const resultRef = useRef();

  const handlePredict = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await API.post("/predict/single", form);
      setResult(res.data.prediction);
      setAiTip(res.data.aiSuggestion);
      toast.success("Prediction generated");
    } catch (err) {
  console.error(err);
  toast.error(err.response?.data?.message || "Prediction failed");
} finally {
      setLoading(false);
    }
  };

  const exportPDF = async () => {
    const canvas = await html2canvas(resultRef.current);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF();
    pdf.addImage(imgData, "PNG", 10, 10, 180, 100);
    pdf.save("prediction-report.pdf");
  };

  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm">
      <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
        Single House Prediction
      </h2>

      <form onSubmit={handlePredict} className="grid gap-4">
        {["area", "bedrooms", "bathrooms", "locationScore", "age"].map((field) => (
          <input
            key={field}
            type="number"
            placeholder={field}
            className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white outline-none"
            onChange={(e) => setForm({ ...form, [field]: e.target.value })}
          />
        ))}

        <button className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-2xl font-semibold">
          Predict Price
        </button>
      </form>

      {loading && <Loader />}

      {result && (
        <div ref={resultRef} className="mt-6 bg-slate-100 dark:bg-slate-800 p-4 rounded-3xl">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
  Predicted Price: ₹ {result.predictedPrice}
</h3>
          <p className="text-slate-600 dark:text-slate-300 mt-2">
            AI Suggestion: {aiTip}
          </p>
          <button
            onClick={exportPDF}
            className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-2xl"
          >
            Export PDF
          </button>
        </div>
      )}
    </div>
  );
}