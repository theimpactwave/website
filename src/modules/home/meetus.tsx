import {Stack} from "@chakra-ui/react";
import TeaserCard from "@/components/cards/teaser-card";
import TeaserIcon3 from "@/assets/teaser-icon3.svg";
import TeaserIcon2 from "@/assets/teaser-icon2.svg";
import TeaserIcon1 from "@/assets/teaser-icon1.svg";
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
    </>)
}

export default Meetus
