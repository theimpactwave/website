import { Box, BoxProps, Text } from "@chakra-ui/react";

export interface CircleNumberProps extends BoxProps {
  number: number;
}

const CircleNumber = (props: CircleNumberProps) => {
  const { number, ...rest } = props;
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
          color: "brand",
        }}
      >
        <Text fontWeight={900}>{number}</Text>
      </Box>
    </>
  );
};

export default CircleNumber;
