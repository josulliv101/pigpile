import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MoreButtons, MORE_BUTTONS_BACK_ID } from "@josulliv101/composites";
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
import { useLabelBundle } from "@josulliv101/labelbundles";
import { formatNumber } from "@josulliv101/formatting";
import {
  addCampaignDonationThunk,
  paymentSlice,
  selectChesterAnimation,
  selectPaymentState,
  selectUser,
  FORM_STEPS,
} from "store";
import { GoalCountUp } from "./GoalCountUp";
import { DonationModal } from "./DonationModal";

interface HeroProps {
  beneficiary: string;
}

export const options = [
  { label: "2 pairs", value: 2, price: 3 },
  { label: "4 pairs", value: 4, price: 6 },
  { label: "6 pairs", value: 6, price: 9 },
  { label: "12 pairs", value: 12, price: 18 },
  { label: "back", value: MORE_BUTTONS_BACK_ID },
  { label: "18 pairs", value: 18, price: 27 },
  { label: "24 pairs", value: 24, price: 36 },
  { label: "48 pairs", value: 48, price: 72 },
  { label: "custom", value: "custom" },
];

const Hero = ({ campaignId, beneficiary, goalAmount, currentAmount }): JSX.Element => {
  const dispatch = useDispatch();
  const {
    userTheme: { bgImage },
  } = useTheme();
  const user = useSelector(selectUser());
  const chesterAnimation = useSelector(selectChesterAnimation());
  const { activeFormStep } = useSelector(selectPaymentState());
  const landscapeImage = `url(${bgImage})`;
  const { getLabel, getLabelForQuantity } = useLabelBundle();
  const [userRequestsCustomAmount, setUserRequestsCustomAmount] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);
  const [numberOfUnits, setNumberOfUnits] = useState<number | null>(null);
  const [tip, setTip] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    setTimeout(() => setStartAnimation(true), 7000);
  }, []);

  const handleCustomBtnClick = () => {
    setUserRequestsCustomAmount(true);
    onOpen();
  };

  const onClick = (payload: number | string | null) => {
    console.log("payload", payload);
    if (payload === "custom") {
      return handleCustomBtnClick();
    } else if (typeof Number(payload) === "number") {
      setNumberOfUnits(Number(payload));
      onOpen();
    }
  };

  const handleCloseModal = () => {
    setUserRequestsCustomAmount(false);
    setNumberOfUnits(null);
    dispatch(paymentSlice.actions.setActiveFormStep(FORM_STEPS.Donate));
    onClose();
  };

  const handleChangeCustomInputField = (n) => {
    setNumberOfUnits(n);
    setUserRequestsCustomAmount(false);
  };

  const handleChangeTip = (n) => {
    setTip(Number(n));
  };

  const handleSubmitDonation = () => {
    dispatch(paymentSlice.actions.setActiveFormStep(FORM_STEPS.AdditionalInfo));
  };

  const handleSubmitAdditionalInfo = (donation, ...rest) => {
    console.log("handleSubmitAdddditionalInfo", { numberOfUnits, tip, user, donation }, ...rest);
    dispatch(
      addCampaignDonationThunk({
        campaignId,
        quantity: numberOfUnits,
        tip,
        userId: user?.uid,
        ...donation,
      })
    );
    handleCloseModal();
  };

  return (
    <Background bgImage={landscapeImage} bgPosition="20% 50%" variant="gradient" h="500px">
      <DonationModal
        activeFormStep={activeFormStep}
        beneficiary={beneficiary}
        landscapeImage={landscapeImage}
        isOpen={isOpen}
        itemsLabel={(n) => getLabelForQuantity("donationItems", n)}
        numberOfUnits={numberOfUnits}
        onChangeCustomInputField={handleChangeCustomInputField}
        onChangeTip={handleChangeTip}
        onCloseCustomInputField={() => setUserRequestsCustomAmount(false)}
        onCloseModal={handleCloseModal}
        onShowCustomInputField={() => setUserRequestsCustomAmount(true)}
        onSubmitDonation={handleSubmitDonation}
        onSubmitAdditionalInfo={handleSubmitAdditionalInfo}
        tip={tip}
        userRequestsCustomAmount={userRequestsCustomAmount}
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
          align="center"
          size={{ base: "md", md: "lg" }}
          fontSize="1.6rem"
          fontWeight="500"
          mb={{ base: "6", md: "3" }}
          noOfLines={{ base: undefined, md: "5" }}
        >
          {getLabel(
            "campaign.heroTitle",
            formatNumber(goalAmount),
            getLabelForQuantity("donationItems", goalAmount),
            beneficiary
          )}
        </Heading>
        <Heading
          display={{ base: "block", sm: "block" }}
          align="center"
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
            _hover={{ textDecoration: "none", bgColor: "blackAlpha.300" }}
            pl="1"
            borderRadius="none"
            _active={{ color: "inherit" }}
          >
            {getLabel("custom amount")}.
          </Button>
        </Heading>
        <MoreButtons mt={{ base: "3", sm: "12" }} options={options} onButtonClick={onClick} />
        <AbsoluteCenter top={{ base: "75%", md: "80%" }}>
          <Chester animate={startAnimation} animationType={chesterAnimation} />
        </AbsoluteCenter>
        {!!currentAmount && !!goalAmount && (
          <GoalCountUp currentAmount={currentAmount} goalAmount={goalAmount} />
        )}
      </Container>
    </Background>
  );
};

export default Hero;
