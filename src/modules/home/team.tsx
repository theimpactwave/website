import { SimpleGrid } from "@chakra-ui/react";

import TeamCard from "@/components/cards/team-card";

const Team = () => {
  return (
    <>
      <SimpleGrid columns={[1, 2, 4, 4]} spacing={8}>
        <TeamCard
          minimal
          link={"/team"}
          image={"/images/team/abhishek.jpg"}
          name={"Abhishek Bhattacharya"}
        />
        <TeamCard
          minimal
          link={"/team"}
          image={"/images/team/frank.jpg"}
          name={"Frank Mueller"}
        />
        <TeamCard
          minimal
          link={"/team"}
          image={"/images/team/livia.jpg"}
          name={"Livia Zimerman"}
        />
        <TeamCard
          minimal
          link={"/team"}
          image={"/images/team/bjorn.jpg"}
          name={"Bjorn Rosendahl"}
        />
      </SimpleGrid>
    </>
  );
};

export default Team;
