import { Box } from '@chakra-ui/react';

import { CustomAcordion, Minus2Icon } from '@/components';

import { DescribeYourExpense } from '../DescribeYourExpense';
import { ImageCarousel } from '../ImageCarousel';

type ProveYourExpensesProps = {
  a?: any;
};

const imagesMock = [
  {
    id: 1,
    path: 'https://www.petz.com.br/blog//wp-content/uploads/2020/08/cat-cafe-pet.jpg',
    date: '19 de Jan 2023',
  },
  {
    id: 2,
    path: 'https://www.petz.com.br/blog//wp-content/uploads/2020/08/cat-cafe-pet.jpg',
    date: '19 de Jan 2023',
  },
  {
    id: 3,
    path: 'https://www.petz.com.br/blog//wp-content/uploads/2020/08/cat-cafe-pet.jpg',
    date: '19 de Jan 2023',
  },
  {
    id: 4,
    path: 'https://www.petz.com.br/blog//wp-content/uploads/2020/08/cat-cafe-pet.jpg',
    date: '19 de Jan 2023',
  },
];

export const ProveYourExpenses = ({ a }: ProveYourExpensesProps) => (
  <CustomAcordion
    accordionProps={{ mt: '1rem' }}
    accordionIcon={<Minus2Icon />}
    accordionButtonProps={{
      children: (
        <Box as="span" flex="1" textAlign="left">
          Comprove seus gastos
        </Box>
      ),
    }}
  >
    <ImageCarousel images={imagesMock} />
    <DescribeYourExpense description="Mensagem enviada por Ricardo mensagem enviada por Ricardo  mensagem enviada por Ricardo  mensagem enviada por Ricardo  mensagem enviada por Ricardo  mensagem enviada por Ricardo " />
  </CustomAcordion>
);
