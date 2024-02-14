import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./pages/home";
import Team from "./pages/team";
import BasicLayout from "./layouts/basic-layout";
import { ThemeProvider } from "./components/theme-provider";

const App = () => {
  const router = createBrowserRouter([
    {
      element: <BasicLayout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/team',
          element: <Team />,
        },
      ]
    }
  ]);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
