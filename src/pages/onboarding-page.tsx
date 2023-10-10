import { Box, Heading } from "@chakra-ui/react";

import Container from "@/components/container";
import OnboardingForm from "@/components/onboarding/form";
import DefaultLayout from "@/layouts/default";

const OnboardingPage = () => {
  return (
    <DefaultLayout>
      <Container>
        <Heading as={"h1"} mb={8} textAlign={"center"}>
          Initiative Onboarding
        </Heading>
        <Box>
          <Heading as={"h2"} fontSize={"h3"} mb={8} textAlign={"center"}>
            You can apply here - Please fill out this form
          </Heading>
        </Box>
        <Box>
          <OnboardingForm />
        </Box>
      </Container>
    </DefaultLayout>
  );
};

export default OnboardingPage;
