import React from "react";
import SpecialButton from "@/components/ui/special-button";

const Home = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center hero-image"
      />

      <div className="z-10 ml-24">
        <h1 className="text-4xl mb-8 tracking-tight">Welcome to<br /><span className="font-bold">Imperial College <br />Investment Scoiety</span></h1>
        <p className="text-lg mb-8 tracking-tighter">
          A society with the purpose of increasing our members' <br/>
          exposure to the investment industry. We are Imperial <br/>
          College's fastest growing society, with more than 1300 <br/>
          members in our community.
        </p>
        <SpecialButton />
      </div>
    </div>
  );
}

export default Home;