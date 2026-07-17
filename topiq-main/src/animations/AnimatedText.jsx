// src/animations/AnimatedText.jsx

import { motion, useReducedMotion } from "framer-motion";

export default function AnimatedText({
  children,
  className = "",
  type = "word",
  delay = 0,
  duration = 0.5,
  stagger = 0.08,
  once = true,
}) {
  const reduceMotion = useReducedMotion();

  const text = String(children);

  if (reduceMotion) {
    return (
      <span className={className}>
        {text}
      </span>
    );
  }

  const items =
    type === "character"
      ? text.split("")
      : text.trim().split(/\s+/);

  const containerVariants = {
    hidden: {},

    visible: {
      transition: {
        delayChildren: delay,
        staggerChildren: stagger,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      filter: "blur(6px)",
    },

    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",

      transition: {
        duration,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.span
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once,
        amount: 0.8,
      }}
      aria-label={text}
    >
      {items.map((item, index) => (
        <motion.span
          key={`${item}-${index}`}
          variants={itemVariants}
          className="inline-block"
        >
          {item}

          {type === "word" &&
            index < items.length - 1 &&
            "\u00A0"}
        </motion.span>
      ))}
    </motion.span>
  );
}