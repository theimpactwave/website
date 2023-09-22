import { Box, Heading } from "@chakra-ui/react";
import Image from "next/image";
import WaitlistButton from "@/components/waitlist/button";

const Hero = () => {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          zIndex: 0,
          height: [240, 300, 400],
        }}
      >
        <Box
          sx={{
            position: "absolute",
            zIndex: 1,
            top: ["8%", "10%", "15%"],
            left: ["4%", "6%", "10%"],
            bg: "rgba(0,0,0,.4)",
            p: 8,
          }}
        >
          <Heading
            as={"h1"}
            fontSize={["24", "33", "50"]}
            sx={{
              mb: 4,
            }}
          >
            Unleash Your Generosity, <br />
            Amplify Your Impact
          </Heading>
          <WaitlistButton />
        </Box>
        <Image
          src={"/images/teaser-1920-strip.jpg"}
          alt={""}
          layout={"fill"}
          objectFit={"cover"}
          objectPosition={"center"}
        />
      </Box>
    </>
  );
};

export default Hero;
