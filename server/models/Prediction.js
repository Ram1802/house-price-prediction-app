const mongoose = require("mongoose");

const predictionSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    area: Number,
    bedrooms: Number,
    bathrooms: Number,
    locationScore: Number,
    age: Number,
    predictedPrice: Number,
    modelUsed: String,
    image: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Prediction", predictionSchema);