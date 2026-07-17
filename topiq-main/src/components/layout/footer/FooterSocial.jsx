// src/components/layout/footer/FooterSocial.jsx

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaXTwitter } from "react-icons/fa6";
import FadeUp from "../../../animations/FadeUp";
import StoreButton from "../../sections/downloadApp/StoreButton";
import footerData from "./footer";

const iconMap = {
  Facebook: FaFacebookF,
  Instagram: FaInstagram,
  Linkedin: FaLinkedinIn,
  Youtube: FaYoutube,
  Twitter: FaXTwitter,
};

export default function FooterSocial() {
  return (
    <FadeUp delay={0.15}>
      <div className="flex flex-col gap-y-8">
        
        {/* Social Link Stack */}
        <div className="flex flex-col gap-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-[#01295A]">
            Connect With Us
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {footerData.social.map((item) => {
              const Icon = iconMap[item.icon];
              return (
                <motion.a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.platform}
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-600 transition-all duration-200 hover:border-[#01295A] hover:bg-[#01295A] hover:text-white"
                >
                  {Icon && <Icon size={15} />}
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* Mobile Download Button Stack */}
        <div className="flex flex-col gap-y-4">
          <div className="flex items-center gap-2 text-[#01295A]">
            <Download size={16} className="text-[#FE7C02]" />
            <span className="font-bold text-sm tracking-wide">Download Our App</span>
          </div>
          <div className="flex w-full max-w-[270px] flex-col gap-3">
            <StoreButton
              icon={footerData.app.googlePlay.icon}
              name={footerData.app.googlePlay.title}
              subtitle="GET IT ON"
              url={footerData.app.googlePlay.url}
            />
            <StoreButton
              icon={footerData.app.appStore.icon}
              name={footerData.app.appStore.title}
              subtitle="Download on the"
              url={footerData.app.appStore.url}
            />
          </div>
        </div>

      </div>
    </FadeUp>
  );
}
