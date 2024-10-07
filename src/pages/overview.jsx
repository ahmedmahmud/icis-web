// src/pages/Overview.js
import React, { useState, useEffect } from 'react';
import InstagramPost from '@/components/ui/InstagramPost';
import InstaPostTwo from '@/components/ui/InstaPostTwo';
import InstaPostFour from '@/components/ui/InstaPostFour';
import TopgradLogo from "@/public/topgrad_uk_logo.jpeg";



export default function Overview() {

  const [popupVisible, setPopupVisible] = useState(false);

  useEffect(() => {
    // Set a timer to update the state after 3 seconds
    const timer = setTimeout(() => {
      setPopupVisible(true);
    }, 3000);

    // Clean up timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  // Function to handle the close button click
  const handleClosePopup = () => {
    setPopupVisible(false);
  };
 {/* Pop-up Section */}
 {popupVisible && (
  <div className="fixed bottom-0 right-0 m-4 w-full max-w-sm bg-gray-900 text-white shadow-lg rounded-lg z-index-10">
    <div className="relative flex flex-col p-6">
      {/* Close Button */}
      <button 
        onClick={handleClosePopup} 
        className="absolute top-2 right-2 text-white hover:text-gray-400"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div className="flex-1 text-left">
        <h2 className="text-2xl mb-4 tracking-tight font-serif font-light">
          Recent Achievement
        </h2>
        <p className="text-sm md:text-base mb-4 tracking-tighter">
          We are proud to announce that the Imperial College Investment Society
          <a 
            href="https://www.linkedin.com/feed/update/urn:li:activity:7036712096104902656/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="underline">
            was voted the Best Business and Finance Society
          </a> 
          in the UK by Topgrad for the academic year 2022-2023. Thank you to all our members for their support and dedication!
        </p>
      </div>
      <div className="flex justify-center">
        <img src={TopgradLogo} alt="Topgrad Logo" className="w-20 h-auto" />
      </div>
    </div>
  </div>
)}

  return (
    <div>
      <h1 className="my-40 text-4xl mb-8 text-center tracking-tight font-serif font-light fade-in-text"> EVENTS </h1>
      <h2 className="ps-10 my-40 text-2xl font-semibold mb-8">
        Exclusive insights into the finance industry
      </h2>
      <div className="w-1/3 p-4 mx-10 bg-gray-700 border border-gray-300 rounded-lg shadow-md">
        <p>
          Join us for talks and workshops where experts and seasoned investors share their insights and strategies. Whether you're an aspiring trader or just curious about the world of finance, our talks offer invaluable knowledge to help you make informed investment decisions and advance your career. Don't miss out on the opportunity to learn from the best!
        </p>
      </div>

      <h2 className="ps-10 my-40 text-2xl font-semibold mb-8">
        Workshops and Courses in all areas of finance
      </h2>
      <div className="w-1/3 p-4 mx-10 bg-gray-700 border border-gray-300 rounded-lg shadow-md">
        <p>
          We offer both student and professional led courses on a wide range of topics, including a four-parter on the basics of accounting and our 
          <a href="https://investmentsoc.com/sec" className="text-blue-500 underline hover:text-blue-700">
            flagship SEC course
          </a>.
        </p>
      </div>

      <h2 className="ps-10 my-40 text-2xl font-semibold mb-8">
        Opportunities to network at each of our events
      </h2>
      <div className="w-1/3 p-4 mx-10 bg-gray-700 border border-gray-300 rounded-lg shadow-md">
        <p>
          Connect with industry leaders and find out what a career in finance really entails, whilst building up your network and taking the chance to meet like-minded students also interested in finance.
        </p>
      </div>

      <h2 className="ps-10 mt-40 mb-10 text-2xl tracking-wider fade-in-text">
        Some recent highlights...
      </h2>
      <div className="mx-10 flex flex-row gap-8">
        <div className="flex-1">
          <InstagramPost /> {/* Use the InstagramPost component */}
        </div>
        <div className="flex-1">
          <InstaPostTwo /> {/* Use the InstaPostTwo component */}
        </div>
        <div className="flex-1">
          <InstaPostFour /> {/* Use the InstaPostFour component */}
        </div>
      </div>

    </div>
  );
}
