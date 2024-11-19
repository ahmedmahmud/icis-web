import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./pages/home";
import Team from "./pages/team";
import Partners from "./pages/partners";
import Sec from "./pages/sec";
import QTCaptial from "./pages/qtcapital";
import Overview from "./pages/overview";
import Newsletter from "./pages/newsletter";
import Calendar from './pages/calendar';
import Podcast from './pages/podcast';

import BasicLayout from "./layouts/basic-layout";
import { ThemeProvider } from "./components/theme-provider";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      element: <BasicLayout />,
      children: [
        {
          path: "/team",
          element: <Team />,
        },
        {
          path: "/partners",
          element: <Partners />,
        },
        {
          path: "sec",
          element: <Sec />,
        },
        {
          path: "qtcapital",
          element: <QTCaptial />,
        },
        {
          path: "overview",
          element: <Overview />,
        },
        {
          path: "newsletter",
          element: <Newsletter />,
        },
        {
          path: "calendar",
          element: <Calendar />,
        },
        {
          path: "podcast",
          element: <Podcast />,
        },
      ],
    },
  ]);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
