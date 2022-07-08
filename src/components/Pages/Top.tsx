import React from "react";
import { Form } from "../Molecules/Form";
import { Header } from "../Templates/Header";

export const Top = () => {
  return (
    <div className="App">
      <Header />
      <h1 className="text-3xl font-bold text-red-400 underline">
        Hello world!
      </h1>
      <div className="w-[30%]">
        <Form />
      </div>
    </div>
  );
};
