import { Campaign } from "@josulliv101/types";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@josulliv101/core";
import { DonationForm, EmojiForm } from "@josulliv101/composites";
import { FORM_STEPS } from "store";

interface Props extends Pick<Campaign, "beneficiary"> {
  activeFormStep: FORM_STEPS;
  isOpen: boolean;
  itemsLabel: (n: number | null) => string;
  landscapeImage: string;
  numberOfUnits: number | null;
  onCloseModal: () => void;
  onChangeTip: () => void;
  onChangeCustomInputField: () => void;
  onCloseCustomInputField: () => void;
  onShowCustomInputField: () => void;
  onSubmitDonation: () => void;
  onSubmitAdditionalInfo: () => void;
  pricePerUnit: number;
  tip: number;
  userRequestsCustomAmount: boolean;
}

export const DonationModal: React.FC<Props> = ({
  activeFormStep,
  beneficiary,
  landscapeImage,
  isOpen,
  itemsLabel,
  numberOfUnits,
  onChangeCustomInputField,
  onChangeTip,
  onCloseCustomInputField,
  onCloseModal,
  onShowCustomInputField,
  onSubmitDonation,
  onSubmitAdditionalInfo,
  tip,
  pricePerUnit,
  userRequestsCustomAmount,
}) => {
  return (
    <Modal isOpen={isOpen} size={{ base: "full", md: "md" }} onClose={onCloseModal}>
      <ModalOverlay />
      <ModalContent
        minH="640px"
        bgImage={landscapeImage}
        bgSize="cover"
        bgPosition="27% 50%"
        mt="10%"
      >
        <ModalHeader position="relative" mr="6" top="-4px" mb="4">
          {beneficiary}
        </ModalHeader>
        <ModalCloseButton mr="12px" mt={{ base: "2px", md: "4px" }} />
        <ModalBody pb="6">
          {activeFormStep === FORM_STEPS.Donate && (
            <DonationForm
              bgColor="transparent"
              p="0"
              itemsLabel={itemsLabel}
              onChangeTip={onChangeTip}
              onChangeCustomInputField={onChangeCustomInputField}
              onCloseCustomInputField={onCloseCustomInputField}
              onShowCustomInputField={onShowCustomInputField}
              onSubmit={onSubmitDonation}
              numberOfUnits={numberOfUnits}
              pricePerUnit={pricePerUnit}
              tip={tip}
              showCustomInputField={userRequestsCustomAmount || numberOfUnits === null}
            />
          )}
          {activeFormStep === FORM_STEPS.AdditionalInfo && (
            <EmojiForm p="0" bgColor="transparent" onSubmit={onSubmitAdditionalInfo} />
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
