import React from "react";
import { Form } from "../Molecules/Form";
import { Header } from "../Templates/Header";

export const Top = () => {
  return (
    <div className="w-full">
      <Header />
      {/* 新規登録フォームと新しく追加された単語の表示横並び */}
      <div className="md:flex mx-auto mt-10 px-10">
        <div className="w-full">
          <p className="font-semibold italic text-center sm:text-lg md:text-xl">
            Add new Word
          </p>
          <Form />
        </div>
        <div className="w-full">
          <h2 className="text-red-300 text-center">
            space for new added word{" "}
          </h2>
        </div>
      </div>

      {/* 登録された単語のカードの表示 */}
      <div></div>
    </div>
  );
};
