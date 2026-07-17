import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ChevronDown, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import {
  navigation,
  resourcesMenu,
  companyMenu,
} from "../../data/navigation";

export default function MobileMenu({
  isOpen,
  onClose,
}) {
  const [openDropdown, setOpenDropdown] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  const dropdownData = {
    resources: resourcesMenu,
    company: companyMenu,
  };

  const toggleDropdown = (type) => {
    setOpenDropdown(openDropdown === type ? null : type);
  };

  const closeAll = () => {
    setOpenDropdown(null);
    onClose();
  };

  const handleNavigation = (event, path) => {
    event.preventDefault();
    navigate(path);
    closeAll();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[110] bg-slate-950/45 backdrop-blur-sm lg:hidden"
          />

          {/* Drawer */}

          <motion.aside
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 28,
            }}
            className="
              fixed
              right-0
              top-0
              z-[120]
              h-[100dvh]
              w-[min(90vw,380px)]
              overflow-y-auto
              border-l
              border-slate-200
              bg-white
              px-5
              pb-[max(1.25rem,env(safe-area-inset-bottom))]
              pt-[max(1.25rem,env(safe-area-inset-top))]
              shadow-2xl
              lg:hidden
            "
          >
            {/* Header */}

            <div className="mb-8 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-[#01295A]">
                  TOP
                  <span className="text-[#FE7C02]">IQ</span>
                </h2>

                <p className="text-xs text-slate-500">
                  Smart Learning Platform
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close navigation menu"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-slate-100
                  transition-all
                  hover:bg-slate-200
                "
              >
                <X size={20} />
              </button>
            </div>

            {/* Navigation */}

            <nav aria-label="Mobile navigation links" className="mt-2 flex flex-col gap-1.5">
              {navigation.map((item) => {
                if (item.dropdown) {
                  const opened = openDropdown === item.type;

                  return (
                    <div
                      key={item.name}
                      className="overflow-hidden rounded-2xl"
                    >
                      <button
                        type="button"
                        aria-expanded={opened}
                        onClick={() => toggleDropdown(item.type)}
                        className="
                          flex
                          w-full
                          items-center
                          justify-between
                          rounded-2xl
                          px-5
                          py-3.5
                          text-sm
                          font-semibold
                          text-[#01295A]
                          transition-all
                          hover:bg-orange-50
                        "
                      >
                        {item.name}

                        <ChevronDown
                          size={17}
                          className={`transition-transform duration-300 ${
                            opened ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {opened && (
                          <motion.div
                            initial={{
                              height: 0,
                              opacity: 0,
                            }}
                            animate={{
                              height: "auto",
                              opacity: 1,
                            }}
                            exit={{
                              height: 0,
                              opacity: 0,
                            }}
                            className="space-y-1 pl-3"
                          >
                            {dropdownData[item.type].map((menu) => {
                              const Icon = menu.icon;

                              return (
                                <Link
                                  key={menu.name}
                                  to={menu.path}
                                  onClick={(event) => handleNavigation(event, menu.path)}
                                  className="
                                    flex
                                    items-center
                                    gap-3
                                    rounded-xl
                                    p-3
                                    text-slate-600
                                    transition-all
                                    hover:bg-orange-50
                                    hover:text-[#FE7C02]
                                  "
                                >
                                  <Icon size={18} />

                                  <div>
                                    <p className="font-semibold">
                                      {menu.name}
                                    </p>

                                    <p className="text-xs text-slate-400">
                                      {menu.description}
                                    </p>
                                  </div>
                                </Link>
                              );
                            })}
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
                    onClick={(event) => handleNavigation(event, item.path)}
                    className={`rounded-2xl px-5 py-3.5 text-sm font-semibold transition-all ${
                      item.highlight
                        ? "bg-[#FE7C02] text-white shadow-lg shadow-orange-200"
                        : active
                        ? "bg-orange-50 text-[#FE7C02]"
                        : "text-[#01295A] hover:bg-orange-50"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            {/* Bottom CTA */}

            <div className="mt-8 flex flex-col gap-3 border-t border-slate-200 pt-6">
              <Link
                to="/login"
                onClick={(event) => handleNavigation(event, "/login")}
                className="
                  flex
                  h-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#01295A]
                  font-semibold
                  text-[#01295A]
                  transition-all
                  hover:bg-slate-50
                "
              >
                Login
              </Link>

              <Link
                to="/register"
                onClick={(event) => handleNavigation(event, "/register")}
                className="
                  flex
                  h-12
                  items-center
                  justify-center
                  rounded-full
                  bg-[#FE7C02]
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-orange-200
                  transition-all
                  hover:scale-[1.02]
                "
              >
                Start Learning
              </Link>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
