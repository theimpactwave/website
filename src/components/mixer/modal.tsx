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

import Mixer from "@/components/mixer/mixer";

export interface MixerModalProps extends Omit<ModalProps, "children"> {}

const MixerModal = (props: MixerModalProps) => {
  const { isOpen, onClose } = props;

  return (
    <Modal
      size={"full"}
      isOpen={isOpen}
      onClose={onClose}
      closeOnOverlayClick={true}
      closeOnEsc={true}
      motionPreset={"scale"}
      blockScrollOnMount
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader pt={10}>Demo</ModalHeader>
        <ModalCloseButton />
        <ModalBody mb={10}>
          <Mixer />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default MixerModal;
