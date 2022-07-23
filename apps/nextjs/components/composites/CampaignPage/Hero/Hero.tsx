import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DonationForm,
  EmojiForm,
  MoreButtons,
  MORE_BUTTONS_BACK_ID,
} from "@josulliv101/composites";
import {
  AbsoluteCenter,
  Background,
  Button,
  Chester,
  Center,
  Container,
  CountUpBox,
  Heading,
  Progress,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useTheme,
} from "@josulliv101/core";
import { useLabelBundle } from "@josulliv101/labelbundles";
import { formatNumber } from "@josulliv101/formatting";
import {
  completeDonation,
  paymentSlice,
  selectChesterAnimation,
  selectPaymentState,
  FORM_STEPS,
} from "store";
// import { useLabelBundle } from "../../../../hooks";

interface HeroProps {
  beneficiary: string;
}

export const options = [
  { label: "2 pairs", value: 2, price: 3 },
  { label: "4 pairs", value: 4, price: 6 },
  { label: "6 pairs", value: 6, price: 9 },
  { label: "12 pairs", value: 12, price: 18 },
  // { label: "12 pairs", value: 12 },
  { label: "back", value: MORE_BUTTONS_BACK_ID },
  { label: "18 pairs", value: 18, price: 27 },
  { label: "24 pairs", value: 24, price: 36 },
  { label: "48 pairs", value: 48, price: 72 },
  { label: "custom", value: "custom" },
];

const Hero = ({ beneficiary }): JSX.Element => {
  const dispatch = useDispatch();
  const {
    userTheme: { bgImage },
  } = useTheme();
  const chesterAnimation = useSelector(selectChesterAnimation());
  const { activeFormStep } = useSelector(selectPaymentState());
  // const foo = useChesterAnimation();
  const landscapeImage = `url(${bgImage})`;

  const { getLabel, getLabelForQuantity } = useLabelBundle();
  const [userRequestsCustomAmount, setUserRequestsCustomAmount] =
    useState(false);
  const [numberOfUnits, setNumberOfUnits] = useState<number | null>(null);
  const [tip, setTip] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  console.log("chesterAnimation", chesterAnimation);
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

  const handleSubmitAdddditionalInfo = () => {
    dispatch(
      completeDonation({
        campaignId: "somerville-homeless-coalition",
        displayName: "Joe",
        emoji: "😀",
      })
    );
    handleCloseModal();
  };

  return (
    <Background
      bgImage={landscapeImage}
      bgPosition="20% 50%"
      variant="gradient"
      h="500px"
    >
      <Modal
        isOpen={isOpen}
        size={{ base: "full", md: "md" }}
        onClose={handleCloseModal}
      >
        <ModalOverlay />
        <ModalContent
          minH="640px"
          bgImage={landscapeImage}
          bgSize="cover"
          bgPosition="27% 50%"
          mt="10%"
        >
          <ModalHeader>{beneficiary}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb="6">
            {activeFormStep === FORM_STEPS.Donate && (
              <DonationForm
                bgColor="transparent"
                p="0"
                // paymentIntent={{}}
                itemsLabel={(n) => getLabelForQuantity("donationItems", n)}
                onChangeTip={handleChangeTip}
                onChangeCustomInputField={handleChangeCustomInputField}
                onCloseCustomInputField={() =>
                  setUserRequestsCustomAmount(false)
                }
                onShowCustomInputField={() => setUserRequestsCustomAmount(true)}
                onSubmit={handleSubmitDonation}
                numberOfUnits={numberOfUnits}
                pricePerUnit={1.5}
                tip={tip}
                showCustomInputField={
                  userRequestsCustomAmount || numberOfUnits === null
                }
              />
            )}
            {activeFormStep === FORM_STEPS.AdditionalInfo && (
              <EmojiForm
                p="0"
                bgColor="transparent"
                onSubmit={handleSubmitAdddditionalInfo}
              />
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
      <Container
        pos="relative"
        as={Center}
        // maxW="full"
        h="full"
        flexDirection="column"
        color="white"
        justifyContent="flex-start"
        pt={{ base: "90px", md: "120px" }}
      >
        <Heading
          align="center"
          size="lg"
          fontSize="1.6rem"
          fontWeight="500"
          mb="3"
          noOfLines={{ base: undefined, md: "5" }}
        >
          {getLabel(
            "campaign.heroTitle",
            formatNumber(1000),
            getLabelForQuantity("donationItems", 1000),
            beneficiary
          )}
        </Heading>
        <Heading
          display={{ base: "none", md: "block" }}
          align="center"
          size="md"
          fontWeight="normal"
        >
          Select a donation amount below or choose a{" "}
          <Button
            as="a"
            variant="link"
            color="gray.50"
            borderBottom="1px rgba(255,255,255,.7) dashed"
            onClick={handleCustomBtnClick}
          >
            custom amount
          </Button>
          .
        </Heading>
        <MoreButtons
          mt={{ base: "3", sm: "12" }}
          options={options}
          onButtonClick={onClick}
          // onCustomButtonClick={onCustomClick}
          moreTooltipLabel="more options"
        />
        <AbsoluteCenter top={{ base: "75%", md: "80%" }}>
          <Chester animationType={chesterAnimation} />
        </AbsoluteCenter>
        <CountUpBox
          minW={{ base: "120px", md: "160px" }}
          bgColor="rgb(203 211 183 / 80%)"
          pos="absolute"
          bottom="10px"
          right={{ base: "10px", md: "20px" }}
          countUpValue={894}
          limit={1000}
          label="894 of 1K socks"
          showLabelOnEnd
        >
          <Progress pos="relative" top="10px" w="full" h="4px" value={80} />
        </CountUpBox>
      </Container>
    </Background>
  );
};

export default Hero;
