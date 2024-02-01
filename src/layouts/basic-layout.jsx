import React from "react";
import { SiteHeader } from "@/components/ui/site-header";
import { Outlet } from "react-router-dom";

const BasicLayout = () => {
    return (
        <>
            <SiteHeader />
            <Outlet />
        </>
    );
}

export default BasicLayout