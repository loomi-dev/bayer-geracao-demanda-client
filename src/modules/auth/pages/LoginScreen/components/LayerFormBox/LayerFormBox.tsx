import React from 'react';

export const LayerFormBox = () => (
  <svg style={{ position: 'absolute', width: 0, height: 0 }}>
    <clipPath id="layer-form-box">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M704 0C719.464 0 732 12.536 732 28V906C732 921.464 719.464 934 704 934H28C12.536 934 0 921.464 0 906V622.633C0 605.47 13.9218 591.89 29.974 585.815C66.2255 572.095 92 537.058 92 496V481C92 439.942 66.2255 404.905 29.974 391.185C13.9219 385.11 0 371.53 0 354.367V28C0 12.536 12.536 0 28 0H704Z"
        fill="url(#paint0_linear_2202_3884)"
      />
    </clipPath>

    <defs>
      <filter
        id="filter0_b_2202_3884"
        x="-54"
        y="-54"
        width="840"
        height="1042"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="27" />
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2202_3884" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_2202_3884"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_2202_3884"
        x1="490.934"
        y1="352.39"
        x2="880.914"
        y2="1962.46"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);
