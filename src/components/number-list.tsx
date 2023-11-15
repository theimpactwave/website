import { Stack, Text } from "@chakra-ui/react";
import type { ReactElement } from "react";

import CircleNumber from "@/components/circle-number";

export type NumberListItem = {
  number?: number;
  caption: string | ReactElement;
};
export interface NumberListProps {
  items: NumberListItem[];
}

const NumberList = (props: NumberListProps) => {
  const { items } = props;
  return (
    <Stack direction={"column"} gap={5}>
      {items.map((item: NumberListItem, index: number) => (
        <Stack
          direction={"row"}
          alignItems={"baseline"}
          spacing={4}
          key={`number-list-${index}`}
        >
          <CircleNumber number={item?.number || index + 1} />
          <Text flex={1} fontSize={20} fontWeight={700}>
            {item.caption}
          </Text>
        </Stack>
      ))}
    </Stack>
  );
};

export default NumberList;
