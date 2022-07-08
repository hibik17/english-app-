import React from "react";

export const Table = () => {
  return (
    <table className="table-auto w-full">
      <thead className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
        <tr>
          <th className="px-4 py-2">Word</th>
          <th className="px-4 py-2">meaning</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-4 py-2">word</td>
          <td className="border px-4 py-2">meaning</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">word</td>
          <td className="border px-4 py-2">meaning</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">word</td>
          <td className="border px-4 py-2">meaning</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">word</td>
          <td className="border px-4 py-2">meaning</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">word</td>
          <td className="border px-4 py-2">meaning</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">word</td>
          <td className="border px-4 py-2">meaning</td>
        </tr>
      </tbody>
    </table>
  );
};
