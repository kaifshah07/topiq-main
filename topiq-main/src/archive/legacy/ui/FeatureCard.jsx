import { motion } from "framer-motion";

export default function FeatureCard({
  icon,
  title,
  description,
}) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300"
    >
      <div className="text-5xl mb-6 text-blue-700">
        {icon}
      </div>

      <h3 className="text-2xl font-bold mb-3">
        {title}
      </h3>

      <p className="text-gray-600 leading-8">
        {description}
      </p>
    </motion.div>
  );
}