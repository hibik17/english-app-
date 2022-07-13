import React, { memo, useState } from "react";
import { CardTitle } from "../Atoms/CardTitle";
import { FormTitle } from "../Atoms/FormTitle";
import { TableTitle } from "../Atoms/TableTitle";
import { WordCard } from "../Molecules/WordCard";
// import { Form } from "../Organisms/Form";
import { Table } from "../Organisms/Table";
import { Footer } from "../Templates/Footer";
import { Header } from "../Templates/Header";

export const Top = memo(() => {
  // 新規登録の英語入力を管理するstate
  const [newWord, setWord] = useState("");

  // 新規登録の英語の意味の入力を管理するstate
  const [answer, setAnswer] = useState("");

  // 英単語の管理を行うカード
  const [wordList, setWordList] = useState([
    { word: "apple", answer: "りんご" },
    { word: "lucky", answer: "運が良い" },
    { word: "little", answer: "少し" },
    { word: "challege", answer: "挑戦" },
    { word: "house", answer: "家" },
    { word: "document", answer: "文書" },
    { word: "team", answer: "チーム" },
  ]);

  // 英単語のカードの削除を行う。
  const deleteWord = (index: number) => {
    const newCardList = [...wordList];
    newCardList.splice(index, 1);
    setWordList(newCardList);
    console.log("card was deleted");
  };

  // 英単語の追加を行う
  const AddCard = () => {
    if (newWord === "" || answer === "") return;
    setWordList([...wordList, { word: newWord, answer: answer }]);
    setWord("");
    setAnswer("");
  };

  return (
    <div className="w-full">
      <Header />
      {/* 新規登録フォームと新しく追加された単語の表示横並び */}
      <div className="md:flex mx-auto my-10 px-10 animate-in slide-in-from-left duration-500">
        <div className="w-full mx-5">
          <FormTitle />
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Word
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="単語を入力"
                type="text"
                value={newWord}
                onChange={(e) => {
                  setWord(e.target.value);
                }}
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Meaning
              </label>
              <input
                className="shadow appearance-none border border-gray-200 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                required
                placeholder="単語の意味"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                onClick={AddCard}
              >
                Create
              </button>
            </div>
          </div>
        </div>
        <div className="w-full mx-5">
          <TableTitle />
          <Table wordList={wordList.slice().reverse().slice(0, 6)} />
        </div>
      </div>
      {/* 登録された単語のカードの表示 */}
      <div className="animate-in slide-in-from-bottom duration-500">
        <CardTitle />
        <div className="px-10 grid sm:mx-auto sm:grid-cols-1 sm:gap-3 md:grid-cols-3 lg:grid-cols-5 md:gap-4">
          {wordList.map((list, index) => (
            <WordCard
              key={index}
              word={list.word}
              answer={list.answer}
              deleteWord={deleteWord}
              index={index}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
});
