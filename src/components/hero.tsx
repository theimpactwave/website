import { Box, Heading } from "@chakra-ui/react";
import Image from "next/image";

import AllInOne from "@/assets/all-in-one.svg";
import WaitlistButton from "@/components/waitlist/button";

const Hero = () => {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          height: [380, 480, 600, 700, 900],
          "& img": {},
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
                display: ["flex", "block !important"],
                flexDirection: "column",
                alignItems: "center",
                top: ["13%", "10%", "23%", "32%", "45%"],
                left: ["0", "3%", "2%", "2%", "1%"],
                maxW: [480, 420, 475, 490, 550],
                bg: ["rgba(0,0,0,.66)", "rgba(0,0,0,.55)", "rgba(0,0,0,.4)"],
                p: 8,
                borderRadius: 10,
              }}
            >
              <Box
                sx={{
                  maxW: [330, 355, 397, 416, 475],
                  mb: 8,
                }}
              >
                <Image
                  src={AllInOne}
                  alt={"The Impact Wave"}
                  width={616}
                  height={139}
                />
              </Box>
              <Heading
                as={"h1"}
                fontSize={["23", "30", "42", "44", "50"]}
                fontWeight={[600, 600, 700]}
                textTransform={"uppercase"}
                textAlign={["center", "initial"]}
                color={"white"}
                sx={{
                  mb: 8,
                }}
              >
                The value chain for the positive impact age
              </Heading>
              <WaitlistButton />
            </Box>
          </Box>
        </Box>
        <Image
          src={"/images/hero.jpg"}
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
