import React, { FC, memo, useState } from "react";

// type Props = {
//   AddCard: () => void;
// };

// export const Form: FC = memo((props) => {
//   return (
//     <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//       <div className="mb-4">
//         <label className="block text-gray-700 text-sm font-bold mb-2">
//           Word
//         </label>
//         <input
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           placeholder="単語を入力"
//           type="text"
//           value={newWord}
//           onChange={(e) => {
//             setWord(e.target.value);
//           }}
//           required
//         />
//       </div>
//       <div className="mb-6">
//         <label className="block text-gray-700 text-sm font-bold mb-2">
//           Meaning
//         </label>
//         <input
//           className="shadow appearance-none border border-gray-200 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
//           type="text"
//           required
//           placeholder="単語の意味"
//           value={answer}
//           onChange={(e) => setAnswer(e.target.value)}
//         />
//       </div>
//       <div className="flex items-center justify-between">
//         <button
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           type="submit"
//           onClick={AddCard}
//         >
//           Create
//         </button>
//       </div>
//     </div>
//   );
// });
