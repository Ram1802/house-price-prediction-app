const express = require("express");
const axios = require("axios");

const router = express.Router();

router.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ reply: "Message is required" });
    }

    const prompt = `
You are a smart AI real estate assistant for a House Price Prediction dashboard.
Your job:
- Help users about house prices
- Give property buying suggestions
- Explain market trends
- Give investment tips
- Keep answers short, smart, helpful, and premium looking
- If user asks non-real-estate question, still answer politely

User: ${message}
`;

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [
          {
            parts: [{ text: prompt }],
          },
        ],
      }
    );

    const reply =
      response.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Sorry, I couldn't generate a response right now.";

    res.json({ reply });
  } catch (error) {
    console.error("AI Chat Error:", error.response?.data || error.message);
    res.status(500).json({ reply: "AI server error. Please try again." });
  }
});

module.exports = router;