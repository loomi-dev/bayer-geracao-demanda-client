import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Flex,
  Text,
} from '@chakra-ui/react';

import { AddIcon, CircleIcon } from '@/components';

export const Faq = () => (
  <Flex flexDir="column" w="100%">
    <Text textStyle="h2">FAQ</Text>

    <Accordion variant="secondary" allowMultiple>
      <AccordionItem>
        <h2>
          <AccordionButton mb="1rem" _expanded={{ borderBottom: 'none' }}>
            <Text flex="1" textAlign="left">
              O que eu preciso fazer para ganhar pontos?
            </Text>
            <CircleIcon bgColor="surface.invert" w="7.4rem" h="5.7rem">
              <AddIcon />
            </CircleIcon>
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  </Flex>
);
