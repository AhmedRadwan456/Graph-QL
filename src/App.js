import React from "react";
import Category from "../src/Component/Categories/Categories.jsx";
import Layout from "./Component/Layout/Layout.jsx";
import Details from "./Component/Details/Details.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";


export default function App() {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Category />,
        },
        {
          path: "details/:id",
          element: <Details />,
        },
       
        // { path: "*", element: <Notfound /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
     
    </>
  );
}
