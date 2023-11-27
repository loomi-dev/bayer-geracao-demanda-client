import { Flex, FlexProps } from '@chakra-ui/react';
import { SVGProps } from 'react';

type IconProps = {
  children: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
} & FlexProps;

const Icon = ({ children, ...props }: IconProps) => (
  <Flex
    justify="center"
    align="center"
    rounded="full"
    bgColor="green.600"
    boxSize="5.1rem"
    {...props}
  >
    {children}
  </Flex>
);

export default Icon;
