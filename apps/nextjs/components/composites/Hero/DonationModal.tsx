import { Campaign, Donation } from "@josulliv101/types";
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
  getLabel: (n: number | null) => string;
  landscapeImage: string;
  numberOfUnits: number | null;
  onCloseModal: () => void;
  onChangeTip: (n: number) => void;
  onChangeCustomInputField: (n: number) => void;
  onCloseCustomInputField: () => void;
  onShowCustomInputField: () => void;
  onSubmitDonation: () => void;
  onSubmitAdditionalInfo: (d: Partial<Donation>) => void;
  pricePerUnit: number;
  tip: number;
  userRequestsCustomAmount: boolean;
}

const DonationModal: React.FC<Props> = ({
  activeFormStep,
  beneficiary,
  landscapeImage,
  isOpen,
  getLabel,
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
    <Modal
      isOpen={isOpen}
      onClose={onCloseModal}
      size={{ base: "full", md: "md" }}
    >
      <ModalOverlay />
      <ModalContent
        bgImage={landscapeImage}
        bgPosition="27% 50%"
        bgSize="cover"
        minH="640px"
        mt="10%"
      >
        <ModalHeader
          mb="4"
          mr="6"
          position="relative"
          top="-4px"
        >
          {beneficiary}
        </ModalHeader>
        <ModalCloseButton
          mr="12px"
          mt={{ base: "2px", md: "4px" }}
        />
        <ModalBody pb="6">
          {activeFormStep === FORM_STEPS.Donate && (
            <DonationForm
              bgColor="transparent"
              getLabel={getLabel}
              numberOfUnits={numberOfUnits}
              onChangeCustomInputField={onChangeCustomInputField}
              onChangeTip={onChangeTip}
              onCloseCustomInputField={onCloseCustomInputField}
              onShowCustomInputField={onShowCustomInputField}
              onSubmit={onSubmitDonation}
              p="0"
              pricePerUnit={pricePerUnit}
              showCustomInputField={userRequestsCustomAmount || numberOfUnits === null}
              tip={tip}
            />
          )}
          {activeFormStep === FORM_STEPS.AdditionalInfo && (
            <EmojiForm
              bgColor="transparent"
              onSubmit={onSubmitAdditionalInfo}
              p="0"
            />
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default DonationModal;
