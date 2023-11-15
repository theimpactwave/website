import type { CardProps } from "@chakra-ui/react";
import { Box, Card, CardBody, Text } from "@chakra-ui/react";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

import SubHeading from "@/components/sub-heading";

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
            <Image src={icon} alt={""} width={100} height={100} />
          </Box>
          <SubHeading center>{header}</SubHeading>
          <Text textAlign={"center"} fontWeight={500}>
            {content}
          </Text>
        </CardBody>
      </Card>
    </>
  );
};

export default TeaserCard;
