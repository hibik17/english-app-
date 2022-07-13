import { memo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Docs } from "./components/Pages/Docs";
import { NotFound } from "./components/Pages/NotFound";
import { Top } from "./components/Pages/Top";
import { Opening } from "./components/Pages/Opening";
const routes = [
  { path: "/", element: <Opening /> },
  { path: "/Words", element: <Top /> },
  { path: "/docs", element: <Docs /> },
  { path: "*", element: <NotFound /> },
];

export const Router = memo(() => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route path={route.path} key={index} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
});
