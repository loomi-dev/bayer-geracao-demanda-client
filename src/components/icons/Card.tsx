import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCard = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={19} height={19} fill="none" {...props}>
    <path
      fill="currentColor"
      d="M13.224 3.088H5.305c-.997.002-1.953.4-2.658 1.11a3.803 3.803 0 0 0-1.103 2.676v4.782a3.803 3.803 0 0 0 1.103 2.675 3.754 3.754 0 0 0 2.658 1.11h7.919a3.754 3.754 0 0 0 2.658-1.11 3.803 3.803 0 0 0 1.103-2.675V6.874a3.803 3.803 0 0 0-1.103-2.675 3.754 3.754 0 0 0-2.658-1.11ZM5.305 4.284h7.919c.682 0 1.336.274 1.819.76.482.485.754 1.143.754 1.83v.2H2.732v-.2c0-.687.272-1.345.754-1.83a2.568 2.568 0 0 1 1.82-.76Zm7.919 9.962H5.305a2.569 2.569 0 0 1-1.819-.76 2.601 2.601 0 0 1-.754-1.83V8.269h13.065v3.387c0 .686-.272 1.345-.754 1.83a2.568 2.568 0 0 1-1.82.76Zm-4.95-2.59a.6.6 0 0 1-.593.598H5.305a.592.592 0 0 1-.594-.598.6.6 0 0 1 .594-.598h2.376a.592.592 0 0 1 .594.598Z"
    />
  </svg>
);
export default SvgCard;
