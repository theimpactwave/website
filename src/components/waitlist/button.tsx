"use client";

import type { ButtonProps } from "@chakra-ui/react";
import { Button, useDisclosure } from "@chakra-ui/react";
import { useEffect } from "react";

import WaitlistModal from "@/components/waitlist/modal";
import { triggerWaitlist } from "@/utils/trigger-waitlist";

export interface WaitlistButtonProps extends ButtonProps {}

const WaitlistButton = (props: WaitlistButtonProps) => {
  const { ...rest } = props;
  const { isOpen, onClose, onOpen } = useDisclosure();

  const onButtonClickHandler = () => {
    triggerWaitlist();
  };

  useEffect(() => {
    const onHashChangeHandler = (event: HashChangeEvent) => {
      event.preventDefault();
      if (/\/?#waitlist/gi.test(window.location.href)) {
        window.history.pushState({}, "", "/");
        onOpen();
      }
    };
    if (typeof window !== "undefined") {
      if (/\/?#waitlist/gi.test(window.location.href)) {
        window.history.replaceState({}, "", "/");
        window.dispatchEvent(new HashChangeEvent("hashchange"));
      }
    }
    window.addEventListener("hashchange", onHashChangeHandler);
    return () => {
      window.removeEventListener("hashchange", onHashChangeHandler);
    };
  }, [onOpen]);

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
