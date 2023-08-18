import { useState } from "react";
import { createBrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../layouts/Layout";
import MainPage from "../page/Main";
import TodoPage from "../page/Todo";
import PrivateRoute from "./private";
// // export const router = createBrowserRouter([])
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        element: <PrivateRoute />,
        children: [
          {
            path: "/todo",
            element: <TodoPage />,
          },
        ],
      },
    ],
  },
]);

// /* 기본값 */
export default router;
