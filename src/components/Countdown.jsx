import { useEffect, useState } from "react";

export default function Countdown({ targetDate }) {
  const calculateTime = () => {
    const difference = targetDate.getTime() - new Date().getTime();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        arrived: true,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      arrived: false,
    };
  };

  const [time, setTime] = useState(calculateTime());

  useEffect(() => {
    const timer = setInterval(() => setTime(calculateTime()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (time.arrived) {
    return (
      <div className="mt-10 font-serif text-3xl font-bold text-[#f6cf7a] md:text-5xl">
        बाप्पा आले! 🥳
      </div>
    );
  }

  const items = [
    ["दिवस", time.days],
    ["तास", time.hours],
    ["मिनिटे", time.minutes],
    ["सेकंद", time.seconds],
  ];

  return (
    <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
      {items.map(([label, value]) => (
        <div
          key={label}
          className="rounded-2xl border border-[#f6cf7a]/20 bg-white/10 p-5 backdrop-blur-xl"
        >
          <div className="font-serif text-4xl font-bold text-[#f6cf7a] md:text-5xl">
            {String(value).padStart(2, "0")}
          </div>
          <div className="mt-2 text-sm text-[#fce9c1]">{label}</div>
        </div>
      ))}
    </div>
  );
}
