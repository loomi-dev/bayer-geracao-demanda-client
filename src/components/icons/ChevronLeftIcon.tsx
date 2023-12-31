import * as React from 'react';
import type { SVGProps } from 'react';
const SvgChevronLeftIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth={0}
    aria-hidden="true"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fillRule="evenodd"
      stroke="none"
      d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgChevronLeftIcon;
