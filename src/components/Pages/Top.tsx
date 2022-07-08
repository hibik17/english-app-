import React from "react";
import { CardTitle } from "../Atoms/CardTitle";
import { FormTitle } from "../Atoms/FormTitle";
import { TableTitle } from "../Atoms/TableTitle";
import { WordCard } from "../Molecules/WordCard";
import { Form } from "../Organisms/Form";
import { Table } from "../Organisms/Table";
import { Footer } from "../Templates/Footer";
import { Header } from "../Templates/Header";

export const Top = () => {
  return (
    <div className="w-full">
      <Header />
      {/* 新規登録フォームと新しく追加された単語の表示横並び */}
      <div className="md:flex mx-auto my-10 px-10">
        <div className="w-full mx-5">
          <FormTitle />
          <Form />
        </div>
        <div className="w-full mx-5">
          <TableTitle />
          <Table />
        </div>
      </div>
      {/* 登録された単語のカードの表示 */}
      <CardTitle />
      <div className="px-10 grid sm:mx-auto sm:grid-cols-1 sm:gap-3 md:grid-cols-3 lg:grid-cols-5 md:gap-4">
        <WordCard />
        <WordCard />
        <WordCard />
        <WordCard />
        <WordCard />
      </div>
      <Footer />
    </div>
  );
};
