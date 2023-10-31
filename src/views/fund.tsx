import { Heading } from "@chakra-ui/react";

import Container from "@/components/container";
import FundForm from "@/components/fund/form";

const FundView = () => {
  return (
    <>
      <Container>
        <Heading as={"h2"} fontSize={[22, 24, 28]} textAlign={"center"} mb={12}>
          Fund with use now
        </Heading>
        <FundForm />
      </Container>
    </>
  );
};

export default FundView;
