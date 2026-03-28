export default function DownloadCSVButton() {
  const downloadCSV = () => {
    const token = localStorage.getItem("token");
    window.open(`http://localhost:5000/api/predict/download-csv?token=${token}`, "_blank");
  };

  return (
    <button
      onClick={downloadCSV}
      className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-xl font-semibold"
    >
      Download CSV Results
    </button>
  );
}