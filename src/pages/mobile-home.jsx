import React from "react";
import SpecialButton from "@/components/ui/special-button";
import { Button } from "@/components/ui/button";
import {
  LinkedInLogoIcon,
  InstagramLogoIcon,
  FramerLogoIcon,
} from "@radix-ui/react-icons";
import Spline from "@splinetool/react-spline";

const MobileHome = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-cover bg-center hero-image" />
      <div className="z-10 flex justify-between items-center flex-1 px-24 pr-48">
        <div className="">
          <h1 className="text-4xl mb-8 tracking-tight">
            Welcome to
            <br />
            <span className="font-bold">
              Imperial College <br />
              Investment Scoiety
            </span>
          </h1>
          <p className="text-lg mb-4 tracking-tighter">
            A society with the purpose of increasing our members' <br />
            exposure to the investment industry. We are Imperial <br />
            College's fastest growing society, with more than 1300 <br />
            members in our community.
          </p>
          <div className="flex gap-4 mb-8">
            <Button
              variant="ghost"
              size="icon"
              className="bg-transparent backdrop-blur"
            >
              <FramerLogoIcon className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="bg-transparent backdrop-blur"
            >
              <InstagramLogoIcon className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="bg-transparent backdrop-blur"
            >
              <LinkedInLogoIcon className="h-4 w-4" />
            </Button>
          </div>
          <SpecialButton />
        </div>
      </div>
    </div>
  );
};

export default MobileHome;
