"use client";

import {
  Alert,
  AlertIcon,
  AlertTitle,
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
import NextLink from "next/link";
import { useEffect, useState } from "react";

import Calendly from "@/components/calendly";
import CircleNumber from "@/components/circle-number";
import Container from "@/components/container";
import Hairline from "@/components/hairline";
import MixerModal from "@/components/mixer/modal";
import WaitlistBar from "@/components/waitlist/bar";
import Fundme from "@/modules/home/fundme";
import Initiatives from "@/modules/home/initiatives";
import Meetus from "@/modules/home/meetus";
import HomeTeaser from "@/modules/home/teaser";
const HomePage = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const mixerModal = useDisclosure();
  const [inBeta, setInBeta] = useState<boolean>(false);

  const onImageClickHandler = () => {
    onOpen();
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (/\/?#beta/gi.test(window.location.href)) {
        setInBeta(true);
      }
    }
  }, [setInBeta]);

  useEffect(() => {
    const onHashChangeHandler = (event: HashChangeEvent) => {
      event.preventDefault();
      if (/\/?#demo/gi.test(window.location.href)) {
        window.history.pushState({}, "", "/");
        mixerModal.onOpen();
      }
    };
    if (typeof window !== "undefined") {
      if (/\/?#demo/gi.test(window.location.href)) {
        window.history.replaceState({}, "", "/");
        window.dispatchEvent(new HashChangeEvent("hashchange"));
      }
    }
    window.addEventListener("hashchange", onHashChangeHandler);
    return () => {
      window.removeEventListener("hashchange", onHashChangeHandler);
    };
  }, [mixerModal]);

  return (
    <Box>
      <Container>
        <Heading as={"h2"} fontSize={[22, 24, 28]} textAlign={"center"} mb={12}>
          Effortlessly fund causes that matter to you. Customize your impact mix
          and see your money in action.
        </Heading>
        <Hairline />
        <Box mb={12} />
        <HomeTeaser />
        <Box mb={12} />
      </Container>
      <WaitlistBar />
      <Box mb={16} />
      <Container>
        <Stack
          direction={["column", "column", "row"]}
          spacing={8}
          justifyContent={"space-between"}
          alignItems={"top"}
        >
          <Box flex={[1, 1, "1 1 35%"]}>
            <Heading as={"h3"} fontSize={[24, 28, 32]} mb={4}>
              We continuously invest in the most impactful initiatives for you.
            </Heading>
            <Text mb={4} fontWeight={700}>
              How It Works:
            </Text>
            <Stack direction={"column"} gap={5}>
              <Stack direction={"row"} alignItems={"baseline"} spacing={4}>
                <CircleNumber number={1} />
                <Text flex={1}>
                  Define Your Impact Vision: Choose causes close to your heart.
                </Text>
              </Stack>
              <Stack direction={"row"} alignItems={"baseline"} spacing={4}>
                <CircleNumber number={2} />
                <Text flex={1}>
                  Empower Initiatives: Support impactful curated initiatives
                  directly.
                </Text>
              </Stack>
              <Stack direction={"row"} alignItems={"baseline"} spacing={4}>
                <CircleNumber number={3} />
                <Text flex={1}>
                  Witness Real Change: See the proof of your impact.
                </Text>
              </Stack>
            </Stack>
          </Box>
          <Box flex={1}>
            <Link
              onClick={onImageClickHandler}
              sx={{
                "& > img": {
                  borderRadius: 10,
                },
              }}
            >
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
            <Box
              order={[1, 1, 0]}
              flex={1}
              sx={{
                "& > img": {
                  borderRadius: 10,
                },
              }}
            >
              <Image
                src={"/images/impactdao.jpg"}
                alt={""}
                width={1080}
                height={1637}
                layout={"responsive"}
              />
            </Box>
            <Box order={[0, 0, 1]} flex={[1, 1, "1 1 28%"]}>
              <Heading as={"h3"} fontSize={[24, 28, 32]} mb={4}>
                Trust in Transparency, Fuel for Good
              </Heading>
              <Text>
                Rest assured with our unwavering commitment to transparency.
                Easily track and verify the tangible difference your
                contributions are making. The Impact Wave meticulously allocates
                your funds, ensuring continuous and substantial support for
                initiatives that drive positive change.
              </Text>
            </Box>
          </Stack>
        </Container>
        <Box mb={12} />
        <Hairline />
        {!inBeta ? (
          <>
            <Box mb={12} textAlign={"center"}>
              <Heading as={"h3"} fontSize={[24, 28, 32]} mb={4}>
                Meet some of our positive impact makers:
              </Heading>
              <Text>
                Your investments drive real change. See where your money goes
                and the difference it makes.
              </Text>
            </Box>
            <Initiatives />
            <Box mb={12} />
            <Hairline />
          </>
        ) : (
          <>
            <Box mb={12} textAlign={"center"}>
              <Heading as={"h3"} fontSize={[24, 28, 32]} mb={4}>
                Fund some of our Initiatives directly (BETA)
              </Heading>
              <Alert status={"info"}>
                <AlertIcon />
                <AlertTitle>
                  NOTE!: This is a BETA test with MetaMask to test the
                  transaction flow to our receivers
                </AlertTitle>
              </Alert>
              <Box mb={12} />
              <Fundme />
              <Box mb={12} />
              <Hairline />
            </Box>
          </>
        )}
        <Box mb={4} textAlign={"center"} width={"100%"}>
          <Heading
            as={"h4"}
            display={"inline-block"}
            fontSize={[28, 34, 34]}
            fontWeight={700}
            fontStyle={"italic"}
            color={"secondary"}
            maxW={["80%", "70%", "50%"]}
          >
            &ldquo;Our vision is to secure, simplify and spread funding to
            continuously power sustainable impact initiatives.&rdquo;
          </Heading>
        </Box>
        <Box mb={4} textAlign={"center"} width={"100%"}>
          <Text>
            Start making a difference today. Connect with us to learn more.
          </Text>
        </Box>
        <Box mb={12} textAlign={"center"}>
          <Button
            as={Link}
            href="mailto:team@theimpactwave.org"
            variant={"solid"}
            color={"white"}
            colorScheme={"secondaryScheme"}
          >
            Get in touch
          </Button>
        </Box>
      </Container>
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
                fontSize={[18, 22, 24]}
                textAlign={["center", "left"]}
              >
                Meet us at the 2023 GatherVerse Founders Summit
              </Heading>
              <Link
                href={
                  "https://www.eventbrite.com/e/gatherverse-founders-summit-tickets-705581141187"
                }
              >
                <Button variant={"solid"} colorScheme={"brandScheme"}>
                  Get tickets
                </Button>
              </Link>
            </Stack>
          </Box>
        </Container>
      </Box>
      <Box mb={16} />
      <Container>
        <Box as={"h3"} mb={12} fontSize={[24, 28, 32]} textAlign={"center"}>
          <Heading>Lets talk - Meet us here:</Heading>
        </Box>
        <Meetus />
        <Box mb={12} />
        <Hairline />
        <Box mb={12} textAlign={"center"}>
          <Heading as={"h3"} fontSize={[24, 28, 32]} mb={4}>
            Meet the team
          </Heading>
          <Text mb={4} fontWeight={700}>
            90+ years of experiences making global and sustainable impact:
          </Text>
          <NextLink href={"/team"} title={"team"}>
            <Button
              variant={"outline"}
              colorScheme={"secondaryScheme"}
              minW={140}
            >
              Team
            </Button>
          </NextLink>
          <Box mb={16} />
          <Hairline />
          <Heading as={"h3"} fontSize={[24, 28, 32]} mb={4}>
            Partners and Investors
          </Heading>
          <Text mb={4} fontWeight={700}>
            Book a meeting with us:
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
      <MixerModal isOpen={mixerModal.isOpen} onClose={mixerModal.onClose} />
    </Box>
  );
};

export default HomePage;
