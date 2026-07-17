import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

import Logo from "../navbar/Logo";
import DesktopMenu from "../navbar/DesktopMenu";
import DesktopButtons from "../navbar/DesktopButtons";
import MobileMenu from "../navbar/MobileMenu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

      setScrolled(scrollY > 30);
      setScrollProgress(height > 0 ? (scrollY / height) * 100 : 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const escapeHandler = (event) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };

    window.addEventListener("keydown", escapeHandler);
    return () => window.removeEventListener("keydown", escapeHandler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.div
        className="fixed left-0 top-0 z-[100] h-[3px] bg-gradient-to-r from-[#01295A] via-blue-500 to-[#FE7C02]"
        style={{ width: `${scrollProgress}%` }}
      />

      <header
        className={`fixed left-1/2 top-4 z-50 w-[min(92%,1280px)] -translate-x-1/2 transition-all duration-500 ${
          scrolled
            ? "rounded-full border border-slate-200/80 bg-white/85 shadow-[0_20px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl"
            : "rounded-full border border-white/70 bg-white/75 shadow-[0_10px_35px_rgba(15,23,42,0.06)] backdrop-blur-lg"
        }`}
      >
        <div className="flex min-h-[68px] items-center justify-between px-4 sm:px-6 lg:px-7">
          <div className="flex-shrink-0">
            <Logo />
          </div>

          <div className="hidden flex-1 justify-center lg:flex">
            <DesktopMenu />
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <DesktopButtons />
          </div>

          <button
            type="button"
            aria-label="Open navigation menu"
            onClick={() => setMobileOpen(true)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 lg:hidden"
          >
            <Menu size={20} />
          </button>
        </div>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
