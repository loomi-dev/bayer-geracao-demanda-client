import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSmallDoneIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={29} height={29} fill="none" {...props}>
    <g clipPath="url(#SmallDoneIcon_svg__a)">
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.25}
        d="m6.638 14.372 4.994 4.994 10.006-9.988"
      />
    </g>
    <defs>
      <clipPath id="SmallDoneIcon_svg__a">
        <path fill="#fff" d="M0 14.377 14.142.233l14.142 14.143-14.142 14.142z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSmallDoneIcon;
