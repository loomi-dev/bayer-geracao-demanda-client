import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Flex,
  Text,
} from '@chakra-ui/react';

import { AddIcon, CircleIcon, MinusIcon } from '@/components';

const accordionItems = [
  {
    label: 'O que eu preciso fazer para ganhar pontos?',
    value:
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    label: 'Como faço para resgatar meus pontos?',
    value:
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    label: 'Preciso comprovar o uso dos recursos?',
    value:
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    label: 'Meus pontos expiram?',
    value:
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];
export const Faq = () => (
  <Flex flexDir="column" w="100%" gap="2.3rem">
    <Text textStyle="h2">FAQ</Text>

    <Accordion variant="secondary" allowMultiple>
      {accordionItems.map((item, index) => (
        <AccordionItem key={index}>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton mb="1rem" _expanded={{ borderBottom: 'none' }}>
                  <Text flex="1" textAlign="left">
                    {item.label}
                  </Text>
                  <CircleIcon bgColor="surface.invert" w="7.4rem" h="5.7rem">
                    {isExpanded ? <MinusIcon /> : <AddIcon />}
                  </CircleIcon>
                </AccordionButton>
              </h2>
              <AccordionPanel>{item.value}</AccordionPanel>
            </>
          )}
        </AccordionItem>
      ))}
    </Accordion>
  </Flex>
);
