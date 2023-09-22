"use client";

import type { ButtonProps } from "@chakra-ui/react";
import { Button, useDisclosure } from "@chakra-ui/react";

import WaitlistModal from "@/components/waitlist/modal";

export interface WaitlistButtonProps extends ButtonProps {}

const WaitlistButton = (props: WaitlistButtonProps) => {
  const { ...rest } = props;
  const { isOpen, onClose, onOpen } = useDisclosure();

  const onButtonClickHandler = () => {
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
