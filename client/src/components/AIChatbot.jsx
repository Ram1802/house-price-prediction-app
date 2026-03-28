import { useState } from "react";

export default function AIChatbot() {
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hi! Ask me about house prices, property investment, or features." },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", text: input };
    let botReply = { role: "bot", text: "That looks like a good property option." };

    if (input.toLowerCase().includes("best investment")) {
      botReply = { role: "bot", text: "Properties with high location score and low age are often better investments." };
    } else if (input.toLowerCase().includes("cheap")) {
      botReply = { role: "bot", text: "Try smaller area properties with lower location score for affordable options." };
    }

    setMessages((prev) => [...prev, userMsg, botReply]);
    setInput("");
  };

  return (
    <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 shadow-xl">
      <h2 className="text-2xl font-bold mb-4">AI Chatbot Assistant</h2>
      <div className="h-64 overflow-y-auto bg-slate-800 p-4 rounded-2xl mb-4">
        {messages.map((msg, i) => (
          <div key={i} className={`mb-3 ${msg.role === "user" ? "text-right" : "text-left"}`}>
            <span className={`inline-block px-4 py-2 rounded-2xl ${msg.role === "user" ? "bg-blue-600" : "bg-slate-700"}`}>
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Ask something..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-3 rounded-xl bg-slate-800 outline-none"
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl"
        >
          Send
        </button>
      </div>
    </div>
  );
}