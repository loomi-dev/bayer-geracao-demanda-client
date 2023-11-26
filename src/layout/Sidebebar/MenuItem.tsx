import { Button, ButtonProps } from '@chakra-ui/react';
import Link from 'next/link';

type MenuItemProps = {
  label: string;
  src: string;
} & ButtonProps;

export const MenuItem = ({ label, src, ...props }: MenuItemProps) => (
  <Link href={src}>
    <Button
      fontSize="1.6rem"
      color="greyscale.600"
      w="22rem"
      h="5rem"
      fontWeight="normal"
      {...props}
    >
      {label}
    </Button>
  </Link>
);
