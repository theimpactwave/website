import { Stack } from "@chakra-ui/react";

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
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
          }
        />
        <MeetusCard
          width={["100%", "100%", "33.33%"]}
          image={"/images/meetus-teaser1.jpg"}
          header={"Tropentage Berlin 2023"}
          date={"22SEP, 2023"}
          content={
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
          }
        />
        <MeetusCard
          width={["100%", "100%", "33.33%"]}
          image={"/images/meetus-teaser3.jpg"}
          header={"FinTech Festival Thailand"}
          date={"27SEP, 2023"}
          content={
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
          }
        />
      </Stack>
    </>
  );
};

export default Meetus;
