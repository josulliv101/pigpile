import { useCallback, useState } from "react";
import { AddedDonation, Donation } from "@josulliv101/types";
import { MoreButtons } from "@josulliv101/composites";
import {
  AbsoluteCenter,
  Background,
  Button,
  Chester,
  Center,
  Container,
  Heading,
  useDisclosure,
  useTheme,
} from "@josulliv101/core";
import { formatNumber } from "@josulliv101/formatting";
import { selectChesterAnimation, selectPaymentState, selectUser, FORM_STEPS } from "store";
import { useAppSelector, useLabelBundle } from "hooks";
import { GoalCountUp } from "./GoalCountUp";
import { DonationModal } from "./DonationModal";
import useDonationQuantityOptions from "./useDonationQuantityOptions";

interface Props {
  beneficiary: string;
  campaignId: string;
  currentAmount: number;
  goalAmount: number;
  options: number[];
  pricePerUnit: number;
  onActiveFormStepChange: (s: FORM_STEPS) => void;
  onAdditionalInfoSubmit: (d: AddedDonation) => void;
}

const Hero: React.FC<Props> = ({
  campaignId,
  options = [],
  pricePerUnit = 0,
  beneficiary,
  goalAmount,
  currentAmount,
  onActiveFormStepChange,
  onAdditionalInfoSubmit,
}): JSX.Element => {
  const user = useAppSelector(selectUser());
  const chesterAnimation = useAppSelector(selectChesterAnimation());
  const { activeFormStep } = useAppSelector(selectPaymentState());
  const [userRequestsCustomAmount, setUserRequestsCustomAmount] = useState(false);
  const [numberOfUnits, setNumberOfUnits] = useState<number | null>(null);
  const [tip, setTip] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getLabel, getLabelForQuantity } = useLabelBundle();
  const quantityOptions = useDonationQuantityOptions(options, pricePerUnit);
  const {
    userTheme: { bgImage, bgPosition },
  } = useTheme();
  const landscapeImage = `url(${bgImage})`;

  const handleCustomBtnClick = () => {
    setUserRequestsCustomAmount(true);
    onOpen();
  };

  const onDonateQuantityBtnClick = useCallback((payload: number | string | null) => {
    if (payload === "custom") {
      return handleCustomBtnClick();
    } else if (typeof Number(payload) === "number") {
      setNumberOfUnits(Number(payload));
      onOpen();
    }
  }, []);

  const handleCloseModal = useCallback(() => {
    setUserRequestsCustomAmount(false);
    setNumberOfUnits(null);
    onActiveFormStepChange(FORM_STEPS.Donate);
    onClose();
  }, []);

  const handleChangeCustomInputField = useCallback((n) => {
    setNumberOfUnits(n);
    setUserRequestsCustomAmount(false);
  }, []);

  const handleChangeTip = useCallback((n) => {
    setTip(Number(n));
  }, []);

  const handleSubmitDonation = useCallback(() => {
    onActiveFormStepChange(FORM_STEPS.AdditionalInfo);
  }, []);

  const handleSubmitAdditionalInfo = useCallback((donation: Partial<Donation>) => {
    onAdditionalInfoSubmit({
      campaignId,
      quantity: numberOfUnits ?? 0,
      tip,
      userId: user?.uid ?? "",
      ...donation,
    });
    handleCloseModal();
  }, []);

  const getDonationLabel = useCallback(
    (n) => getLabelForQuantity({ one: "item", many: "items" }, n),
    []
  );
  const handleShowCustomInputField = useCallback(() => setUserRequestsCustomAmount(true), []);
  const handleCloseCustomInputField = useCallback(() => setUserRequestsCustomAmount(false), []);

  return (
    <Background bgImage={landscapeImage} bgPosition={bgPosition} variant="gradient" h="500px">
      <DonationModal
        activeFormStep={activeFormStep}
        beneficiary={beneficiary}
        landscapeImage={landscapeImage}
        isOpen={isOpen}
        getLabel={getDonationLabel}
        numberOfUnits={numberOfUnits}
        onChangeCustomInputField={handleChangeCustomInputField}
        onChangeTip={handleChangeTip}
        onCloseCustomInputField={handleCloseCustomInputField}
        onCloseModal={handleCloseModal}
        onShowCustomInputField={handleShowCustomInputField}
        onSubmitDonation={handleSubmitDonation}
        onSubmitAdditionalInfo={handleSubmitAdditionalInfo}
        tip={tip}
        userRequestsCustomAmount={userRequestsCustomAmount}
        pricePerUnit={pricePerUnit}
      />
      <Container
        pos="relative"
        as={Center}
        h="full"
        flexDirection="column"
        color="white"
        justifyContent="flex-start"
        pt={{ base: "90px", md: "120px" }}
      >
        <Heading
          size={{ base: "md", md: "lg" }}
          fontSize="1.6rem"
          fontWeight="500"
          mb={{ base: 6, md: 3 }}
          noOfLines={{ base: 10, md: 5 }}
        >
          {getLabel(
            "Help us donate {{amount}} {{itemType}} to {{org}}",
            formatNumber(goalAmount),
            getLabel("items"),
            beneficiary
          )}
        </Heading>
        <Heading
          display={{ base: "block", sm: "block" }}
          size={{ base: "sm", md: "md" }}
          fontWeight="normal"
          mb={{ base: 6, sm: 0 }}
        >
          {getLabel("Select a donation amount below or choose a")}{" "}
          <Button
            variant="link"
            color="gray.50"
            borderBottom="1px rgba(255,255,255,.7) dashed"
            onClick={handleCustomBtnClick}
            fontSize={{ base: "1rem", md: "1.25rem" }}
            fontWeight="normal"
            pl="1"
            borderRadius="none"
            _active={{ color: "inherit" }}
            _focusVisible={{ outlineColor: "white" }}
            _hover={{ textDecoration: "none", bgColor: "blackAlpha.300" }}
          >
            {getLabel("custom amount")}.
          </Button>
        </Heading>
        <MoreButtons
          mt={{ base: "3", sm: "12" }}
          options={quantityOptions}
          onButtonClick={onDonateQuantityBtnClick}
        />
        <AbsoluteCenter top={{ base: "75%", md: "80%" }}>
          <Chester animationType={chesterAnimation} />
        </AbsoluteCenter>
        {!!currentAmount && !!goalAmount && (
          <GoalCountUp currentAmount={currentAmount} goalAmount={goalAmount} />
        )}
      </Container>
    </Background>
  );
};

export default Hero;
