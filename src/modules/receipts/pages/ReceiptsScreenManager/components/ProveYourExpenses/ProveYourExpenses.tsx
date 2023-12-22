import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box } from '@chakra-ui/react';
import { Fragment } from 'react';

import { ExpandIcon, Minus2Icon } from '@/components';

import { DescribeYourExpense } from '../DescribeYourExpense';
import { ImageCarousel } from '../ImageCarousel';

type ProveYourExpensesProps = ReceiptAction;

export const ProveYourExpenses = ({ detail, receipts }: ProveYourExpensesProps) => {
  const imagesReceipts = receipts?.documents?.map(({ id, url, createdAt }) => ({
    id,
    url,
    date: createdAt,
  }));

  const hasReceipts = imagesReceipts?.length > 0;

  return (
    <Accordion allowToggle defaultIndex={[0]}>
      <AccordionItem>
        {({ isExpanded }) => (
          <Fragment>
            <h2>
              <AccordionButton _hover={{}}>
                <Box as="span" flex="1" textAlign="left">
                  Comprove seus gastos
                </Box>

                {isExpanded ? <Minus2Icon /> : <ExpandIcon />}
              </AccordionButton>
            </h2>

            <AccordionPanel>
              {hasReceipts && <ImageCarousel images={imagesReceipts} />}
              {detail && <DescribeYourExpense description={detail} />}
            </AccordionPanel>
          </Fragment>
        )}
      </AccordionItem>
    </Accordion>
  );
};
