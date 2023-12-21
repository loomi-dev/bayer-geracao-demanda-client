import { Box, Text } from '@chakra-ui/react';

type DescribeYourExpenseProps = {
  description: string;
};
export const DescribeYourExpense = ({ description }: DescribeYourExpenseProps) => (
  <Box bg="greyscale.330" p="2.4rem" mt="1.6rem" borderRadius="1.6rem">
    <Text mb="0.8rem" textStyle="footnote-bold-3" color="greyscale.700">
      Descreva seu gasto
    </Text>
    <Text textStyle="footnote-400-2" color="greyscale.900">
      {description}
    </Text>
  </Box>
);
