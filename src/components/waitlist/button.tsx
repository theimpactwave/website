"use client";

import { MouseEvent } from "react";
import WaitlistModal from "@/components/waitlist/modal";
import { Button, ButtonProps, useDisclosure } from "@chakra-ui/react";

export interface WaitlistButtonProps extends ButtonProps {}

const WaitlistButton = (props: WaitlistButtonProps) => {
  const { ...rest } = props;
  const { isOpen, onClose, onOpen } = useDisclosure();

  const onButtonClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    onOpen();
  };

  return (
    <>
      <Button
        variant={"outline"}
        colorScheme={"brandScheme"}
        onClick={onButtonClickHandler}
        {...rest}
      >
        Join our Waitlist
      </Button>
      <WaitlistModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default WaitlistButton;
