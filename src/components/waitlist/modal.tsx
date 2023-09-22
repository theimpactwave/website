"use client";

import type { ModalProps } from "@chakra-ui/react";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

import WaitlistForm from "@/components/waitlist/form";

export interface WaitlistModalProps extends Omit<ModalProps, "children"> {}

const WaitlistModal = (props: WaitlistModalProps): JSX.Element => {
  const { isOpen, onClose } = props;

  return (
    <Modal
      size={["md", "lg", "xl"]}
      isOpen={isOpen}
      onClose={onClose}
      closeOnOverlayClick={true}
      closeOnEsc={true}
      motionPreset={"scale"}
      blockScrollOnMount
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader pt={10}>Waitlist</ModalHeader>
        <ModalCloseButton />
        <ModalBody mb={10}>
          <WaitlistForm />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default WaitlistModal;
