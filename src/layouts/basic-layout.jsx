import React from "react";
import { HeroHeader } from "@/components/ui/hero-header";

import { Outlet } from "react-router-dom";
import { SiteFooter } from "@/components/ui/site-footer";

const BasicLayout = () => {
  return (
    <>
      <HeroHeader />
      <Outlet />
      <SiteFooter />
    </>
  );
};

export default BasicLayout;
