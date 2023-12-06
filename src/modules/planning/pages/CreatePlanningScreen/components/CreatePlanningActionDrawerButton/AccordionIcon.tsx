import React from 'react';

import { ExpandIcon, MinusIcon } from '@/components';

type AccordionIconProps = {
  isExpanded: boolean;
};

export const AccordionIcon = ({ isExpanded }: AccordionIconProps) => (
  <>{isExpanded ? <MinusIcon /> : <ExpandIcon />}</>
);
