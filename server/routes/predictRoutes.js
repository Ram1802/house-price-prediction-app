const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

const {
  singlePrediction,
  csvPrediction,
  history,
  downloadCSV,
} = require("../controllers/predictController");

router.post("/single", auth, singlePrediction);
router.post("/csv", auth, upload.single("file"), csvPrediction);
router.get("/history", auth, history);
router.get("/download-csv", auth, downloadCSV);

module.exports = router;