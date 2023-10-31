import { SimpleGrid } from "@chakra-ui/react";

import FundmeCard from "@/components/cards/fundme-card";

const Fundme = () => {
  return (
    <>
      <SimpleGrid columns={[1, 1, 3]} spacing={8}>
        <FundmeCard
          name={"Standy Christianto"}
          organisation={"The Borneo institute."}
          avatarImage={"/images/initiatives/standy-christianto.png"}
          initiativeImage={"/images/initiatives/the-borneo-institute.png"}
          excerpt={
            "Standy has build a community seed house in Borneo and strengthens local communities and help with the preservation of the biodiversity of the rainforest in Borneo"
          }
          userAddress={"0x0c2d27ccb3f37693cd02cd171bdbc38dbce01472"}
        />
        <FundmeCard
          name={"Rukayya Mahe"}
          organisation={"Welt-Weit "}
          avatarImage={"/images/initiatives/rukayya-mahe.png"}
          initiativeImage={"/images/initiatives/agronet-initiative.png"}
          excerpt={
            "Rukayya Mahe is a Agricultural Economist and currently works with multiple initiatives on climate and food safety in Nigeria"
          }
          userAddress={"0xcb811e9426cd3d32fde9b6d8f7c6635c96f1d6a0"}
        />
        <FundmeCard
          name={"Nolbert Muhumuza"}
          organisation={"Giving Hope Foundation"}
          avatarImage={"/images/initiatives/nolbert-muhumuza.jpeg"}
          initiativeImage={"/images/initiatives/giving-hope-foundation.png"}
          excerpt={
            "Nolbert is an inspirational social entrepreneur and a mentor for youth and sustainable development, transforming the lives of thousands of community members in Africa. His impact is profound and far-reaching."
          }
          userAddress={"0x6b125316835903b638eeda77ab02baf6ab07d22e"}
        />
      </SimpleGrid>
    </>
  );
};

export default Fundme;
