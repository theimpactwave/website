import type { ContainerProps as ChakraContainerProps } from "@chakra-ui/react";
import { Container as ChakraContainer } from "@chakra-ui/react";

export interface ContainerProps extends ChakraContainerProps {}
const Container = (props: ContainerProps) => {
  const { children, ...rest } = props;
  return (
    <ChakraContainer maxW={920} {...rest}>
      {children}
    </ChakraContainer>
  );
};

export default Container;
