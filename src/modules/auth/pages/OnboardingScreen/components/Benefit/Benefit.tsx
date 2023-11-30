import { Box, Text, TextProps } from '@chakra-ui/react';
import React from 'react';

type BenefitProps = {
  title: string;
  description: string;
  descriptionStyles?: TextProps;
};

export const Benefit = ({ title, description, descriptionStyles }: BenefitProps) => (
  <Box p="2.4rem">
    <Text textStyle="action1" color="surface.brand">
      {title}
    </Text>

    <Text
      textStyle="body1"
      color="text.primary"
      lineHeight="2.4rem"
      mt="0.7rem"
      {...descriptionStyles}
    >
      {description}
    </Text>
  </Box>
);
