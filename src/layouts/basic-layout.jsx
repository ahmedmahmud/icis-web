import React from "react";
import { SiteHeader } from "@/components/ui/site-header";
import { Outlet } from "react-router-dom";
import { SiteFooter } from "@/components/ui/site-footer";

const BasicLayout = () => {
    return (
        <>
            <SiteHeader />
            <Outlet />
            <SiteFooter />
        </>
    );
}

export default BasicLayout