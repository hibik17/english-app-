import React from "react";
import { BsPatchQuestion } from "react-icons/bs";
import { ImMic } from "react-icons/im";

export const WordCard = () => {
  return (
    <div className="max-w-sm rounded-lg border border-gray-200 shadow-md bg-gradient-to-r from-green-200 to-green-500">
      <div className="flex justify-end">
        <button onClick={() => alert("speach english")}>
          <ImMic className="w-10 h-10 pt-2 text-white" />
        </button>
      </div>
      <div className="flex flex-col items-center pb-10 py-5">
        <BsPatchQuestion className="mb-3 w-24 h-24 rounded-full shadow-lg" />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          English word
        </h5>
        <div className="flex mt-4 space-x-3 lg:mt-6">
          <button className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800">
            answer
          </button>
          <button className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100">
            delete
          </button>
        </div>
      </div>
    </div>
  );
};
