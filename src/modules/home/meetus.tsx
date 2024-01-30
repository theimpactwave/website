import { Box, Link, SimpleGrid, Text } from "@chakra-ui/react";

import MeetusCard from "@/components/cards/meetus-card";

const Meetus = () => {
  return (
    <Box>
      <SimpleGrid columns={[1, 1, 2]} spacing={8} mb={8}>
        <Box>
          <MeetusCard
            current
            link={"https://linktr.ee/TEDxCRCE"}
            image={"/images/meetus-teaser6.jpg"}
            header={"TEDx CRCE"}
            date={"3FEB, 2024"}
            content={
              <>
                <Text as={"span"}>Our co-founder </Text>
                <Link href={"https://www.linkedin.com/in/abhib3012/"}>
                  Abhishek
                </Link>
                <Text as={"span"}>
                  {" "}
                  at TEDx CRCE Mumbai - Cracks in the canvas
                </Text>
              </>
            }
          />
        </Box>
        <Box>
          <MeetusCard
            link={"https://gatherverse.org/fs/"}
            image={"/images/meetus-teaser4.jpg"}
            header={"GatherVerse Founder Summit"}
            date={"17OCT, 2023"}
            content={
              <>
                <Text as={"span"}>Our co-founder </Text>
                <Link href={"https://www.linkedin.com/in/setcookie/"}>
                  Frank
                </Link>
                <Text as={"span"}>
                  {" "}
                  at the GatherVerse Founders Summit 2023 Roundtable - Tech for
                  good
                </Text>
              </>
            }
          />
        </Box>
      </SimpleGrid>
      <SimpleGrid columns={[1, 1, 2]} spacing={8}>
        <MeetusCard
          reduced
          link={"https://arabfintechforum.com/"}
          image={"/images/meetus-teaser5.jpg"}
          header={"Arab FinTech Forum"}
          date={"11OCT, 2023"}
        />
        <MeetusCard
          reduced
          linkBoxProps={{ height: "auto" }}
          link={"https://blockchainfestival.asia/"}
          image={"/images/meetus-teaser3.jpg"}
          header={"FinTech Festival Thailand"}
          date={"27SEP, 2023"}
        />
        <MeetusCard
          reduced
          link={"https://www.tropentag.de/"}
          image={"/images/meetus-teaser1.jpg"}
          header={"Tropentage Berlin 2023"}
          date={"22SEP, 2023"}
        />
        <MeetusCard
          reduced
          link={"https://www.ethereumsingapore.com/"}
          image={"/images/meetus-teaser2.jpg"}
          header={"ETH Singapore"}
          date={"14SEP, 2023"}
        />
      </SimpleGrid>
    </Box>
  );
};

export default Meetus;
