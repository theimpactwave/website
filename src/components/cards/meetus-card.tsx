import type { CardProps } from "@chakra-ui/react";
import {
  Box,
  Card,
  CardBody,
  Heading,
  LinkBox,
  LinkOverlay,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import type { ReactElement, ReactNode } from "react";

export interface MeetusCardProps extends Omit<CardProps, "content"> {
  link: string;
  image: string;
  date: string;
  header: string;
  content: string | ReactElement | ReactNode;
}

const MeetusCard = (props: MeetusCardProps) => {
  const { link, header, content, image, date, ...rest } = props;
  return (
    <LinkBox height={"100%"}>
      <Card variant={"outline"} height={"100%"} {...rest}>
        <CardBody>
          <LinkOverlay href={link}>
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
              <Image src={image} alt={""} width={100} height={100} />
            </Box>
            <Heading
              as={"h2"}
              fontSize={[24, 26, 28]}
              mb={4}
              fontWeight={500}
              textAlign={"center"}
            >
              {header}
            </Heading>
            <Text color={"brand"} fontWeight={700} mb={4}>
              {date}
            </Text>
            {content}
          </LinkOverlay>
        </CardBody>
      </Card>
    </LinkBox>
  );
};

export default MeetusCard;
