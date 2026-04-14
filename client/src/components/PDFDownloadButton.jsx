import React from "react";
import { FileDown } from "lucide-react";

const PDFDownloadButton = () => {
  const downloadPDF = () => {
    window.print();
  };

  return (
    <button
      onClick={downloadPDF}
      className="btn-premium flex items-center gap-2"
    >
      <FileDown size={18} />
      Download PDF Report
    </button>
  );
};

export default PDFDownloadButton;