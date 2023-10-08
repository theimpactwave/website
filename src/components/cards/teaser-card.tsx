import type { CardProps } from "@chakra-ui/react";
import { Box, Card, CardBody, Heading, Text } from "@chakra-ui/react";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

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
          <Heading
            as={"h2"}
            fontSize={[24, 26, 28]}
            mb={4}
            fontWeight={500}
            textAlign={"center"}
          >
            {header}
          </Heading>
          <Text>{content}</Text>
        </CardBody>
      </Card>
    </>
  );
};

export default TeaserCard;
