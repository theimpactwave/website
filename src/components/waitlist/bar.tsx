import { Box, Heading, Stack } from "@chakra-ui/react";

import Container from "@/components/container";
import WaitlistButton from "@/components/waitlist/button";

const WaitlistBar = () => {
  return (
    <Box bg={"silver"}>
      <Container>
        <Box p={5}>
          <Stack
            direction={["column", "row"]}
            spacing={4}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Heading
              as={"h3"}
              fontSize={[22, 24, 28]}
              textAlign={["center", "left"]}
            >
              Join the Waitlist and ignite impact
            </Heading>

            <WaitlistButton variant={"solid"} />
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default WaitlistBar;
