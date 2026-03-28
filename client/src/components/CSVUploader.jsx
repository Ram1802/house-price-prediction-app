import { useState } from "react";
import API from "../services/api";
import toast from "react-hot-toast";

export default function CSVUploader() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleUpload = async () => {
    if (!file) return toast.error("Please select CSV file");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await API.post("/predict/csv", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setMessage(res.data.message);
      toast.success("CSV uploaded successfully");
    } catch (err) {
      toast.error("CSV upload failed");
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm">
      <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Bulk CSV Prediction</h2>
      <input
        type="file"
        accept=".csv"
        onChange={(e) => setFile(e.target.files[0])}
        className="mb-4 block w-full text-slate-700 dark:text-slate-300"
      />
      <button
        onClick={handleUpload}
        className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-2xl"
      >
        Upload CSV
      </button>
      {message && <p className="mt-4 text-green-500">{message}</p>}
    </div>
  );
}