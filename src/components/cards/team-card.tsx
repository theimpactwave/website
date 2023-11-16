import type { CardProps } from "@chakra-ui/react";
import {
  Box,
  Card,
  CardBody,
  Heading,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import Image from "next/image";
import type { ReactElement, ReactNode } from "react";

export interface TeamCardProps extends Omit<CardProps, "content"> {
  link: string;
  image: string;
  name: string;
  content?: string | ReactElement | ReactNode;
  minimal?: boolean;
}

const TeamCard = (props: TeamCardProps) => {
  const {
    link,
    name,
    content = undefined,
    image,
    minimal = false,
    ...rest
  } = props;

  const Avatar = () => {
    return (
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        width={"100%"}
        mb={4}
        sx={{
          "& img": {
            borderRadius: "50%",
            filter: "saturate(0)",
          },
        }}
      >
        <Image src={image} alt={""} width={100} height={100} />
      </Box>
    );
  };

  const Name = () => {
    return (
      <Heading
        as={"h2"}
        fontSize={[24, 26, 28]}
        mb={4}
        fontWeight={500}
        textAlign={"center"}
      >
        {name}
      </Heading>
    );
  };

  return minimal ? (
    <LinkBox height={"100%"}>
      <LinkOverlay href={link}>
        <Avatar />
      </LinkOverlay>
    </LinkBox>
  ) : (
    <LinkBox height={"100%"}>
      <Card variant={"outline"} height={"100%"} {...rest}>
        <CardBody>
          <LinkOverlay href={link}>
            <Avatar />
            <Name />
            {content}
          </LinkOverlay>
        </CardBody>
      </Card>
    </LinkBox>
  );
};

export default TeamCard;
