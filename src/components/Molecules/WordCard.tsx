import React, { FC, useState } from "react";
import { BsPatchQuestion } from "react-icons/bs";
import { ImMic } from "react-icons/im";
import { Modal } from "./Modal";

type Props = {
  word: string;
  answer: string;
  deleteWord: (index: number) => void;
  index: number;
};

export const WordCard: FC<Props> = (props: Props) => {
  // propsの展開
  const { word, answer, deleteWord, index } = props;

  // modalのフラグ
  const [showModal, setShowModal] = useState(false);

  // modalから単語を削除後にmodalを閉める処理
  const closeModal = () => {
    setShowModal(false);
  };

  // 英単語の読み上げ機能実装
  const ReadEnglish = () => {
    const speackWord = new SpeechSynthesisUtterance(word);
    speechSynthesis.speak(speackWord);
  };

  // modalの開閉を管理する関数
  const changeModalStatus = () => {
    setShowModal(!showModal);
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
            onClick={changeModalStatus}
          >
            answer
          </button>
        </div>
      </div>
      {showModal && (
        <Modal
          word={word}
          answer={answer}
          setShowModal={changeModalStatus}
          deleteWord={deleteWord}
          index={index}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};
