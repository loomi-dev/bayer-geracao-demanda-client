import {
  Accordion,
  AccordionButton,
  AccordionButtonProps,
  AccordionItem,
  AccordionItemProps,
  AccordionPanel,
  AccordionProps,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

type CustomAcordionProps = {
  accordionProps?: AccordionProps;
  accordionItemProps?: AccordionItemProps;
  accordionButtonProps?: AccordionButtonProps;
  accordionIcon?: ReactNode;
  children: ReactNode;
};
export const CustomAcordion = ({
  accordionProps,
  accordionItemProps,
  accordionButtonProps,
  accordionIcon,
  children,
}: CustomAcordionProps) => (
  <Accordion allowToggle {...accordionProps}>
    <AccordionItem {...accordionItemProps}>
      <AccordionButton {...accordionButtonProps}>
        {accordionButtonProps?.children}
        {accordionIcon}
      </AccordionButton>

      <AccordionPanel pb={4}>{children}</AccordionPanel>
    </AccordionItem>
  </Accordion>
);
