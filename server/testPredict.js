const axios = require("axios");

async function testPrediction() {
  try {
    const res = await axios.post("http://localhost:5000/api/predict", {
      area: 1200,
      bedrooms: 2,
      bathrooms: 2,
      locationScore: 8,
      age: 5,
    });

    console.log("✅ Prediction Response:", res.data);
  } catch (err) {
    console.error("❌ Prediction Error:");
    if (err.response) {
      console.error("Status:", err.response.status);
      console.error("Data:", err.response.data);
    } else {
      console.error(err.message);
    }
  }
}

testPrediction();