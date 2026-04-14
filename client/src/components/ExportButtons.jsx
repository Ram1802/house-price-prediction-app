import React from "react";
import { Download } from "lucide-react";

const ExportButtons = () => {
  const exportCSV = () => {
    const rows = [
      ["City", "Area", "Price"],
      ["Mumbai", "1200 sqft", "₹1.2 Cr"],
      ["Pune", "980 sqft", "₹82 L"],
      ["Goa", "1500 sqft", "₹1.8 Cr"],
    ];

    const csvContent = rows.map((row) => row.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "prediction-history.csv";
    a.click();
  };

  return (
    <button
      onClick={exportCSV}
      className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition flex items-center gap-2"
    >
      <Download size={18} />
      Export History
    </button>
  );
};

export default ExportButtons;