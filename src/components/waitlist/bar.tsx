import { Box, Heading, Stack } from "@chakra-ui/react";
import WaitlistButton from "@/components/waitlist/button";
import Container from "@/components/container";

const WaitlistBar = () => {
  return (
    <Box bg={"secondary"}>
      <Container>
        <Box p={5}>
          <Stack
            direction={["column", "row"]}
            spacing={4}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Heading as={"h3"} color={"black"} textAlign={["center", "left"]}>
              Get notified when we go live
            </Heading>
            <WaitlistButton variant={"solid"} />
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default WaitlistBar;
