import React, { useEffect, useState } from "react";

export const ProgressBar = ({ value = 0, onComplete }) => {
  const [percent, setPercent] = useState(value);
  useEffect(() => {
    setPercent(Math.min(100, Math.max(value, 0)));
    if (value >= 100) {
      onComplete();
    }
  }, [value, onComplete]);
  return (
    <div className="progress-bar">
      <span
        className="progress"
        style={{
          color: percent > 50 ? "white" : "black",
          zIndex: 1,
        }}
      >
        {percent.toFixed()} %
      </span>
      <div
        style={{
          transform: `scaleX(${percent / 100})`,
          transformOrigin: "left",
        }}
      ></div>
    </div>
  );
};
