import { SimpleGrid } from "@chakra-ui/react";

import FundmeCard from "@/components/cards/fundme-card";

const Fundme = () => {
  return (
    <>
      <SimpleGrid columns={[1, 1, 3]} spacing={8}>
        <FundmeCard
          id={1}
          name={"Standy Christianto"}
          organisation={"The Borneo institute."}
          avatarImage={"/images/initiatives/lillian-kanjadza.jpeg"}
          initiativeImage={"/images/initiatives/agronet-initiative.png"}
          excerpt={
            "The establishment of community seed banks in Manuhing Raya "
          }
          userAddress={"0x0c2d27ccb3f37693cd02cd171bdbc38dbce01472"} //receiver wallet address
        />
        <FundmeCard
          id={1}
          name={"Rukayya Mahe"}
          organisation={"Welt-Weit "}
          avatarImage={"/images/initiatives/lillian-kanjadza.jpeg"}
          initiativeImage={"/images/initiatives/agronet-initiative.png"}
          excerpt={"Rukayya Mahe is a single entrepreneur"}
          userAddress={"0xcb811e9426cd3d32fde9b6d8f7c6635c96f1d6a0"}
        />
      </SimpleGrid>
    </>
  );
};

export default Fundme;
