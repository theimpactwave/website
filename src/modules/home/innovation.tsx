import { Box, SimpleGrid } from "@chakra-ui/react";
import Image from "next/image";

import Container from "@/components/container";
import Heading from "@/components/heading";

const Innovation = () => {
  return (
    <Container
      contain={false}
      sx={{
        backgroundImage: "url('images/sunset.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Container>
        <Heading
          as={"h2"}
          color={"white"}
          fontWeight={900}
          textAlign={"center"}
          pt={8}
          mb={0}
        >
          The value chain
        </Heading>
        <SimpleGrid
          columns={[1, 2, 2, 4]}
          spacing={12}
          px={4}
          py={16}
          sx={{
            "& img": {
              maxW: 120,
              w: "auto",
              mx: "auto",
            },
          }}
        >
          <Box textAlign={"center"}>
            <Image
              src={"/images/service1.svg"}
              alt={""}
              width={300}
              height={300}
            />
            <Heading
              as={"h3"}
              fontSize={[20, 20, 20, 22]}
              fontWeight={700}
              minH={["auto", "auto", "auto", "40px"]}
              color={"primary"}
              m={0}
              pt={8}
            >
              Co-funding platform for impact projects.
            </Heading>
          </Box>
          <Box textAlign={"center"}>
            <Image
              src={"/images/service2.svg"}
              alt={""}
              width={300}
              height={300}
            />
            <Heading
              as={"h3"}
              fontSize={[20, 20, 20, 22]}
              fontWeight={700}
              minH={["auto", "auto", "auto", "40px"]}
              color={"primary"}
              m={0}
              pt={8}
            >
              Impact project lifecycle tools.
            </Heading>
          </Box>
          <Box textAlign={"center"}>
            <Image
              src={"/images/service3.svg"}
              alt={""}
              width={300}
              height={300}
            />
            <Heading
              as={"h3"}
              fontSize={[20, 20, 20, 22]}
              fontWeight={700}
              minH={["auto", "auto", "auto", "40px"]}
              color={"primary"}
              m={0}
              pt={8}
            >
              Monitoring and evaluation tools.
            </Heading>
          </Box>
          <Box textAlign={"center"}>
            <Image
              src={"/images/service4.svg"}
              alt={""}
              width={300}
              height={300}
            />
            <Heading
              as={"h3"}
              fontSize={[20, 20, 20, 22]}
              fontWeight={700}
              minH={["auto", "auto", "auto", "40px"]}
              color={"primary"}
              m={0}
              pt={8}
            >
              Refinance via verified impact claims.
            </Heading>
          </Box>
        </SimpleGrid>
      </Container>
    </Container>
  );
};

export default Innovation;
