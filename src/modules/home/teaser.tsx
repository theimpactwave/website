import { Stack } from "@chakra-ui/react";
import TeaserCard from "@/components/cards/teaser-card";
import TeaserIcon1 from "@/assets/teaser-icon1.svg";
import TeaserIcon2 from "@/assets/teaser-icon2.svg";
import TeaserIcon3 from "@/assets/teaser-icon3.svg";

const HomeTeaser = () => {
  return (
    <>
      <Stack
        direction={["column", "column", "row"]}
        spacing={8}
        justifyContent={"space-evenly"}
        alignItems={"top"}
      >
        <TeaserCard
          width={["100%", "100%", "33.33%"]}
          icon={TeaserIcon3}
          header={"Easy Giving, Big Impact"}
          content={
            "Easily fund the causes you care about. Setting up automated donations takes just a few clicks"
          }
        />
        <TeaserCard
          width={["100%", "100%", "33.33%"]}
          icon={TeaserIcon2}
          header={"Transparency Matters"}
          content={
            "Track your donations and see the impact you've created. We believe in complete transparency, giving you the confidence that your contributions are making a difference"
          }
        />
        <TeaserCard
          width={["100%", "100%", "33.33%"]}
          icon={TeaserIcon1}
          header={"Multiply Your Impact"}
          content={
            "Invest in your vision and those of like-minded individuals. Your donations, combined with others, create a powerful wave of change."
          }
        />
      </Stack>
    </>
  );
};

export default HomeTeaser;
