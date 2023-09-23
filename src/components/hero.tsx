import { Box, Heading } from "@chakra-ui/react";
import Image from "next/image";

import WaitlistButton from "@/components/waitlist/button";

const Hero = () => {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          height: [240, 300, 400],
        }}
      >
        <Box
          display={"flex"}
          justifyContent={"center"}
          position={"absolute"}
          zIndex={1}
          width={"100%"}
          height={"auto"}
        >
          <Box width={920}>
            <Box
              sx={{
                position: "relative",
                top: ["12%", "18%", "20%"],
                left: ["5%", "5%", "2%"],
                maxW: [370, 500, 600],
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
          </Box>
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
