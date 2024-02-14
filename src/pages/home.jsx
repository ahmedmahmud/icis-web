import React from "react";
import DesktopHome from "./desktop-home";
import MobileHome from "./mobile-home";

const Home = () => {
  return (
    <>
      <div className="hidden md:block">
        <DesktopHome />
      </div>
      <div className="md:hidden">
        <MobileHome />
      </div>
    </>
  );
};

export default Home;
