import { HStack, StackProps, Text } from '@chakra-ui/react';
import Image from 'next/image';

type PlatformLogoProps = StackProps;

export const PlatformLogo = ({ ...restProps }: PlatformLogoProps) => (
  <HStack align="center" justify="center" gap="1.2rem" {...restProps}>
    <Text w="6.9rem" textStyle="caption4" color="text.primary" align="right">
      Uma plataforma
    </Text>
    <Image
      src="/assets/images/bayer-logo.webp"
      width={91}
      height={64}
      quality={100}
      alt="Intacta Logo"
    />
  </HStack>
);
