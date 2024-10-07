import React from "react";
import SpecialButton from "@/components/ui/special-button";
import { Button } from "@/components/ui/button";
import {
  LinkedInLogoIcon,
  InstagramLogoIcon,
  FramerLogoIcon,
} from "@radix-ui/react-icons";
import { HeroHeader } from "@/components/ui/hero-header";

const MobileHome = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      <HeroHeader />
      <div className="absolute inset-0 bg-cover bg-center hero-image" />
      <div className="z-10 flex justify-between items-center flex-1 px-8">
        <div className="">
          <h1 className="text-4xl mb-8 tracking-tight font-serif font-light">
            Welcome to
            <br />
            <span className="font-bold">
              Imperial College <br />
              Investment Society
            </span>
          </h1>
          <p className="text-md mb-4 tracking-tighter">
            A society with the purpose of increasing our members' exposure to
            the investment industry. We are Imperial College's fastest growing
            society, with more than 1300 members in our community.
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
