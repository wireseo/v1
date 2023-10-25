import React from "react";

const WaveName: React.FC = () => {
  return (
    <svg
      width="325"
      viewBox="0 0 500 100"
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="geometricPrecision"
      textRendering="optimizeLegibility"
    >
      <defs>
        <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
          <stop offset="5%" stopColor="#38bdf8" />
          <stop offset="95%" stopColor="#123752" />
        </linearGradient>
        <pattern
          id="wave"
          x="0"
          y="50"
          width="120"
          height="120"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M-40 15 Q-30 5 -20 15 T0 15 T20 15 T40 15 T60 15 T80 15 T100 15 T120 15 V60 H-40z"
            fill="url(#gradient)"
          >
            <animateTransform
              attributeName="transform"
              begin="0s"
              dur="2.5s"
              type="translate"
              from="0,0"
              to="40,0"
              repeatCount="indefinite"
            />
          </path>
        </pattern>
      </defs>

      {/* Solid white text at the back */}
      <text
        textAnchor="left"
        x="0"
        y="80"
        fontSize="90"
        fill="white"
        fontWeight="bold"
      >
        Eryn Seo
      </text>

      {/* Wave effect text on top */}
      <text
        textAnchor="left"
        x="0"
        y="80"
        fontSize="90"
        fill="url(#wave)"
        fillOpacity="0.8"
        fontWeight="bold"
      >
        Eryn Seo
      </text>
    </svg>
  );
};

export default WaveName;
