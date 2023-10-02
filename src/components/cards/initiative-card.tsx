import type { CardProps } from "@chakra-ui/react";
import { Box, Card, CardBody, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

export interface InitiativeCardProps extends Omit<CardProps, "content"> {
  avatarImage: string;
  initiativeImage: string;
  name: string;
  organisation: string;
  excerpt: string;
}

const InitiativeCard = (props: InitiativeCardProps) => {
  const { name, organisation, avatarImage, initiativeImage, excerpt, ...rest } =
    props;
  return (
    <>
      <Card variant={"outline"} {...rest}>
        <CardBody>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            width={"100%"}
            mb={4}
            sx={{
              "& img": {
                borderRadius: "50%",
              },
            }}
          >
            <Image src={avatarImage} alt={name} width={100} height={100} />
          </Box>
          <Heading
            as={"h2"}
            textAlign={"center"}
            fontSize={[26, 28, 30]}
            mb={1}
            fontWeight={400}
          >
            {name}
          </Heading>
          <Text
            textAlign={"center"}
            color={"brand"}
            fontSize={14}
            fontWeight={700}
            mb={4}
          >
            {organisation}
          </Text>
          <Box
            display={"flex"}
            position={"relative"}
            justifyContent={"center"}
            alignItems={"center"}
            width={"100%"}
            mb={8}
            sx={{
              "& img": {
                position: "relative !important",
                height: "33px !important",
                width: "auto !important",
                px: 2,
              },
            }}
          >
            <Image
              src={initiativeImage}
              alt={name}
              layout={"fill"}
              objectFit={"cover"}
              objectPosition={"center"}
            />
          </Box>
          <Text mb={4}>{excerpt}</Text>
        </CardBody>
      </Card>
    </>
  );
};

export default InitiativeCard;
