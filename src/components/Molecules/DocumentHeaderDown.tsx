import React from "react";
import { FaFoursquare } from "react-icons/fa";

export const DocumentHeaderDown = () => {
  return (
    <div className="w-full h-[100%] text-center animate-in slide-in-from-bottom duration-1000 ">
      <div className="font-mono text-3xl mb-10 flex justify-center">
        <FaFoursquare />
        Documentation
      </div>
      <div className="text-white font-mono">
        Welcome to Eng Word!
        <br />
        このページでは、このアプリの基本的な使い方を見ることができます。
      </div>
    </div>
  );
};
