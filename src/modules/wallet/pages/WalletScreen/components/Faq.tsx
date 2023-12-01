import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Flex,
  Text,
} from '@chakra-ui/react';

import { AddIcon, CircleIcon, MinusIcon } from '@/components';
import { useGetFaqs } from '@/modules/wallet/api';

export const Faq = () => {
  const { data, isLoading } = useGetFaqs();
  const faq = data?.data ?? [];

  return (
    <Flex flexDir="column" w="100%" gap="2.3rem">
      <Text textStyle={{ lg: 'h4', xl: 'h2' }} fontWeight={{ lg: 'bold' }}>
        FAQ
      </Text>
      <Accordion variant="secondary" allowMultiple>
        {faq.map((item, index) => (
          <AccordionItem key={index}>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton mb="1rem" _expanded={{ borderBottom: 'none' }}>
                    <Text flex="1" textAlign="left">
                      {item.question}
                    </Text>
                    <CircleIcon
                      bgColor="surface.invert"
                      w={{ lg: '5.4rem', xl: '6.4rem', '3xl': '7.4rem' }}
                      h={{ lg: '3.7rem', xl: '4.7rem', '3xl': '5.7rem' }}
                    >
                      {isExpanded ? <MinusIcon /> : <AddIcon />}
                    </CircleIcon>
                  </AccordionButton>
                </h2>
                <AccordionPanel>{item.answer}</AccordionPanel>
              </>
            )}
          </AccordionItem>
        ))}
      </Accordion>
    </Flex>
  );
};
