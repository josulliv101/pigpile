import dynamic from "next/dynamic";
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
import {
  selectChesterAnimation,
  selectPaymentState,
  selectUser,
  FORM_STEPS,
} from "store";
import { useAppSelector, useLabelBundle } from "hooks";
import { GoalCountUp } from "./GoalCountUp";
import useDonationQuantityOptions from "./useDonationQuantityOptions";

const DonationModalLazy = dynamic(() => import("./DonationModal"), {
  ssr: false,
});

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
  const [userRequestsCustomAmount, setUserRequestsCustomAmount] =
    useState(false);
  const [numberOfUnits, setNumberOfUnits] = useState<number | null>(null);
  const [tip, setTip] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getLabel, getLabelForQuantity } = useLabelBundle();
  const quantityOptions = useDonationQuantityOptions(options, pricePerUnit);
  const {
    userTheme: { bgImage, bgPosition },
  } = useTheme();
  const landscapeImage = bgImage;

  const handleCustomBtnClick = () => {
    setUserRequestsCustomAmount(true);
    onOpen();
  };

  const onDonateQuantityBtnClick = useCallback(
    (payload: number | string | null) => {
      if (payload === "custom") {
        return handleCustomBtnClick();
      } else if (typeof Number(payload) === "number") {
        setNumberOfUnits(Number(payload));
        onOpen();
      }
    },
    []
  );

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

  const handleSubmitAdditionalInfo = useCallback(
    (donation: Partial<Donation>) => {
      onAdditionalInfoSubmit({
        campaignId,
        quantity: numberOfUnits ?? 0,
        tip,
        userId: user?.uid ?? "",
        ...donation,
      });
      handleCloseModal();
    },
    [campaignId, numberOfUnits, tip, user?.uid]
  );

  const getDonationLabel = useCallback(
    (n) => getLabelForQuantity({ one: "item", many: "items" }, n),
    []
  );
  const handleShowCustomInputField = useCallback(
    () => setUserRequestsCustomAmount(true),
    []
  );
  const handleCloseCustomInputField = useCallback(
    () => setUserRequestsCustomAmount(false),
    []
  );

  return (
    <Background
      bgImage={landscapeImage}
      bgPosition={bgPosition}
      h="500px"
      sx={{
        "@media screen and (min-height: 200px) and (max-height: 484px)": {
          h: 480,
        },
      }}
      variant="gradient"
    >
      <DonationModalLazy
        activeFormStep={activeFormStep}
        beneficiary={beneficiary}
        getLabel={getDonationLabel}
        isOpen={isOpen}
        landscapeImage={landscapeImage}
        numberOfUnits={numberOfUnits}
        onChangeCustomInputField={handleChangeCustomInputField}
        onChangeTip={handleChangeTip}
        onCloseCustomInputField={handleCloseCustomInputField}
        onCloseModal={handleCloseModal}
        onShowCustomInputField={handleShowCustomInputField}
        onSubmitAdditionalInfo={handleSubmitAdditionalInfo}
        onSubmitDonation={handleSubmitDonation}
        pricePerUnit={pricePerUnit}
        tip={tip}
        userRequestsCustomAmount={userRequestsCustomAmount}
      />
      <Container
        as={Center}
        color="white"
        flexDirection="column"
        h="full"
        justifyContent="flex-start"
        pos="relative"
        pt={{ base: "90px", md: "120px" }}
      >
        <Heading
          fontSize="1.6rem"
          fontWeight="500"
          mb={{ base: 6, md: 3 }}
          noOfLines={{ base: 10, md: 5 }}
          size={{ base: "md", md: "lg" }}
          textAlign="center"
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
          fontWeight="normal"
          mb={{ base: 6, sm: 0 }}
          size={{ base: "sm", md: "md" }}
          textAlign="center"
        >
          {getLabel("Select a donation amount below or choose a")}{" "}
          <Button
            _active={{ color: "inherit" }}
            _focusVisible={{ outlineColor: "white" }}
            _hover={{ textDecoration: "none", bgColor: "blackAlpha.300" }}
            borderBottom="1px rgba(255,255,255,.7) dashed"
            borderRadius="none"
            color="gray.50"
            fontSize={{ base: "1rem", md: "1.25rem" }}
            fontWeight="normal"
            onClick={handleCustomBtnClick}
            pl="1"
            variant="link"
          >
            {getLabel("custom amount")}.
          </Button>
        </Heading>
        <MoreButtons
          mt={{ base: "3", sm: "12" }}
          onButtonClick={onDonateQuantityBtnClick}
          options={quantityOptions}
        />
        <AbsoluteCenter top={{ base: "75%", md: "80%" }}>
          <Chester
            animationType={chesterAnimation}
            sx={{
              "@media screen and (min-height: 200px) and (max-height: 484px)": {
                transform: "scale(.8)",
              },
            }}
          />
        </AbsoluteCenter>
        {!!currentAmount && !!goalAmount && (
          <GoalCountUp
            currentAmount={currentAmount}
            goalAmount={goalAmount}
          />
        )}
      </Container>
    </Background>
  );
};

export default Hero;
