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

export interface TeaserCardProps extends CardProps {
  icon: StaticImport;
  header: string;
  content: string;
}

const TeaserCard = (props: TeaserCardProps) => {
  const { header, content, icon, ...rest } = props;
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
          >
            <Image src={icon} alt={""} width={50} height={50} />
          </Box>
          <Heading as={"h2"} fontSize={32} mb={4} fontWeight={400}>
            {header}
          </Heading>
          <Text>{content}</Text>
        </CardBody>
      </Card>
    </>
  );
};

export default TeaserCard;
