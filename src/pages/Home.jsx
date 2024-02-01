import React from "react";
import { SiteHeader } from "@/components/ui/site-header";
 
const Home = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Image with Blurred Grain Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center test"
      ></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Your Hero Image Page</h1>
        <p className="text-lg text-gray-600 mb-8">Your description goes here.</p>
        {/* Add more content or components as needed */}
      </div>
    </div>
  );
}

export default Home;