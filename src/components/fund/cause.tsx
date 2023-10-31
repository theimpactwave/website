import { Button, SimpleGrid, Text } from "@chakra-ui/react";
import type { ReactElement } from "react";
import { useState } from "react";

interface FundCauseProps {
  name: string;
  icon?: ReactElement;
  onActive: (cause: string, active: boolean) => void;
}

const FundCause = (props: FundCauseProps) => {
  const { name, onActive } = props;
  const [clicked, setClicked] = useState<boolean>(false);

  const onButtonClickHandler = (name: string) => {
    setClicked((prevState) => {
      const newState: boolean = !prevState;
      onActive(name, newState);
      return newState;
    });
  };

  return (
    <>
      <Button
        variant={clicked ? "solid" : "outline"}
        colorScheme={"secondaryScheme"}
        isActive={clicked}
        onClick={() => {
          onButtonClickHandler(name);
        }}
      >
        <Text as={"span"}>{name}</Text>
      </Button>
    </>
  );
};

type FundCausesType = { name: string; active?: boolean };

interface FundCausesProps {
  causes: FundCausesType[];
  onChange: (causes: FundCausesType[]) => void;
}

const FundCauses = (props: FundCausesProps) => {
  const { causes, onChange } = props;
  const [, setCausesState] = useState<FundCausesType[] | []>([]);

  const onActiveHandler = (name: string, active: boolean) => {
    setCausesState((prevState: FundCausesType[] | []) => {
      let causes: FundCausesType[] | [] = [];
      const index: number = prevState.findIndex(
        (cause: FundCausesType) => cause.name === name,
      );
      if (index !== -1) {
        const items = [...prevState];
        const item = { ...items[index] };
        item.active = active;
        items[index] = item;
        causes = items;
      } else {
        causes =
          prevState.length === 0
            ? [{ name: name, active: active }]
            : [...prevState, { name: name, active: active }];
      }

      onChange(causes);
      return causes;
    });
  };

  return (
    <>
      <SimpleGrid columns={[1, 1, 3]} spacing={8}>
        {causes.map((cause: FundCausesType, index: number) => (
          <FundCause
            key={`cause-${index}`}
            name={cause.name}
            onActive={onActiveHandler}
          />
        ))}
      </SimpleGrid>
    </>
  );
};

export { FundCause, FundCauses, type FundCausesType };
