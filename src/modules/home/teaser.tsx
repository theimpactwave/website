import { Stack } from "@chakra-ui/react";

import TeaserIcon3 from "@/assets/marketplace-icon.svg";
import TeaserIcon1 from "@/assets/protocol-icon.svg";
import TeaserIcon2 from "@/assets/software-icon.svg";
import TeaserCard from "@/components/cards/teaser-card";

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
          icon={TeaserIcon1}
          header={"Protocol"}
          content={
            "A new standard and protocol in impact creation, evaluation and measurement uniquely crafted to the needs and reality of local change-makers across the globe."
          }
        />
        <TeaserCard
          width={["100%", "100%", "33.33%"]}
          icon={TeaserIcon2}
          header={"Software"}
          content={
            "Software solutions designed to efficiently plan, manage, execute, monitor and evaluate domain-agnostic impact projects from start to end."
          }
        />
        <TeaserCard
          width={["100%", "100%", "33.33%"]}
          icon={TeaserIcon3}
          header={"Marketplace"}
          content={
            "An innovative platform and marketplace for investments and funding for positive impact claims generated and blended seamlessly through our advanced protocol and software."
          }
        />
      </Stack>
    </>
  );
};

export default HomeTeaser;
