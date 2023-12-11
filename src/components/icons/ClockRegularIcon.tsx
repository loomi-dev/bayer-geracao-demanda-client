import * as React from 'react';
import type { SVGProps } from 'react';
const SvgClockRegularIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={21}
    fill={props.color ?? '#212121'}
    {...props}
  >
    <path d="M9.975 2.184a8.55 8.55 0 1 0 8.55 8.55 8.56 8.56 0 0 0-8.55-8.55Zm0 15.785a7.234 7.234 0 1 1 7.235-7.235 7.243 7.243 0 0 1-7.235 7.235Zm4.165-7.235a.657.657 0 0 1-.657.658H9.975a.658.658 0 0 1-.658-.658V6.35a.658.658 0 1 1 1.316 0v3.727h2.85a.658.658 0 0 1 .657.657Z" />
  </svg>
);
export default SvgClockRegularIcon;
