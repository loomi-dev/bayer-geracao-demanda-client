import * as React from 'react';
import type { SVGProps } from 'react';
const SvgWarningIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="none" {...props}>
    <rect width={29.196} height={29.196} fill="#DE3B3B" rx={14.598} />
    <path
      fill="#fff"
      d="M15 5.916A9.084 9.084 0 1 0 24.084 15 9.094 9.094 0 0 0 15 5.916Zm0 16.77A7.686 7.686 0 1 1 22.686 15 7.695 7.695 0 0 1 15 22.686Zm.931-3.96a.932.932 0 1 1-1.863 0 .932.932 0 0 1 1.864 0ZM14.302 15v-3.727a.699.699 0 0 1 1.398 0V15a.698.698 0 1 1-1.398 0Z"
    />
  </svg>
);
export default SvgWarningIcon;
