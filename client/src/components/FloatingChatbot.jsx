import React, { useState } from "react";
import axios from "axios";
import { Bot, X, SendHorizonal } from "lucide-react";

const FloatingChatbot = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [chat, setChat] = useState([
    {
      sender: "bot",
      text: "Hi 👋 I’m your AI Property Assistant. Ask me about house prices, investment, or market trends.",
    },
  ]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = { sender: "user", text: message };
    setChat((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5000/api/ai/chat", {
        message,
      });

      setChat((prev) => [
        ...prev,
        { sender: "bot", text: res.data.reply },
      ]);
    } catch (error) {
      setChat((prev) => [
        ...prev,
        { sender: "bot", text: "AI server error. Please try again." },
      ]);
    }

    setMessage("");
    setLoading(false);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-2xl flex items-center justify-center hover:scale-110 transition premium-pulse"
      >
        {open ? <X size={26} /> : <Bot size={28} />}
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[95vw] h-[520px] glass-card rounded-[2rem] overflow-hidden flex flex-col shadow-2xl border border-white/10">
          <div className="p-4 border-b border-white/10 bg-white/5 flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center">
              <Bot size={22} />
            </div>
            <div>
              <h3 className="font-bold text-lg">AI Property Assistant</h3>
              <p className="text-xs text-slate-400">Powered by Gemini AI</p>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {chat.map((msg, index) => (
              <div
                key={index}
                className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                  msg.sender === "user"
                    ? "ml-auto bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                    : "bg-white/5 border border-white/10 text-slate-200"
                }`}
              >
                {msg.text}
              </div>
            ))}

            {loading && (
              <div className="bg-white/5 border border-white/10 text-slate-300 px-4 py-3 rounded-2xl text-sm w-fit">
                AI is typing...
              </div>
            )}
          </div>

          <div className="p-4 border-t border-white/10 flex items-center gap-3">
            <input
              type="text"
              placeholder="Ask about house prices..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-cyan-400"
            />
            <button
              onClick={sendMessage}
              className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center hover:scale-105 transition"
            >
              <SendHorizonal size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingChatbot;