import React, { FC } from "react";
import { BsPatchQuestion } from "react-icons/bs";
import { ImMic } from "react-icons/im";

type Props = {
  word: string;
  answer: string;
  deleteWord: () => void;
};

export const WordCard: FC<Props> = (props: Props) => {
  // propsの展開
  const { word, answer, deleteWord } = props;

  // 英単語の読み上げ機能実装
  const ReadEnglish = () => {
    const speackWord = new SpeechSynthesisUtterance(word);
    speechSynthesis.speak(speackWord);
  };

  return (
    <div className="max-w-sm rounded-lg border border-gray-200 shadow-md bg-gradient-to-r from-green-200 to-green-500">
      <div className="flex justify-end">
        <button onClick={ReadEnglish}>
          <ImMic className="w-10 h-10 pt-2 text-white" />
        </button>
      </div>
      <div className="flex flex-col items-center pb-10 py-5">
        <BsPatchQuestion className="mb-3 w-24 h-24 rounded-full shadow-lg" />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {word}
        </h5>
        <div className="flex mt-4 space-x-3 lg:mt-6">
          <button
            className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800"
            onClick={() => alert(answer)}
          >
            answer
          </button>
          <button
            className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100"
            onClick={deleteWord}
          >
            delete
          </button>
        </div>
      </div>
    </div>
  );
};
