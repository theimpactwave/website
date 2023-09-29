import { SimpleGrid } from "@chakra-ui/react";

import InitiativeCard from "@/components/cards/initiative-card";

const Initiatives = () => {
  return (
    <>
      <SimpleGrid columns={3} spacing={8}>
        <InitiativeCard
          name={"Lillian Kanjadza"}
          organisation={"Agronet Global Inc."}
          avatarImage={"/images/initiatives/lillian-kanjadza.jpeg"}
          initiativeImage={"/images/initiatives/agronet-initiative.png"}
          excerpt={
            "Lillian stands as a dedicated and visionary sustainable serial entrepreneur, driven by her mission to foster positive social change. At present, she leads with distinction as the founder of both Lillie Organics and Agronet Global Inc."
          }
        />
        <InitiativeCard
          name={"Kajo Stelter"}
          organisation={"Welt Weit e.V."}
          avatarImage={"/images/initiatives/kajo-stelter.jpeg"}
          initiativeImage={"/images/initiatives/welt-weit.png"}
          excerpt={
            "Kajo could aptly be characterized as a catalyst for positive change. Collaborating with Welt Weit e.V., he serves as the guiding force behind an umbrella organization that streamlines funding for various initiatives."
          }
        />
        <InitiativeCard
          name={"Nolbert Muhumudza"}
          organisation={"Giving Hope Foundation"}
          avatarImage={"/images/initiatives/nolbert-muhumuza.jpeg"}
          initiativeImage={"/images/initiatives/giving-hope-foundation.png"}
          excerpt={
            "Nolbert is an inspirational social entrepreneur and a mentor for youth and sustainable development, transforming the lives of thousands of community members in Africa. His impact is profound and far-reaching."
          }
        />
      </SimpleGrid>
    </>
  );
};

export default Initiatives;
