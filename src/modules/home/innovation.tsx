import { Box, SimpleGrid } from "@chakra-ui/react";
import Image from "next/image";

import Container from "@/components/container";
import Heading from "@/components/heading";

const Innovation = () => {
  return (
    <Container
      contain={false}
      sx={{
        minH: 500,
        backgroundImage: "url('images/sunset.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container>
        <SimpleGrid
          columns={[1, 2, 2, 4]}
          spacing={12}
          px={4}
          py={8}
          sx={{
            "& img": {
              maxH: 250,
              w: "auto",
              mx: "auto",
              boxShadow: "0 0 50px rgba(255,255,255,.33)",
            },
          }}
        >
          <Box textAlign={"center"}>
            <Heading
              as={"h3"}
              fontSize={[20, 20, 20, 22]}
              fontWeight={700}
              minH={["auto", "auto", "auto", 120]}
              color={"primary"}
              mb={8}
            >
              We introduce a new standard and asset classes
            </Heading>
            <Image
              src={"/images/innovation1.jpg"}
              alt={""}
              width={640}
              height={876}
            />
          </Box>
          <Box textAlign={"center"}>
            <Heading
              as={"h3"}
              fontSize={[20, 20, 20, 22]}
              fontWeight={700}
              minH={["auto", "auto", "auto", 120]}
              color={"primary"}
              mb={8}
            >
              We streamline the process of positive impact creation
            </Heading>
            <Image
              src={"/images/innovation3.png"}
              alt={""}
              width={315}
              height={640}
            />
          </Box>
          <Box textAlign={"center"}>
            <Heading
              as={"h3"}
              fontSize={[20, 20, 20, 22]}
              fontWeight={700}
              minH={["auto", "auto", "auto", 120]}
              color={"primary"}
              mb={8}
            >
              We enable investors to efficiently meet their targets
            </Heading>
            <Image
              src={"/images/innovation2.jpg"}
              alt={""}
              width={640}
              height={876}
            />
          </Box>
          <Box textAlign={"center"}>
            <Heading
              as={"h3"}
              fontSize={[20, 20, 20, 22]}
              fontWeight={700}
              minH={["auto", "auto", "auto", 120]}
              color={"primary"}
              mb={8}
            >
              We establish new methods and standards of evaluation
            </Heading>
            <Image
              src={"/images/innovation4.png"}
              alt={""}
              width={315}
              height={640}
            />
          </Box>
        </SimpleGrid>
      </Container>
    </Container>
  );
};

export default Innovation;
