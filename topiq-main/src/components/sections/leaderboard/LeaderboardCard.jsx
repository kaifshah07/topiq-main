import { motion } from "framer-motion";

export default function LeaderboardCard({
  rank,
  name,
  className,
  city,
  score,
  achievement,
  title,
  description,
  icon: Icon,
  accent = "from-blue-500 to-indigo-600",
}) {
  const isFeature = Boolean(title);

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="relative rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:shadow-xl"
    >
      <div
        className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${accent} text-white`}
      >
        <Icon size={30} />
      </div>

      {isFeature ? (
        <>
          <h3 className="mt-5 text-xl font-bold text-slate-900">{title}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-500">{description}</p>
        </>
      ) : (
        <>
          <h3 className="mt-5 text-xl font-bold">{name}</h3>
          <p className="text-slate-500">{className}</p>
          <p className="text-sm text-slate-400">{city}</p>

          <div className="mt-5 flex justify-between">
            <div>
              <p className="text-sm text-slate-500">Score</p>
              <h4 className="text-2xl font-bold text-blue-600">{score}</h4>
            </div>

            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
              Rank #{rank}
            </span>
          </div>

          <div className="mt-5 rounded-xl bg-slate-50 px-4 py-3 text-sm font-semibold">
            🏆 {achievement}
          </div>
        </>
      )}
    </motion.div>
  );
}
