import React from "react";
import { GiOwl } from "react-icons/gi";

export const DocumentContent = () => {
  return (
    <div className="w-full h-auto animate-in slide-in-from-bottom duration-700">
      <div className="container mx-auto">
        {/* title */}
        <span className="flex text-center p-20">
          <GiOwl className="text-gray-400 w-8 h-8" />
          <span className="text-2xl font-mono text-gray-400"> USER MANUAL</span>
        </span>

        {/* explanation card */}
        <div className="w-4/5 mx-auto rounded-md min-h-[300px] bg-slate-200 shadow-lg p-8">
          <span className="text-2xl font-mono text-gray-400">
            Quick Start Guide
          </span>
          {/* Add task section */}
          <div className="m-10">
            <span className="text-lg font-mono text-gray-400">
              1. Add your task
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
