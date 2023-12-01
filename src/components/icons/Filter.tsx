import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFilter = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={17} height={17} fill="none" {...props}>
    <path
      fill="#212121"
      d="M13.015 1.924H3.992c-.415 0-.812.167-1.104.464-.293.297-.458.7-.458 1.119v1.468a1.236 1.236 0 0 0 .356.87L6.34 9.448a.875.875 0 0 1 .254.622v5.047a.533.533 0 0 0 .287.472.515.515 0 0 0 .546-.05l2.776-2.11a.528.528 0 0 0 .208-.423v-2.935a.885.885 0 0 1 .254-.622l3.555-3.603a1.225 1.225 0 0 0 .356-.87V3.506c0-.42-.165-.822-.457-1.12a1.553 1.553 0 0 0-1.104-.463ZM3.992 2.979h9.023c.139 0 .271.056.369.155a.531.531 0 0 1 .152.373v1.231H3.471V3.507c0-.14.055-.274.152-.373a.517.517 0 0 1 .369-.155ZM9.93 8.703a1.924 1.924 0 0 0-.56 1.368v2.674l-1.735 1.32v-3.991a1.945 1.945 0 0 0-.56-1.369l-2.87-2.908H12.8L9.93 8.703Z"
    />
  </svg>
);
export default SvgFilter;
