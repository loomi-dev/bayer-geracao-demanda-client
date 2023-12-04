import { Text } from '@chakra-ui/react';

type HeaderProps = {
  title: string;
};
export const Header = ({ title }: HeaderProps) => <Text textStyle="caption8">{title}</Text>;
