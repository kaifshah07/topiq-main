// src/components/layout/SiteLayout.jsx

import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";

import NestedSiteShellContext from "../../context/SiteShellContext";

export default function SiteLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-hidden">
      <Navbar />

      <main
        id="main-content"
        className="w-full flex-1"
      >
        <NestedSiteShellContext.Provider value={true}>
          <Outlet />
        </NestedSiteShellContext.Provider>
      </main>

      <Footer />
    </div>
  );
}