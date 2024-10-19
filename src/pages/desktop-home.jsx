import React from "react";
import SpecialButton from "@/components/ui/special-button";
import { Button } from "@/components/ui/button";
import {
  LinkedInLogoIcon,
  InstagramLogoIcon,
  FramerLogoIcon,
} from "@radix-ui/react-icons";
import { TreePalm } from "lucide-react"; // Import the TreePalm icon

import Spline from "@splinetool/react-spline";
import { HeroHeader } from "@/components/ui/hero-header";

const DesktopHome = () => {
  return (
    <div className="flex flex-col min-h-screen z-index-3">
      {/* Top Section with Background Image */}
      <div
        className="relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('hero.jpg')`, // Replace with the correct path
          height: '100vh', // Adjust height as necessary
        }}
      >
        <HeroHeader />
        <div className="my-20 flex items-end content-between flex-1 px-10 lg:px-24 xl:px-48 bg-cover bg-center">
          <div className="mb-8 text-white "> {/* Ensure text is visible over the image */}
            <h1 className="my-40 text-4xl mb-8 tracking-tight font-serif font-bold fade-in-text">
              Welcome to
              <br />
              <span className="font-bold">
                Imperial College <br />
                Investment Society
              </span>
            </h1>
            <p className="text-md lg:text-lg mb-4 tracking-tighter">
              A society with the purpose of increasing our members' <br />
              exposure to the investment industry. We are Imperial <br />
              College's fastest growing society, with more than 1300 <br />
              members in our community.
            </p>
            <div className="flex gap-4 mb-8">


              <a href="https://www.instagram.com/ic.investmentsociety/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                >
                  <InstagramLogoIcon className="h-4 w-4" />
                </Button>
              </a>

              <a href="https://www.linkedin.com/company/ic-investment/?originalSubdomain=uk" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                >
                  <LinkedInLogoIcon className="h-4 w-4" />
                </Button>
              </a>

              {/* TreePalm icon button */}
              <a href="https://linktr.ee/ic.investmentsociety" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                >
                  <TreePalm size={16} color="#ffffff" />
                </Button>
              </a>
            </div>
            <SpecialButton />
          </div>
        </div>
      </div>

      {/* New Section for Team Picture */}
      <section className="bg-cover py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Our Team</h2>
          <p className="text-lg text-white mb-6">
            We are working hard to help you break into the finance industry to achieve your career goals, through speakers, networking sessions, a 101 Finance course, or our very own Queen's Tower capital fund.
          </p>
          <img
            src="img/team/Group picture.png"
            alt="Group Picture"
            className="rounded-lg shadow-lg mx-auto" // Center the image
            style={{ width: "80%", maxWidth: "800px" }} // Adjust size as needed
          />
        </div>
      </section>

      {/* Contact Information Section */}
      <footer className="text-white py-8 px-10 lg:px-24 xl:px-48">
        <div className="flex flex-col items-center">
          <p className="text-lg mb-2">Contact Us</p>
          <p className="mb-2">Email: icis15@ic.ac.uk</p>
          <p className="mb-2">
            Address: Imperial College London, South Kensington, London, SW7 2AZ, UK
          </p>
        </div>
      </footer>
    </div>
  );
};

export default DesktopHome;
