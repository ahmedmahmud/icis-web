import React, { useState, useEffect } from "react";
import SpecialButton from "@/components/ui/special-button";
import { Button } from "@/components/ui/button";
import {
  LinkedInLogoIcon,
  InstagramLogoIcon,
  FramerLogoIcon,
} from "@radix-ui/react-icons";
import Spline from "@splinetool/react-spline";
import { HeroHeader } from "@/components/ui/hero-header";
import TopgradLogo from "@/public/topgrad_uk_logo.jpeg";

const DesktopHome = () => {
  // State to control visibility of the popup
  

  return (
    <div className="flex flex-col min-h-screen items-left hero-image bg-cover z-index-3">
      <HeroHeader />
      <div className="my-20 z-30 flex items-end content-between flex-1 px-10 lg:px-24 xl:px-48">
        <div className="mb-8">
          <h1 className="my-40 text-4xl mb-8 tracking-tight font-serif font-light fade-in-text">
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
            <a href="https://www.framer.com" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="bg-transparent backdrop-blur"
              >
                <FramerLogoIcon className="h-4 w-4" />
              </Button>
            </a>

            <a href="https://www.instagram.com/ic.investmentsociety/" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="bg-transparent backdrop-blur"
              >
                <InstagramLogoIcon className="h-4 w-4" />
              </Button>
            </a>

            <a href="https://www.linkedin.com/company/ic-investment/?originalSubdomain=uk" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="bg-transparent backdrop-blur"
              >
                <LinkedInLogoIcon className="h-4 w-4" />
              </Button>
            </a>
          </div>
          <SpecialButton />
        </div>
        <div className="w-72 h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 mb-8 ml-12 lg:ml-30 xl:ml-24">
          {/* <Spline scene="https://prod.spline.design/ZQA7i5juxgFUwWGf/scene.splinecode" /> */}
        </div>
      </div>

     

      {/* Contact Information Section */}
      <footer className="text-white py-8 px-10 lg:px-24 xl:px-48">
        <div className="flex flex-col items-center">
          <p className="text-lg mb-2">Contact Us</p>
          <p className="mb-2">Email: info@icinvestmentsociety.com</p>
          <p className="mb-2">
            Address: Imperial College London, South Kensington, London, SW7 2AZ, UK
          </p>
        </div>
      </footer>
    </div>
  );
};

export default DesktopHome;