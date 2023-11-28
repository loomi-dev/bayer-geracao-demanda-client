import { Box, Button, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

import { AddInsideCircleIcon, CircleIcon } from '@/components';

type CardProps = {
  label: string;
  imageUrl: string;
};
export const Card = ({ label, imageUrl }: CardProps) => (
  <Link href="/planejamento">
    <Flex
      position="relative"
      w="22.5rem"
      h="25.4rem"
      borderRadius="3.2rem"
      border="1px solid"
      borderColor="opacity.black.0.10"
      overflow="hidden"
      boxShadow="third"
      cursor="pointer"
      _hover={{
        Button: {
          width: '17rem',
          height: '6rem',
          transition: '0.2s linear',
        },
      }}
    >
      <Image src={imageUrl} quality={100} fill alt={label} style={{ objectFit: 'cover' }} />
      <Box
        position="absolute"
        opacity="0"
        w="100%"
        h="100%"
        transition="0.4s"
        _hover={{
          opacity: '0.5',
          background:
            'linear-gradient(158deg, rgba(0, 0, 0, 0.60) 20.61%, rgba(0, 0, 0, 0.00) 73.93%)',
        }}
      />
      <Box position="absolute" top="1.4rem" left="2rem" w="13rem">
        <Text textStyle="caption2" color="surface.primary">
          {label}
        </Text>
      </Box>

      <Button
        pos="absolute"
        bottom="1.4rem"
        right="1rem"
        w="15.2rem"
        h="5.1rem"
        pr="0rem"
        variant="third"
        rightIcon={
          <CircleIcon>
            <AddInsideCircleIcon />
          </CircleIcon>
        }
      >
        <Text as="span" w="full">
          Adicionar
        </Text>
      </Button>
    </Flex>
  </Link>
);
