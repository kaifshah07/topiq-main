// src/components/sections/faq/FAQItem.jsx

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

import ScaleIn from "../../../animations/ScaleIn";
import {
  cardHover,
  iconHover,
} from "../../../utils/animationVariants";

/**
 * ==========================================================
 * FAQItem
 * ==========================================================
 *
 * Premium FAQ Accordion Item
 *
 * Features
 * ----------
 * ✅ Smooth accordion animation
 * ✅ Expand / Collapse
 * ✅ Accessible button
 * ✅ Premium hover effects
 * ✅ Responsive design
 *
 */

export default function FAQItem({
  question,
  answer,
  defaultOpen = false,
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <ScaleIn>
      <motion.article
        {...cardHover}
        className="
          overflow-hidden
          h-full
          rounded-2xl
          border
          border-slate-200
          bg-white
          shadow-sm
          transition-all
          duration-300
          hover:border-blue-200
          hover:shadow-lg
        "
      >
        {/* Question */}

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          className="
            flex
            w-full
            items-center
            justify-between
            gap-2
            px-3
            py-3
            text-left
            transition-colors
            duration-300
            hover:bg-slate-50
          "
        >
          <h3
            className="
              text-sm
              font-semibold
              leading-5
              text-slate-900
            "
          >
            {question}
          </h3>

          <motion.div
            {...iconHover}
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.25 }}
            className="
              flex
              h-8
              w-8
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-blue-50
              text-blue-600
            "
          >
            {isOpen ? (
              <Minus size={20} />
            ) : (
              <Plus size={20} />
            )}
          </motion.div>
        </button>

        {/* Answer */}

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="content"
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
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="overflow-hidden"
            >
              <div
                className="
                  border-t
                  border-slate-100
                  px-3
                  pb-3
                  pt-3
                "
              >
                <p
                  className="
                    text-xs
                    leading-5
                    text-slate-600
                  "
                >
                  {answer}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.article>
    </ScaleIn>
  );
}
