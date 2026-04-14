import React from "react";

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-cyan-500/20 blur-3xl rounded-full animate-pulse" />
      <div className="absolute top-[20%] right-[-80px] w-[280px] h-[280px] bg-purple-500/20 blur-3xl rounded-full animate-bounce" />
      <div className="absolute bottom-[-100px] left-[20%] w-[350px] h-[350px] bg-pink-500/20 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-[10%] right-[10%] w-[250px] h-[250px] bg-blue-500/20 blur-3xl rounded-full animate-bounce" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.12),transparent_30%)]" />
    </div>
  );
};

export default AnimatedBackground;