import { SimpleGrid } from "@chakra-ui/react";

import FundmeCard from "@/components/cards/fundme-card";

const Fundme = () => {
  return (
    <>
      <SimpleGrid columns={[1, 1, 3]} spacing={8}>
        <FundmeCard
          id={1}
          name={"Lillian Kanjadza"}
          organisation={"Agronet Global Inc."}
          avatarImage={"/images/initiatives/lillian-kanjadza.jpeg"}
          initiativeImage={"/images/initiatives/agronet-initiative.png"}
          excerpt={
            "Lillian stands as a dedicated and visionary sustainable serial entrepreneur, driven by her mission to foster positive social change. At present, she leads with distinction as the founder of both Lillie Organics and Agronet Global Inc."
          }
        />
      </SimpleGrid>
    </>
  );
};

export default Fundme;
