import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

import {
  navigation,
  resourcesMenu,
  companyMenu,
} from "../../data/navigation";

export default function DesktopMenu() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const dropdownData = {
    resources: resourcesMenu,
    company: companyMenu,
  };

  const isDropdownActive = (type) => {
    const pages = dropdownData[type]?.map((item) => item.path);
    return pages?.includes(location.pathname);
  };

  return (
    <nav className="hidden flex-1 items-center justify-center lg:flex">
      <div className="flex items-center gap-1 xl:gap-2">
        {navigation.map((item) => {
          if (item.dropdown) {
            const open = activeDropdown === item.type;
            const active = isDropdownActive(item.type);

            return (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.type)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                
                <button
                  className={`flex items-center gap-1 rounded-full px-4 py-2.5 text-[15px] font-semibold transition-all duration-300 ${
                    open || active
                      ? "bg-orange-50 text-[#FE7C02]"
                      : "text-[#01295A] hover:bg-slate-100"
                  }`}
                >
                  {item.name}

                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {open && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{ duration: 0.22 }}
                      className="absolute left-1/2 top-14 z-50 w-[680px] -translate-x-1/2 rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl"
                    >
                      <div className="grid grid-cols-2 gap-3">
                        {dropdownData[item.type].map((menu) => {
                          const Icon = menu.icon;

                          return (
                            <Link
                              key={menu.name}
                              to={menu.path}
                              className="group flex items-start gap-4 rounded-2xl p-4 transition-all duration-300 hover:bg-slate-50"
                            >
                              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#01295A] transition-all duration-300 group-hover:bg-[#01295A] group-hover:text-white">
                                <Icon size={20} />
                              </div>

                              <div className="flex-1">
                                <div className="flex items-center gap-2">
                                  <h4 className="font-semibold text-slate-900">
                                    {menu.name}
                                  </h4>

                                  {menu.badge && (
                                    <span className="rounded-full bg-orange-100 px-2 py-1 text-[10px] font-bold text-orange-600">
                                      {menu.badge}
                                    </span>
                                  )}
                                </div>

                                <p className="mt-1 text-sm leading-6 text-slate-500">
                                  {menu.description}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          }

          const active = location.pathname === item.path;

          return (
            <Link
              key={item.name}
              to={item.path}
              className={`rounded-full px-[32px] py-[12px] text-[15px] font-semibold leading-none transition-all duration-300 ${
                item.highlight
                  ? "bg-[#FE7C02] text-white shadow-lg shadow-orange-200 hover:scale-105"
                  : active
                  ? "bg-orange-50 text-[#FE7C02]"
                  : "text-[#01295A] hover:bg-slate-100"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
