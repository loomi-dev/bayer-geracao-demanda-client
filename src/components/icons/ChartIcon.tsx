import * as React from 'react';
import type { SVGProps } from 'react';
const SvgChartIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={19} height={20} fill="currentColor" {...props}>
    <g clipPath="url(#ChartIcon_svg__a)">
      <path d="M17.486 7.77a8.594 8.594 0 0 0-6.74-6.74 1.98 1.98 0 0 0-2.368 1.94v4.756a2.414 2.414 0 0 0 2.412 2.412h4.757a1.98 1.98 0 0 0 1.94-2.368Zm-1.427.81a.659.659 0 0 1-.512.243H10.79a1.098 1.098 0 0 1-1.096-1.096V2.97a.665.665 0 0 1 .792-.65 7.28 7.28 0 0 1 5.71 5.71.66.66 0 0 1-.137.547v.003Zm.229 3.785A8.11 8.11 0 1 1 6.152 2.23a.658.658 0 0 1 .385 1.259 6.795 6.795 0 1 0 8.491 8.492.658.658 0 0 1 1.26.384Z" />
    </g>
    <defs>
      <clipPath id="ChartIcon_svg__a">
        <path d="M0 .567h18.553V19.12H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgChartIcon;
