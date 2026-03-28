const { spawn } = require("child_process");
const path = require("path");
const fs = require("fs");
const csv = require("csv-parser");
const Prediction = require("../models/Prediction");


// ===============================
// SINGLE PREDICTION
// ===============================
const singlePrediction = async (req, res) => {
  try {
    const { area, bedrooms, bathrooms, locationScore, age } = req.body;

    const inputData = {
      area: Number(area),
      bedrooms: Number(bedrooms),
      bathrooms: Number(bathrooms),
      locationScore: Number(locationScore),
      age: Number(age),
    };

    // Validation
    if (
      Object.values(inputData).some(
        (val) => val === "" || val === null || val === undefined || isNaN(val)
      )
    ) {
      return res.status(400).json({ message: "All fields are required and must be valid numbers" });
    }

    console.log("📥 Request Body:", inputData);

    // Python file path
    const pythonFile = path.join(__dirname, "../../ml/model/predict.py");

    // "python" वापर (Windows मध्ये py नसेल तर issue येतो)
    const python = spawn("python", [pythonFile, JSON.stringify(inputData)], {
      cwd: path.join(__dirname, "../../ml/model"),
    });

    let result = "";
    let error = "";

    python.stdout.on("data", (data) => {
      result += data.toString();
    });

    python.stderr.on("data", (data) => {
      error += data.toString();
    });

    python.on("close", async (code) => {
      console.log("🐍 Python Result:", result);
      console.log("🐍 Python Error:", error);

      if (code !== 0) {
        return res.status(500).json({
          message: "Prediction failed",
          error: error || "Unknown Python error",
        });
      }

      try {
        const parsed = JSON.parse(result.trim());
        const predictedPrice = Number(parsed.predicted_price);

        if (isNaN(predictedPrice)) {
          return res.status(500).json({
            message: "Predicted price is NaN",
            rawPythonOutput: result,
          });
        }

        const savedPrediction = await Prediction.create({
          userId: req.user.id,
          area: inputData.area,
          bedrooms: inputData.bedrooms,
          bathrooms: inputData.bathrooms,
          locationScore: inputData.locationScore,
          age: inputData.age,
          predictedPrice,
          modelUsed: "ML Model",
        });

        return res.status(200).json({
          predicted_price: predictedPrice,
          prediction: savedPrediction,
          aiSuggestion:
            predictedPrice > 5000000
              ? "This property is in a premium price range."
              : "This property looks affordable and investment-friendly.",
        });
      } catch (err) {
        console.error("❌ JSON Parse Error:", err);
        return res.status(500).json({
          message: "Invalid Python response",
          rawPythonOutput: result,
        });
      }
    });
  } catch (err) {
    console.error("❌ Controller Error:", err);
    return res.status(500).json({ message: "Server error during prediction" });
  }
};


// ===============================
// HISTORY
// ===============================
const history = async (req, res) => {
  try {
    const predictions = await Prediction.find({ userId: req.user.id }).sort({ createdAt: -1 });
    res.status(200).json(predictions);
  } catch (err) {
    console.error("❌ History Error:", err);
    res.status(500).json({ message: "Failed to fetch history" });
  }
};


// ===============================
// CSV PREDICTION
// ===============================
const csvPrediction = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "CSV file is required" });
    }

    const results = [];
    const filePath = req.file.path;

    fs.createReadStream(filePath)
      .pipe(csv())
      .on("data", (data) => {
        results.push({
          area: Number(data.area),
          bedrooms: Number(data.bedrooms),
          bathrooms: Number(data.bathrooms),
          locationScore: Number(data.locationScore),
          age: Number(data.age),
        });
      })
      .on("end", async () => {
        try {
          const saved = [];

          for (const row of results) {
            const fakePrediction =
              row.area * 3000 +
              row.bedrooms * 50000 +
              row.bathrooms * 30000 +
              row.locationScore * 100000 -
              row.age * 10000;

            const pred = await Prediction.create({
              userId: req.user.id,
              ...row,
              predictedPrice: fakePrediction,
              modelUsed: "CSV Bulk Model",
            });

            saved.push(pred);
          }

          res.status(200).json({
            message: "CSV predictions completed",
            data: saved,
          });
        } catch (err) {
          console.error("❌ CSV Prediction Error:", err);
          res.status(500).json({ message: "CSV prediction failed" });
        }
      });
  } catch (err) {
    console.error("❌ CSV Upload Error:", err);
    res.status(500).json({ message: "CSV upload failed" });
  }
};


// ===============================
// DOWNLOAD CSV
// ===============================
const downloadCSV = async (req, res) => {
  try {
    const predictions = await Prediction.find({ userId: req.user.id });

    let csvData = "area,bedrooms,bathrooms,locationScore,age,predictedPrice,modelUsed\n";

    predictions.forEach((item) => {
      csvData += `${item.area},${item.bedrooms},${item.bathrooms},${item.locationScore},${item.age},${item.predictedPrice},${item.modelUsed}\n`;
    });

    res.header("Content-Type", "text/csv");
    res.attachment("predictions.csv");
    return res.send(csvData);
  } catch (err) {
    console.error("❌ Download CSV Error:", err);
    res.status(500).json({ message: "Failed to download CSV" });
  }
};

module.exports = {
  singlePrediction,
  csvPrediction,
  history,
  downloadCSV,
};