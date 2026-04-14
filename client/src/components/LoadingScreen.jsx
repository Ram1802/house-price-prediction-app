import React from "react";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-slate-950 flex flex-col items-center justify-center">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 rounded-full border-4 border-cyan-500/20"></div>
        <div className="absolute inset-0 rounded-full border-t-4 border-cyan-400 animate-spin"></div>
        <div className="absolute inset-3 rounded-full border-t-4 border-purple-500 animate-spin [animation-direction:reverse]"></div>
      </div>

      <h2 className="mt-8 text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
        Loading HouseAI Dashboard...
      </h2>

      <p className="mt-2 text-slate-400">Preparing premium analytics experience</p>
    </div>
  );
};

export default LoadingScreen;