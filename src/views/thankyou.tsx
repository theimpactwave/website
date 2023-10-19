import { Heading } from "@chakra-ui/react";

import Container from "@/components/container";

const ThankyouView = () => {
  return (
    <>
      <Container>
        <Heading mb={4}>Thank you for your donation!</Heading>
        <Heading as={"h2"} fontSize={24}>
          We will forward your funding in equal parts to all our connected
          impact makers.
        </Heading>
      </Container>
    </>
  );
};
export default ThankyouView;
