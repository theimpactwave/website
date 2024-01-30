import type { CardProps, LinkBoxProps } from "@chakra-ui/react";
import {
  Box,
  Button,
  Card,
  CardBody,
  Heading,
  LinkBox,
  LinkOverlay,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import type { ReactElement, ReactNode } from "react";

export interface MeetusCardProps extends Omit<CardProps, "content"> {
  link: string;
  linkCaption?: string;
  image: string;
  date: string;
  header: string;
  content?: string | ReactElement | ReactNode;
  linkBoxProps?: LinkBoxProps;
  current?: boolean;
  reduced?: boolean;
}

const MeetusCard = (props: MeetusCardProps) => {
  const {
    link,
    linkCaption = undefined,
    header,
    content = undefined,
    image,
    date,
    linkBoxProps = undefined,
    current = false,
    reduced = false,
    ...rest
  } = props;
  return (
    <LinkBox height={"100%"} {...linkBoxProps}>
      <Card
        variant={"outline"}
        height={"100%"}
        bg={current ? "rgba(255, 255, 255, .3)" : undefined}
        border={current ? "2px solid" : "1px solid"}
        borderColor={current ? "primary" : "tertiary"}
        {...rest}
      >
        <CardBody>
          <LinkOverlay href={link}>
            <Stack
              as={"span"}
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"flex-start"}
              spacing={4}
            >
              <Box
                as={"span"}
                flex={current ? "0 0 100px" : "0 0 50px"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                width={"100%"}
                sx={{
                  "& img": {
                    borderRadius: "50%",
                  },
                }}
              >
                <Image
                  src={image}
                  alt={""}
                  width={current ? 100 : 50}
                  height={current ? 100 : 50}
                />
              </Box>
              <Box as={"span"} flex={1}>
                <Heading
                  as={"h2"}
                  fontSize={reduced ? 18 : [18, 20, 22]}
                  mb={1}
                  fontWeight={current ? 700 : 500}
                >
                  {header}
                </Heading>
                <Text
                  as={"span"}
                  color={"brand"}
                  fontSize={reduced ? 16 : undefined}
                  fontWeight={700}
                >
                  {date}
                </Text>
              </Box>
            </Stack>
            {content && (
              <Box
                as={"span"}
                mt={4}
                sx={{ "& > *": { fontSize: [16, 16, 14] } }}
              >
                {content}
              </Box>
            )}
          </LinkOverlay>
          {current && (
            <NextLink href={link} title={header}>
              <Button
                as={"span"}
                mt={8}
                width={"100%"}
                variant={"solid"}
                colorScheme={"brandScheme"}
                minW={140}
              >
                {linkCaption ?? "Link to event"}
              </Button>
            </NextLink>
          )}
        </CardBody>
      </Card>
    </LinkBox>
  );
};

export default MeetusCard;
