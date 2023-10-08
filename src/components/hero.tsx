import { Box, Heading } from "@chakra-ui/react";
import Image from "next/image";

import WaitlistButton from "@/components/waitlist/button";

const Hero = () => {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          height: [280, 320, 400],
        }}
        mb={16}
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
                top: ["18%", "25%", "38%"],
                left: ["4%", "3%", "2%"],
                maxW: [370, 460, 725],
                bg: "rgba(0,0,0,.4)",
                p: 8,
                borderRadius: 10,
              }}
            >
              <Heading
                as={"h1"}
                fontSize={["23", "30", "42"]}
                color={"white"}
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
