import type { ContainerProps as ChakraContainerProps } from "@chakra-ui/react";
import { Container as ChakraContainer } from "@chakra-ui/react";

export interface ContainerProps extends ChakraContainerProps {
  contain?: boolean;
  center?: boolean;
}

const Container = (props: ContainerProps) => {
  const { children, contain = true, center = false, ...rest } = props;
  return (
    <ChakraContainer
      position={"relative"}
      maxW={contain ? 920 : "initial"}
      textAlign={center ? "center" : undefined}
      {...rest}
    >
      {children}
    </ChakraContainer>
  );
};

export default Container;
