import {Box, Heading} from "@chakra-ui/react";
import type {Metadata} from "next";

import Container from "@/components/container";
import DefaultLayout from "@/layouts/default";
import WaitlistButton from "@/components/waitlist/button";

export const metadata: Metadata = {
  title: "The Impact Wave - Public Presentation",
  description: "The Impact Wave -The value chain for the positive impact age",
};

const PresentationPublic = () => {
  return (
    <>
      <DefaultLayout>
        <Container>
          <Heading as={"h1"} mb={8} textAlign={"center"}>
            The Impact Wave presentation
          </Heading>
          <Box
            sx={{
              mb: 12,
              iframe: {
                height: [250, 400, 500],
              },
            }}
          >
            <iframe
              src="https://pitch.com/embed/96d84e73-e5ee-4b88-b2e0-2b18c2b5a8b6"
              allow="fullscreen"
              allowFullScreen
              width="100%"
              height="auto"
            />
          </Box>
          <Heading as={"h2"} mb={8} textAlign={"center"}>
            We have some question to you:
          </Heading>
          <Box sx={{
            mb: 12,
            border: "1px solid",
            borderColor: "silver",
          }}>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfAR2lQJ0kbmLRAzUQLlMmUmL73yUJ129NE5u5LFHCUJnRFGg/viewform?embedded=true"
              width="100%"
              height="1800px"
            >
              Loading ...
            </iframe>
          </Box>
          <Box sx={{
            mb: 8
          }}>
            <WaitlistButton variant={"solid"} size={"lg"} width={"100%"}/>
          </Box>
          <Heading as={"h2"} fontSize={24} textAlign={"center"}>Thank you for your participation</Heading>
        </Container>
      </DefaultLayout>

    </>
  );
};

export default PresentationPublic;
