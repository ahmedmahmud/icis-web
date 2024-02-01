import React from "react";

import Home from "./pages/home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BasicLayout from "./layouts/basic-layout";

const App = () => {
  const router = createBrowserRouter([
    {
      element: <BasicLayout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
      ]
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
