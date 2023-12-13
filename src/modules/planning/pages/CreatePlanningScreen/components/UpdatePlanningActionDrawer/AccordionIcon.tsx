import { ExpandIcon, Minus2Icon } from '@/components';

type AccordionIconProps = {
  isExpanded: boolean;
};

export const AccordionIcon = ({ isExpanded }: AccordionIconProps) => (
  <>{isExpanded ? <Minus2Icon /> : <ExpandIcon />}</>
);
