import React, { useEffect, useState } from "react";

const TypingText = ({ text = "Welcome back to your AI Real Estate Command Center" }) => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, 35);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <p className="text-slate-300 text-lg md:text-xl font-medium">
      {displayed}
      <span className="animate-pulse">|</span>
    </p>
  );
};

export default TypingText;