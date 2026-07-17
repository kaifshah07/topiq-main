// src/components/sections/statistics/CountUpNumber.jsx

import useCountAnimation from "../../../hooks/useCountAnimation";


export default function CountUpNumber({
  value,
  suffix = "",
  duration = 2000,
  decimals = 0,
}) {

  const {
    ref,
    count,
  } = useCountAnimation(
    value,
    {
      duration,
      decimals,
    }
  );


  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}