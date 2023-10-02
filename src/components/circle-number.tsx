import type { BoxProps } from "@chakra-ui/react";
import { Box, Text } from "@chakra-ui/react";

export interface CircleNumberProps extends BoxProps {
  number: number;
}

const CircleNumber = (props: CircleNumberProps) => {
  const { number } = props;
  return (
    <>
      <Box
        sx={{
          w: 33,
          h: 33,
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "3px solid",
          color: "secondary",
        }}
      >
        <Text fontWeight={900}>{number}</Text>
      </Box>
    </>
  );
};

export default CircleNumber;
