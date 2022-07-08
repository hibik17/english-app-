import React from "react";
import { BiAlarmAdd } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export const DocumentHeaderTop = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-[50%] p-[40px]">
      <div>
        <button
          className="flex items-center flex-shrink-0 text-white mr-6"
          onClick={() => navigate("/")}
        >
          <BiAlarmAdd className="w-10 h-10 text-blue-300" />
          <span className="font-mono text-xl pl-2">Eng Word</span>
        </button>
      </div>
    </div>
  );
};
