import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  ModalProps,
} from "@pigpile/core";
import { DonationForm } from "@pigpile/composites";

// interface ModalProps {}

export const DonationModal = ({
  numberOfUnits,
  tip,
  showCustomInputField,
  isOpen,
  onClose,
  onCloseCustomInputField,
  onChangeCustomInputField,
  onShowCustomInputField,
  onChangeTip,
}: ModalProps): JSX.Element => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb="6">
          <DonationForm
            bgColor="transparent"
            p="0"
            paymentIntent={{}}
            onChangeTip={(d) => console.log(d)}
            onChangeCustomInputField={onChangeCustomInputField}
            onCloseCustomInputField={onCloseCustomInputField}
            onShowCustomInputField={onShowCustomInputField}
            onSubmit={(d) => console.log(d)}
            numberOfUnits={numberOfUnits}
            tip={tip}
            showCustomInputField={
              showCustomInputField || numberOfUnits === null
            }
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
