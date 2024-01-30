"use client";

import { Box, Heading, useBreakpoint } from "@chakra-ui/react";
import Image from "next/image";
import { useMemo } from "react";

import AllInOne from "@/assets/all-in-one.svg";
import WaitlistButton from "@/components/waitlist/button";

const Hero = () => {
  const bp = useBreakpoint();

  const getImage = useMemo((): string => {
    return bp === "base" ? "/images/hero-mobile.jpg" : "/images/hero.jpg";
  }, [bp]);

  return (
    <>
      <Box
        sx={{
          position: "relative",
          height: [398, 480, 520, 600, 640],
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
                top: ["14%", "23%", "15%", "22%", "22%"],
                left: ["0", "3%", "2%", "2%", "1%"],
                maxW: [480, 420, 475, 490, 550],
                bg: ["rgba(0,0,0,.75)", "rgba(0,0,0,.55)", "rgba(0,0,0,.4)"],
                p: 8,
                borderRadius: [0, 10, 10],
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
                fontWeight={[600, 600, 900]}
                textAlign={["center", "initial"]}
                color={"white"}
                sx={{
                  mb: [6, 8],
                }}
              >
                The value chain for the positive impact age
              </Heading>
              <WaitlistButton />
            </Box>
          </Box>
        </Box>
        <Image
          src={getImage}
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
