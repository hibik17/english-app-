import React, { FC } from "react";

type Word = {
  word: string;
  answer: string;
};

type Props = {
  wordList: Word[];
};

export const Table: FC<Props> = (props: Props) => {
  // tableで表示をする単語のリストをpropsから取得
  const { wordList } = props;
  return (
    <table className="table-auto w-full">
      <thead className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
        <tr>
          <th className="px-4 py-2">Word</th>
          <th className="px-4 py-2">meaning</th>
        </tr>
      </thead>
      <tbody>
        {wordList.map((list, index) => (
          <tr key={index}>
            <th className="border px-4 py-2">{list.word}</th>
            <th className="border px-4 py-2">{list.answer}</th>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
