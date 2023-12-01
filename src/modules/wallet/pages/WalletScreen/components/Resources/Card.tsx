import { Box, Button, Flex, Text } from '@chakra-ui/react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import { ArrowRightIcon, CircleIcon } from '@/components';

type CardProps = {
  label: string;
  imageUrl: StaticImageData;
};
export const Card = ({ label, imageUrl }: CardProps) => (
  <Link href="/planejamento">
    <Flex
      position="relative"
      w={{ lg: '17rem', xl: '18.5rem', '3xl': '22.5rem' }}
      h={{ lg: '19rem', xl: '20.5rem', '3xl': '25.4rem' }}
      borderRadius="3.2rem"
      border="1px solid"
      borderColor="opacity.black.0.10"
      overflow="hidden"
      boxShadow="third"
      cursor="pointer"
      _hover={{
        Button: {
          width: { lg: '14rem', xl: '17rem' },
          height: { lg: '4.8rem', xl: '6rem' },
          transition: '0.2s linear',
        },
      }}
    >
      <Image
        src={imageUrl}
        placeholder="blur"
        quality={100}
        fill
        alt={label}
        style={{ objectFit: 'cover' }}
      />
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
        w={{ lg: '12.2rem', xl: '15.2rem' }}
        h={{ lg: '4.1rem', xl: '5.1rem' }}
        pr="0rem"
        variant="third"
        rightIcon={
          <CircleIcon boxSize={{ lg: '4.2rem', xl: '5.1rem' }}>
            <ArrowRightIcon />
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
