import { Link, Stack, Text } from "@chakra-ui/react";

import MeetusCard from "@/components/cards/meetus-card";

const Meetus = () => {
  return (
    <>
      <Stack
        direction={["column", "column", "row"]}
        spacing={8}
        justifyContent={"space-evenly"}
        alignItems={"top"}
      >
        <MeetusCard
          width={["100%", "100%", "33.33%"]}
          image={"/images/meetus-teaser2.jpg"}
          header={"ETH Singapore"}
          date={"14SEP, 2023"}
          content={
            <>
              <Text as={"span"}>Our co-founder </Text>
              <Link href={" https://www.linkedin.com/in/abhib3012/"}>
                Abhishek Bhattachary
              </Link>
              <Text as={"span"}>
                {" "}
                introducing The Impact Wave to ETH crowd in Singapore.
              </Text>
            </>
          }
        />
        <MeetusCard
          width={["100%", "100%", "33.33%"]}
          image={"/images/meetus-teaser1.jpg"}
          header={"Tropentage Berlin 2023"}
          date={"22SEP, 2023"}
          content={
            <>
              <Text as={"span"}>Our partner organisation </Text>
              <Link href={" https://welt-weit.og"}>Welt-Weit eV</Link>
              <Text as={"span"}>
                {" "}
                presenting The Impact Wave in workshops and talks.
              </Text>
            </>
          }
        />
        <MeetusCard
          width={["100%", "100%", "33.33%"]}
          image={"/images/meetus-teaser3.jpg"}
          header={"FinTech Festival Thailand"}
          date={"27SEP, 2023"}
          content={
            <>
              <Text as={"span"}>Our co-founder </Text>
              <Link href={" https://www.linkedin.com/in/abhib3012/"}>
                Abhishek Bhattachary
              </Link>
              <Text as={"span"}>
                {" "}
                live at FinTech Festival Thailand talking about digital
                transformation and impact initiatives.
              </Text>
            </>
          }
        />
      </Stack>
    </>
  );
};

export default Meetus;
