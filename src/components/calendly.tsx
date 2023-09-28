"use client";

import type { ButtonProps, ModalProps } from "@chakra-ui/react";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import { InlineWidget } from "react-calendly";

import CalendlyIcon from "@/assets/calendly.svg";

export interface CalendlyProps extends ButtonProps {
  modalProps?: Omit<ModalProps, "children" | "isOpen" | "onClose">;
}

const Calendly = (props: CalendlyProps): JSX.Element => {
  const { modalProps, ...rest } = props;
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <Button
        variant={"outline"}
        colorScheme={"blue"}
        leftIcon={<Image src={CalendlyIcon} alt={""} width={20} height={20} />}
        onClick={onOpen}
        {...rest}
      >
        Calendly
      </Button>
      <Modal
        size={["md", "lg", "xl"]}
        isOpen={isOpen}
        onClose={onClose}
        closeOnOverlayClick={true}
        closeOnEsc={true}
        motionPreset={"scale"}
        blockScrollOnMount
        {...modalProps}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader pt={10}>Book a meeting with us:</ModalHeader>
          <ModalCloseButton />
          <ModalBody mb={10}>
            <InlineWidget url="https://calendly.com/theimpactwave" />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Calendly;
