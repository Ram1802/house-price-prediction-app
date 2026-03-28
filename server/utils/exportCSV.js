const { Parser } = require("json2csv");

exports.exportPredictionsCSV = (data) => {
  const fields = ["area", "bedrooms", "bathrooms", "locationScore", "age", "predictedPrice", "modelUsed"];
  const json2csv = new Parser({ fields });
  return json2csv.parse(data);
};