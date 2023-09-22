import { Box } from "@chakra-ui/react";

const Hairline = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "1px",
          border: "1px solid",
          borderColor: "rgba(255, 255, 255, .2)",
          mb: 8,
        }}
      />
    </>
  );
};

export default Hairline;
