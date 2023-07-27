import { useEffect, useRef } from "react";

export default function ResultItem({
  count,
  name,
  animationSpeed,
}: {
  name: string;
  count: number;
  animationSpeed: "slow" | "medium" | "fast";
}) {
  const ref = useRef<HTMLSpanElement>(null);

  function updateCounter(starting: number, cleanupFunction: () => void) {
    if (ref.current) {
      ref.current.innerText = Math.trunc(starting).toString();
      if (starting >= count) {
        ref.current.innerText = count.toString();
        cleanupFunction();
      }
    }
  }

  useEffect(() => {
    let starting = 0;
    function cleanupFunction() {
      clearInterval(interval);
    }
    const interval = setInterval(() => {
      if (count > 0) {
        updateCounter(starting, cleanupFunction);
        switch (animationSpeed) {
          case "slow":
            starting += 0.3;
            break;
          case "medium":
            starting += 4;
            break;
          case "fast":
            starting += 110;
            break;
        }
      }
    }, 50);

    //cleanup interval
    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return (
    <div className="font-poppins font-bold text-off-black dark:text-slate-400">
      <span ref={ref} className="text-purple">
        - -
      </span>{" "}
      {name}
    </div>
  );
}
