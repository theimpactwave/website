import { Button, Link, Stack } from "@chakra-ui/react";
import type { ReactElement } from "react";

import type { ContainerProps } from "@/components/container";
import Container from "@/components/container";
import Heading from "@/components/heading";

export interface CtaProps {
  title: string;
  link?: string;
  caption?: string;
  button?: ReactElement;
  contain?: boolean;
  containerProps?: ContainerProps;
}

const Cta = (props: CtaProps) => {
  const {
    title,
    link = undefined,
    caption = undefined,
    contain = false,
    button = undefined,
    containerProps = undefined,
  } = props;
  return (
    <Container contain={false} {...containerProps}>
      <Stack
        direction={"column"}
        justifyContent={"space-between"}
        alignItems={"center"}
        maxW={contain ? 920 : undefined}
        mx={"auto"}
        py={8}
      >
        <Heading
          as={"h4"}
          mb={4}
          fontWeight={700}
          color={"tertiary"}
          textAlign={"center"}
        >
          {title}
        </Heading>
        {button ? (
          button
        ) : (
          <Link href={link}>
            <Button variant={"solid"} colorScheme={"brandScheme"}>
              {caption}
            </Button>
          </Link>
        )}
      </Stack>
    </Container>
  );
};

export default Cta;
