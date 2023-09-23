"use client";

import {
  Box,
  Button,
  Heading,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";

import Calendly from "@/components/calendly";
import CircleNumber from "@/components/circle-number";
import Container from "@/components/container";
import Hairline from "@/components/hairline";
import WaitlistBar from "@/components/waitlist/bar";
import Meetus from "@/modules/home/meetus";
import HomeTeaser from "@/modules/home/teaser";

const HomePage = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const onImageClickHandler = () => {
    onOpen();
  };

  return (
    <Box px={4}>
      <Container>
        <Heading
          as={"h3"}
          textAlign={"center"}
          mb={2}
          color={"brand"}
          fontWeight={700}
        >
          Welcome
        </Heading>
        <Heading
          as={"h4"}
          fontSize={[20, 24, 24]}
          fontWeight={400}
          textAlign={"center"}
          mb={12}
        >
          Welcome to The Impact Wave: Empower Your Giving. Discover handpicked
          causes, effortless donations, and transparent impact. Join our
          community and make every contribution count.
        </Heading>
        <Hairline />
        <Box mb={12} />
        <HomeTeaser />
        <Box mb={12} />
      </Container>
      <WaitlistBar />
      <Box mb={12} />
      <Container>
        <Stack
          direction={["column", "column", "row"]}
          spacing={8}
          justifyContent={"space-between"}
          alignItems={"top"}
        >
          <Box flex={[1, 1, "1 1 35%"]}>
            <Heading as={"h3"} mb={4}>
              We continuously invest in the most impactful initiatives for you.
            </Heading>
            <Text mb={4} fontWeight={700}>
              Here is how it works:
            </Text>
            <Stack direction={"column"} gap={5}>
              <Stack direction={"row"} alignItems={"baseline"} spacing={4}>
                <CircleNumber number={1} />
                <Text flex={1}>
                  Register on theimpactwave.org and either follow our impact
                  influencers or simply start to make an impact by:
                </Text>
              </Stack>
              <Stack direction={"row"} alignItems={"baseline"} spacing={4}>
                <CircleNumber number={2} />
                <Text flex={1}>
                  Define where you want to spread your impact funding to. Select
                  the domains you want to power. Make a one-time impact funding
                  or set monthly recurring funding campaigns. Our Impact DAO
                  distributes your fundings for the highest impact.
                </Text>
              </Stack>
              <Stack direction={"row"} alignItems={"baseline"} spacing={4}>
                <CircleNumber number={3} />
                <Text flex={1}>
                  See your impact in action and get insides from your funding
                  stream. See where your funding&apos;s have been distributed
                  too and connect with their stories.
                </Text>
              </Stack>
            </Stack>
          </Box>
          <Box flex={1}>
            <Link onClick={onImageClickHandler}>
              <Image
                src={"/images/wavemixer.jpg"}
                alt={""}
                width={1080}
                height={1637}
                layout={"responsive"}
              />
            </Link>
          </Box>
        </Stack>
        <Box mb={12} />
        <Hairline />
        <Container>
          <Stack
            direction={["column", "column", "row"]}
            spacing={8}
            justifyContent={"space-between"}
            alignItems={"top"}
          >
            <Box order={[1, 1, 0]} flex={1}>
              <Image
                src={"/images/impactdao.jpg"}
                alt={""}
                width={1080}
                height={1637}
                layout={"responsive"}
              />
            </Box>
            <Box order={[0, 0, 1]} flex={[1, 1, "1 1 28%"]}>
              <Heading as={"h3"} mb={4}>
                Transparent distribution of funds powered by blockchain
                technology
              </Heading>
              <Text mb={4} fontWeight={700}>
                Here is how it works:
              </Text>
              <Text>
                After you have defined how and where you want to spread your
                funding the Impact DAO takes care of the fair distributions
                amongst the eligible initiatives. The DAO calculates the payout
                by transparent algorithms taking into accounts factors like
                geography, size and stage of initiative, current initiative
                impact curvea and AI powered impact evaluation.
              </Text>
            </Box>
          </Stack>
        </Container>
        <Box mb={12} />
        <Hairline />
        <Box textAlign={"center"} width={"100%"}>
          <Heading
            as={"h4"}
            display={"inline-block"}
            fontSize={[28, 34, 34]}
            fontWeight={700}
            fontStyle={"italic"}
            color={"brand"}
            maxW={["80%", "70%", "50%"]}
          >
            &ldquo;Our vision is to secure, simplify and spread funding to
            continuously power sustainable impact initiatives.&rdquo;
          </Heading>
        </Box>
        <Box mb={12} />
        <Box mb={12} textAlign={"center"}>
          <Button
            as={Link}
            href="mailto:team@theimpactwave.org"
            variant={"solid"}
            colorScheme={"brandScheme"}
          >
            Get in touch
          </Button>
        </Box>
        <Box mb={12} />
        <Hairline />
        <Box mb={12} textAlign={"center"}>
          <Heading>Lets talk - Meet us here:</Heading>
        </Box>
        <Meetus />
        <Box mb={12} />
        <Hairline />
        <Box mb={12} textAlign={"center"}>
          <Heading mb={4}>Partners and Investors</Heading>
          <Text mb={4} fontWeight={700}>
            Book a 30 min. meeting with us:
          </Text>
          <Calendly />
        </Box>
      </Container>
      <Box mb={16} />
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        closeOnEsc={true}
        motionPreset={"scale"}
        size={["md", "lg", "xl"]}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader pt={10}>The Impact Wave</ModalHeader>
          <ModalCloseButton />
          <ModalBody mb={10}>
            <Image
              src={"/images/wavemixer.jpg"}
              alt={""}
              width={1080}
              height={1637}
              layout={"responsive"}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default HomePage;
