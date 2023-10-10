import { Link, SimpleGrid, Text } from "@chakra-ui/react";

import MeetusCard from "@/components/cards/meetus-card";

const Meetus = () => {
  return (
    <>
      <SimpleGrid columns={[1, 1, 2]} spacing={8}>
        <MeetusCard
          link={"https://gatherverse.org/fs/"}
          image={"/images/meetus-teaser4.jpg"}
          header={"GatherVerse Founder Summit"}
          date={"17OCT, 2023"}
          content={
            <>
              <Text as={"span"}>Our co-founder </Text>
              <Link href={" https://www.linkedin.com/in/setcookie/"}>
                Frank Mueller
              </Link>
              <Text as={"span"}>
                {" "}
                at the GatherVerse Founders Summit 2023 Roundtable - Tech for
                good
              </Text>
            </>
          }
        />
        <MeetusCard
          link={"https://arabfintechforum.com/"}
          image={"/images/meetus-teaser5.jpg"}
          header={"Arab FinTech Forum"}
          date={"11OCT, 2023"}
          content={
            <>
              <Text as={"span"}>Exclusive forum talk with our co-founder </Text>
              <Link href={"https://www.linkedin.com/in/abhib3012/"}>
                Abhishek Bhattachary
              </Link>
              <Text as={"span"}>
                {" "}
                about financial inclusion and our &quot;The Impact Waves&quot;
                goals
              </Text>
            </>
          }
        />
        <MeetusCard
          link={"https://blockchainfestival.asia/"}
          image={"/images/meetus-teaser3.jpg"}
          header={"FinTech Festival Thailand"}
          date={"27SEP, 2023"}
          content={
            <>
              <Text as={"span"}>Our co-founder </Text>
              <Link href={"https://www.linkedin.com/in/abhib3012/"}>
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
        <MeetusCard
          link={"https://www.tropentag.de/"}
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
          link={"https://www.ethereumsingapore.com/"}
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
      </SimpleGrid>
    </>
  );
};

export default Meetus;
