import * as React from 'react';
import type { SVGProps } from 'react';
const SvgEditIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} fill="none" {...props}>
    <g clipPath="url(#EditIcon_svg__a)">
      <path
        fill="currentColor"
        d="m7.502 3.847 3.433 3.433-4.709 4.716c-.219.218-.5.364-.805.417l-2.825.47a.606.606 0 0 1-.673-.415.612.612 0 0 1-.025-.282l.471-2.825c.053-.305.199-.586.418-.805l4.715-4.71Zm5.001-1.568a2.417 2.417 0 0 0-3.433 0L8.348 3l3.434 3.434.721-.721a2.418 2.418 0 0 0 0-3.434Z"
      />
    </g>
    <defs>
      <clipPath id="EditIcon_svg__a">
        <path fill="#fff" d="M.572.243h13.214v13.214H.572z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgEditIcon;
