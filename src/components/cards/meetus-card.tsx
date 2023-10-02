import type { CardProps } from "@chakra-ui/react";
import { Box, Card, CardBody, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import type { ReactElement, ReactNode } from "react";

export interface MeetusCardProps extends Omit<CardProps, "content"> {
  image: string;
  date: string;
  header: string;
  content: string | ReactElement | ReactNode;
}

const MeetusCard = (props: MeetusCardProps) => {
  const { header, content, image, date, ...rest } = props;
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
            <Image src={image} alt={""} width={100} height={100} />
          </Box>
          <Heading as={"h2"} fontSize={[26, 28, 30]} mb={4} fontWeight={400}>
            {header}
          </Heading>
          <Text color={"brand"} fontWeight={700} mb={4}>
            {date}
          </Text>
          {content}
        </CardBody>
      </Card>
    </>
  );
};

export default MeetusCard;
