import { Box, Button, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';

import { AddInsideCircleIcon, CircleIcon } from '@/components';

export const Resources = () => (
  <Flex flexDir="column" gap="1.7rem">
    <Text textStyle="h2">Transforme seus recursos em ações</Text>
    <Flex gap="1.6rem">
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
        <Image
          src="/assets/images/action1.webp"
          quality={100}
          fill
          alt="ação 1"
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
            Ação de relacionamento
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
    </Flex>
  </Flex>
);
