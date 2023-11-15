"use client";

import { Box, Button, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";

import Calendly from "@/components/calendly";
import Container from "@/components/container";
import Cta from "@/components/cta";
import Hairline from "@/components/hairline";
import Heading from "@/components/heading";
import NumberList from "@/components/number-list";
import SubHeading from "@/components/sub-heading";
import WaitlistBar from "@/components/waitlist/bar";
import Innovation from "@/modules/home/innovation";
import Meetus from "@/modules/home/meetus";
import Team from "@/modules/home/team";
import HomeTeaser from "@/modules/home/teaser";

const HomeView = () => {
  return (
    <Box>
      <Container>
        <SubHeading center>Our Mission</SubHeading>
        <Heading as={"h1"} textAlign={"center"}>
          We close the existing gaps in the impact economy&apos;s value chain.
        </Heading>
        <Hairline />
        <Box mb={12} />
        <HomeTeaser />
        <Box mb={12} />
      </Container>
      <Container>
        <Box mb={24} />
        <SubHeading center>Our solution</SubHeading>
        <Heading as={"h1"} textAlign={"center"}>
          Creating blended and certified positive impact projects ready for
          investment.
        </Heading>
        <Box mb={12} />
        <Hairline />
        <Box mb={12} />
        <Stack
          direction={["column", "row"]}
          spacing={8}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box flex={1}>
            <SubHeading>For projects</SubHeading>
            <NumberList
              items={[
                { caption: "Unlocking new investor potential" },
                { caption: "A new protocol for investment" },
                { caption: "The first application suite for impact makers" },
              ]}
            />
          </Box>
          <Box
            flex={[1, "0 0 240px", "0 0 320px"]}
            sx={{ "& > img": { borderRadius: 10 } }}
          >
            <Image
              src={"/images/for-projects.jpg"}
              alt={""}
              width={640}
              height={427}
            />
          </Box>
        </Stack>
        <Box mb={24} />
        <Stack
          direction={["column", "row"]}
          spacing={8}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box
            flex={[1, "0 0 240px", "0 0 320px"]}
            order={[2, 1]}
            sx={{ "& > img": { borderRadius: 10 } }}
          >
            <Image
              src={"/images/for-investors.jpg"}
              alt={""}
              width={640}
              height={427}
            />
          </Box>
          <Box flex={1} order={[1, 2]}>
            <SubHeading>For investors</SubHeading>
            <NumberList
              items={[
                { caption: "Access to positive impact investments" },
                {
                  caption:
                    "Transparency and credibility through standardization",
                },
                { caption: "Fractional ownership of assets" },
              ]}
            />
          </Box>
        </Stack>
        <Box mb={24} />
        <SubHeading center>New Standards</SubHeading>
        <Heading as={"h1"} textAlign={"center"}>
          Digital inclusion for impact makers - Trust and transparency for
          investors.
        </Heading>
      </Container>
      <Hairline />
      <Box mb={12} />
      <Innovation />
      <Box mb={16} />
      <Container>
        <Heading
          as={"h2"}
          size={"h4"}
          fontWeight={700}
          fontStyle={"italic"}
          textAlign={"center"}
        >
          &bdquo;We set new standards for positive impact creation.&rdquo;
        </Heading>
      </Container>
      <WaitlistBar />
      <Box mb={16} />
      <Container>
        <Box mb={12} />
        <SubHeading center>Meet us</SubHeading>
        <Heading as={"h1"} textAlign={"center"}>
          Lets talk and meet
        </Heading>
        <Hairline />
        <Box mb={12} />
        <Meetus />
        <Box mb={12} />
        <SubHeading center>The team</SubHeading>
        <Heading as={"h1"} textAlign={"center"}>
          Meet our team
        </Heading>
        <Hairline />
        <Box mb={12} />
        <Container center>
          <Text mb={8} fontWeight={700}>
            90+ years of experiences making global and sustainable impact:
          </Text>
          <Team />
          <Box mb={8} />
          <NextLink href={"/team"} title={"team"}>
            <Button
              variant={"outline"}
              colorScheme={"tertiaryScheme"}
              minW={140}
            >
              Team
            </Button>
          </NextLink>
          <Box mb={16} />
        </Container>
      </Container>
      <Cta
        title={"Connect with us to learn more"}
        link={"mailto:team@theimpactwave.org"}
        caption={"Get in touch"}
        contain
        containerProps={{ bg: "silver" }}
      />
      <Container>
        <Box mb={12} />
        <SubHeading center>Book us</SubHeading>
        <Heading as={"h1"} textAlign={"center"}>
          Partners and Investors
        </Heading>
        <Hairline />
        <Box mb={12} />
        <Container center>
          <Text mb={8} fontWeight={700}>
            Book a meeting with us:
          </Text>
          <Calendly />
        </Container>
      </Container>
      <Box mb={16} />
    </Box>
  );
};

export default HomeView;
