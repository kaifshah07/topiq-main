// src/components/sections/downloadApp/DownloadAppImage.jsx

import { motion } from "framer-motion";
import { Download, Star, Smartphone } from "lucide-react";
import SlideRight from "../../../animations/SlideRight";
import downloadAppData from "./downloadAppData";

export default function DownloadAppImage() {
  return (
    <SlideRight className="w-full flex items-center justify-center">
      <div className="relative mx-auto flex w-full max-w-[440px] lg:max-w-none items-center justify-center px-4 sm:px-0">
        
        {/* Floating Overlay Badge widget 1: Downloads count summary */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-0 top-20 z-20 rounded-2xl border border-slate-100 bg-white/95 px-4 py-3.5 shadow-xl shadow-slate-900/5 backdrop-blur-md"
        >
          <div className="flex items-center gap-2.5 min-w-[90px]">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
              <Download size={16} />
            </div>
            <div className="flex flex-col">
              <p className="text-[9px] uppercase font-bold tracking-wider text-slate-400 leading-none">Downloads</p>
              <h4 className="text-sm font-extrabold text-slate-900 tracking-tight mt-0.5">{downloadAppData.downloads}</h4>
            </div>
          </div>
        </motion.div>

        {/* Floating Overlay Badge widget 2: Stars App review status parameters summary */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-24 right-0 z-20 rounded-2xl border border-slate-100 bg-white/95 px-4 py-3.5 shadow-xl shadow-slate-900/5 backdrop-blur-md"
        >
          <div className="flex items-center gap-2.5 min-w-[80px]">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-yellow-50 text-yellow-500">
              <Star size={16} className="fill-yellow-500/10" />
            </div>
            <div className="flex flex-col">
              <p className="text-[9px] uppercase font-bold tracking-wider text-slate-400 leading-none">Rating</p>
              <h4 className="text-sm font-extrabold text-slate-900 tracking-tight mt-0.5">{downloadAppData.rating}</h4>
            </div>
          </div>
        </motion.div>

        {/* Floating Overlay Decorative Frame 3: Tech Icon Box capsule */}
        <div className="absolute right-8 bottom-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-xl shadow-blue-500/20 z-20 pointer-events-none">
          <Smartphone size={22} />
        </div>

        {/* Main Canvas Device Frame Container Layout image */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative z-10 overflow-hidden rounded-[3rem] w-full border border-slate-200/65 bg-white p-3 shadow-[0_30px_70px_rgba(1,41,90,0.07)]"
        >
          <img
            src="image/11.png"
            alt="TOPIQ learning platform interface preview panel dashboard on high end mobile smartphone viewport device mockup canvas"
            className="w-full h-auto min-h-[400px] max-h-[560px] rounded-[2.2rem] object-cover bg-slate-50"
            loading="lazy"
          />
        </motion.div>

      </div>
    </SlideRight>
  );
}