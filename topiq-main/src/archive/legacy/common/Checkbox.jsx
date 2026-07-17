import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaCheck, FaMinus } from "react-icons/fa";

export default function Checkbox({
  checked = false,
  onChange,
  label,
  description,
  disabled = false,
  indeterminate = false,
  size = "md",
  name,
  value,
}) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  const sizes = {
    sm: {
      box: "w-4 h-4",
      icon: "text-[8px]",
    },
    md: {
      box: "w-5 h-5",
      icon: "text-[10px]",
    },
    lg: {
      box: "w-6 h-6",
      icon: "text-xs",
    },
  };

  const current = sizes[size];

  return (
    <label
      className={`
        flex
        items-start
        gap-3
        cursor-pointer
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
      `}
    >
      <input
        ref={inputRef}
        type="checkbox"
        className="hidden"
        checked={checked}
        disabled={disabled}
        name={name}
        value={value}
        onChange={(e) => {
          if (!disabled) {
            onChange?.(e.target.checked);
          }
        }}
      />

      <motion.div
        whileTap={{ scale: 0.9 }}
        className={`
          ${current.box}
          mt-0.5
          rounded-md
          border-2
          flex
          items-center
          justify-center
          transition-colors
          ${
            checked || indeterminate
              ? "bg-orange-500 border-orange-500 text-white"
              : "bg-white border-gray-300"
          }
        `}
      >
        {indeterminate ? (
          <FaMinus className={current.icon} />
        ) : (
          checked && <FaCheck className={current.icon} />
        )}
      </motion.div>

      {(label || description) && (
        <div className="flex-1">
          {label && (
            <h4 className="font-semibold text-slate-900">
              {label}
            </h4>
          )}

          {description && (
            <p className="mt-1 text-sm text-gray-500">
              {description}
            </p>
          )}
        </div>
      )}
    </label>
  );
}