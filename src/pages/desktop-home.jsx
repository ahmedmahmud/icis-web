import React from "react";
import SpecialButton from "@/components/ui/special-button";
import { Button } from "@/components/ui/button";
import {
  LinkedInLogoIcon,
  InstagramLogoIcon,
  FramerLogoIcon,
} from "@radix-ui/react-icons";
import Spline from "@splinetool/react-spline";
import { HeroHeader } from "@/components/ui/hero-header";

const DesktopHome = () => {
  return (
    <div className="flex min-h-screen items-center hero-image bg-cover">
      <HeroHeader />
      <div className="z-10 flex justify-between items-center flex-1 px-10 lg:px-24 xl:px-48">
        <div>
          <h1 className="text-4xl mb-8 tracking-tight font-serif font-light">
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
        <div className="w-72 h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
          <Spline scene="https://prod.spline.design/ZQA7i5juxgFUwWGf/scene.splinecode" />
        </div>
      </div>
    </div>
  );
};

export default DesktopHome;
