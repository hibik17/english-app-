import React from "react";
import { useNavigate } from "react-router-dom";

export const Opening = () => {
  const navigate = useNavigate();
  // opening animation
  window.onload = () => {
    setTimeout(() => {
      navigate("/words");
    }, 3000);
  };

  return (
    <div
      className="
      h-screen w-screen flex justify-center items-center animate-in fade-in-100
      text-3xl
    "
    >
      Welcome to Eng Word
    </div>
  );
};
