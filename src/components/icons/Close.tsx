import * as React from 'react';
import type { SVGProps } from 'react';
const SvgClose = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={29} height={29} fill="none" {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.25}
      d="M8.839 19.445 19.445 8.84m0 10.606L8.84 8.84"
    />
  </svg>
);
export default SvgClose;
