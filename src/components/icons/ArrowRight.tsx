import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={33} height={33} fill="none" {...props}>
    <path
      fill="#fff"
      d="M30.016 17.617 20.201 27.5a1.048 1.048 0 0 1-1.474-.014 1.063 1.063 0 0 1-.012-1.484l8.02-8.076h-22.7c-.28 0-.547-.112-.744-.31a1.063 1.063 0 0 1 0-1.498c.197-.199.465-.31.744-.31h22.699l-8.02-8.076a1.063 1.063 0 0 1 0-1.498 1.049 1.049 0 0 1 1.487 0l9.815 9.883a1.064 1.064 0 0 1 0 1.5Z"
    />
  </svg>
);
export default SvgArrowRight;
