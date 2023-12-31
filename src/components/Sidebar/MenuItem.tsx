import { Button, ButtonProps } from '@chakra-ui/react';
import Link from 'next/link';

type MenuItemProps = {
  label: string;
  src: string;
  isSelected?: boolean;
} & ButtonProps;

export const MenuItem = ({ label, src, isSelected = false, ...props }: MenuItemProps) => (
  <Link href={src}>
    <Button
      w="100%"
      h="5rem"
      gap="2rem"
      px="1.6rem"
      leftIcon={props.leftIcon}
      fontSize="1.6rem"
      justifyContent="flex-start"
      color={isSelected ? 'text.invert' : 'text.secondary'}
      fontWeight="normal"
      bgColor={isSelected ? 'surface.brand' : 'surface.primary'}
      borderRadius="full"
      _hover={{ color: isSelected ? 'text.invert' : 'text.primary' }}
      {...props}
    >
      {label}
    </Button>
  </Link>
);
