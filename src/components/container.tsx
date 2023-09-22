import { FC, PropsWithChildren } from "react";
import { Container as ChakraContainer } from "@chakra-ui/react";

const Container: FC<PropsWithChildren> = ({
  children,
}: PropsWithChildren): JSX.Element => {
  return <ChakraContainer maxW={"md"}>{children}</ChakraContainer>;
};

export default Container;
