// src/pages/Overview.js
import React, { useState, useEffect } from 'react';
import InstagramPost from '@/components/ui/InstaPostOne';
import InstaPostTwo from '@/components/ui/InstaPostTwo';
import InstaPostFour from '@/components/ui/InstaPostFour';

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

  return (
    <div className="container mx-auto px-4">
      <h1 className="my-40 text-4xl mb-8 text-center tracking-tight font-serif font-light fade-in-text"> EVENTS </h1>

      {/* Event Sections */}
      <div className="grid grid-cols-2 gap-8 mb-40">
        {/* Exclusive Insights Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Exclusive insights into the finance industry</h2>
          <div className="p-4 bg-gray-700 border border-gray-300 rounded-lg shadow-md mb-4">
            <p>
              Join us for talks and workshops where experts and seasoned investors share their insights and strategies. Whether you're an aspiring trader or just curious about the world of finance, our talks offer invaluable knowledge to help you make informed investment decisions and advance your career. Don't miss out on the opportunity to learn from the best!
            </p>
          </div>
          <img src="img/events/rebecca speaking.jpg" alt="Finance Event" className="w-full h-auto rounded" />
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Workshops and Courses in all areas of finance</h2>
          <div className="p-4 bg-gray-700 border border-gray-300 rounded-lg shadow-md mb-4">
            <p>
              We offer both student and professional-led courses on a wide range of topics, including a four-parter on the basics of accounting and our 
              <a href="https://investmentsoc.com/sec" className="text-blue-500 underline hover:text-blue-700"> flagship SEC course</a>.
            </p>
          </div>
          <img src="img/events/speakers.jpg" alt="Workshops" className="w-full h-auto rounded" />
        </div>

        {/* Networking Opportunities Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Opportunities to network at each of our events</h2>
          <div className="p-4 bg-gray-700 border border-gray-300 rounded-lg shadow-md mb-4">
            <p>
              Connect with industry leaders and find out what a career in finance really entails, whilst building up your network and taking the chance to meet like-minded students also interested in finance.
            </p>
          </div>
          <img src="img/events/audience.jpg" alt="Networking" className="w-full h-auto rounded" />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Some recent highlights...</h2>
          <div className="p-4 bg-gray-700 border border-gray-300 rounded-lg shadow-md mb-4">
            <p>
              Explore our recent highlights and the impact of our events in the finance community.
            </p>
          </div>
          <img src="img/events/networking.jpg" alt="Networking" className="w-full h-auto rounded" />
        </div>
      </div>

      {/* Recent Highlights Section */}
      <h2 className="mt-40 mb-10 text-2xl tracking-wider fade-in-text pt-10 text-center">Some recent highlights...</h2>
      <div className="mx-10 flex flex-row gap-8 pb-10">
        <div className="flex-1">
          <InstaPostTwo />
        </div>
        <div className="flex-1">
          <InstaPostTwo />
        </div>
        <div className="flex-1">
          <InstaPostFour />
        </div>
      </div>
    </div>
  );
}
