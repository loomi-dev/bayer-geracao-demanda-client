import { Button, Flex, Text } from '@chakra-ui/react';
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
        boxShadow="third"
        border="1px solid"
        borderColor="opacity.black.0.10"
        overflow="hidden"
      >
        <Image
          src="/assets/images/action1.webp"
          quality={100}
          fill
          alt="ação 1"
          style={{ objectFit: 'cover' }}
        />
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
