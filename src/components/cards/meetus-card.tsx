import {
  Box,
  Card,
  CardBody,
  CardProps,
  Heading,
  Text,
} from "@chakra-ui/react";
import Image, { ImageProps } from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface MeetusCardProps extends CardProps {
  image: string;
  date: string;
  header: string;
  content: string;
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
                borderRadius: "50%"
              }
            }}
          >
            <Image src={image} alt={""} width={100} height={100} />
          </Box>
          <Heading as={"h2"} fontSize={32} mb={4} fontWeight={400}>
            {header}
          </Heading>
          <Text color={"brand"} fontWeight={700} mb={4}>{date}</Text>
          <Text>{content}</Text>
        </CardBody>
      </Card>
    </>
  );
};

export default MeetusCard;
