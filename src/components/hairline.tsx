import type { BoxProps } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

export interface HairlineProps extends BoxProps {
  reverse?: boolean;
}

const Hairline = (props: HairlineProps) => {
  const { reverse = false, ...rest } = props;

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "1px",
          border: "1px solid",
          borderColor: reverse
            ? "rgba(255, 255, 255, .25)"
            : "rgba(0, 0, 0, .05)",
          mb: 8,
        }}
        {...rest}
      />
    </>
  );
};

export default Hairline;
