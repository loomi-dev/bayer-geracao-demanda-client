import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTrashIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} fill="none" {...props}>
    <g clipPath="url(#TrashIcon_svg__a)">
      <path
        fill="#212121"
        d="M13.432 3.887c0 .154-.06.302-.165.41a.56.56 0 0 1-.401.17H2.672a.56.56 0 0 1-.4-.17.588.588 0 0 1 0-.82.56.56 0 0 1 .4-.17h2.016a.557.557 0 0 0 .331-.11.58.58 0 0 0 .206-.288l.18-.55a1.16 1.16 0 0 1 .412-.576c.193-.143.425-.22.663-.22h2.582c.238 0 .47.077.663.22.193.142.338.343.413.575l.179.551a.58.58 0 0 0 .206.288c.097.071.213.11.332.11h2.011a.56.56 0 0 1 .4.17.588.588 0 0 1 .166.41Zm-1.529 1.76-.345 5.344c-.036.514-.26.996-.628 1.348a1.968 1.968 0 0 1-1.354.551H5.963a1.967 1.967 0 0 1-1.353-.549 2.066 2.066 0 0 1-.63-1.345l-.345-5.35a.304.304 0 0 1 .074-.214.296.296 0 0 1 .21-.093h7.701a.29.29 0 0 1 .21.093.3.3 0 0 1 .073.215Zm-4.7 1.725a.588.588 0 0 0-.166-.41.56.56 0 0 0-.8 0 .588.588 0 0 0-.167.41v2.904c0 .154.06.302.166.41a.56.56 0 0 0 .801 0 .589.589 0 0 0 .166-.41V7.372Zm2.265 0a.588.588 0 0 0-.166-.41.56.56 0 0 0-.8 0 .588.588 0 0 0-.167.41v2.904c0 .154.06.302.166.41a.56.56 0 0 0 .801 0 .589.589 0 0 0 .166-.41V7.372Z"
      />
    </g>
    <defs>
      <clipPath id="TrashIcon_svg__a">
        <path fill="#fff" d="M.786.243H14v13.214H.786z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTrashIcon;
