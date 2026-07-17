import { motion } from "framer-motion";

export default function FeatureCard({ feature, index }) {
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-8
        shadow-lg
        hover:shadow-2xl
        transition-all
        duration-500
      "
    >
      {/* Decorative Glow */}

      <div
        className="
          absolute
          -top-20
          -right-20
          h-44
          w-44
          rounded-full
          bg-gradient-to-br
          from-blue-100
          to-orange-100
          blur-3xl
          opacity-0
          group-hover:opacity-100
          transition-all
          duration-500
        "
      />

      <div className="relative z-10">
        {/* Icon */}

        <div
          className={`
            w-16
            h-16
            rounded-2xl
            flex
            items-center
            justify-center
            shadow-md
            ${feature.bg}
          `}
        >
          <Icon
            size={30}
            strokeWidth={2.2}
            className={feature.color}
          />
        </div>

        {/* Title */}

        <h3
          className="
            mt-6
            text-2xl
            font-bold
            text-slate-900
          "
        >
          {feature.title}
        </h3>

        {/* Description */}

        <p
          className="
            mt-4
            text-slate-600
            leading-7
          "
        >
          {feature.description}
        </p>
      </div>

      {/* Bottom Accent */}

      <div
        className="
          absolute
          bottom-0
          left-0
          h-1.5
          w-0
          bg-gradient-to-r
          from-blue-900
          via-blue-600
          to-orange-500
          group-hover:w-full
          transition-all
          duration-500
        "
      />
    </motion.div>
  );
}