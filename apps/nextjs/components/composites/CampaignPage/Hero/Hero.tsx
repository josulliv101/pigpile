import { useState } from "react";
import {
  DonationForm,
  EmojiForm,
  MoreButtons,
  MORE_BUTTONS_BACK_ID,
} from "@pigpile/composites";
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
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  ModalProps,
} from "@pigpile/core";
import { useLabelBundle } from "../../../../hooks";

interface HeroProps {}

const landscapeImage =
  "url(https:/pigpile-next.firebaseapp.com/images/landscape.png)";

const mockPaymentIntent = {
  id: "pi_3LKoL2EIuGVvU2Me0PofWgHK",
  object: "payment_intent",
  amount: 5000,
  amount_capturable: 0,
  amount_details: { tip: {} },
  amount_received: 0,
  application: null,
  application_fee_amount: null,
  automatic_payment_methods: { enabled: true },
  canceled_at: null,
  cancellation_reason: null,
  capture_method: "automatic",
  charges: {
    object: "list",
    data: [],
    has_more: false,
    total_count: 0,
    url: "/v1/charges?payment_intent=pi_3LKoL2EIuGVvU2Me0PofWgHK",
  },
  client_secret: "pi_3LKoL2EIuGVvU2Me0PofWgHK_secret_a4zzST2DMrQEd6Q7OmtpYaCYa",
  confirmation_method: "automatic",
  created: 1657652500,
  currency: "usd",
  customer: null,
  description: "pigpile_donation",
  invoice: null,
  last_payment_error: null,
  livemode: false,
  metadata: {},
  next_action: null,
  on_behalf_of: null,
  payment_method: null,
  payment_method_options: {
    card: {
      installments: null,
      mandate_options: null,
      network: null,
      request_three_d_secure: "automatic",
    },
  },
  payment_method_types: ["card"],
  processing: null,
  receipt_email: null,
  review: null,
  setup_future_usage: null,
  shipping: null,
  source: null,
  statement_descriptor: null,
  statement_descriptor_suffix: null,
  status: "requires_payment_method",
  transfer_data: null,
  transfer_group: null,
};

const chesterAnimationProps = {};
export const options = [
  { label: "1 pair", value: 1 },
  { label: "2 pairs", value: 2 },
  { label: "3 pairs", value: 3 },
  { label: "6 pairs", value: 6 },
  { label: "12 pairs", value: 12 },
  { label: "back", value: MORE_BUTTONS_BACK_ID },
  { label: "18 pairs", value: 18 },
  { label: "24 pairs", value: 24 },
  { label: "48 pairs", value: 48 },
  { label: "custom", value: "custom" },
];

const Hero = ({ stepWithinWizard = 0 }): JSX.Element => {
  const { getLabel } = useLabelBundle();
  const [userRequestsCustomAmount, setUserRequestsCustomAmount] =
    useState(false);
  const [numberOfUnits, setNumberOfUnits] = useState<number | null>(null);
  const [tip, setTip] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

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
    onClose();
  };

  const handleChangeCustomInputField = (n) => {
    setNumberOfUnits(n);
    setUserRequestsCustomAmount(false);
  };

  const handleChangeTip = (n) => {
    setTip(n);
  };
  return (
    <Background
      bgImage={landscapeImage}
      bgPosition="20% 50%"
      variant="gradient"
      h="500px"
    >
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent
          minH="640px"
          bgImage={landscapeImage}
          bgSize="cover"
          bgPosition="27% 50%"
        >
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb="6">
            {stepWithinWizard === 0 && (
              <DonationForm
                bgColor="transparent"
                p="0"
                paymentIntent={mockPaymentIntent}
                onChangeTip={handleChangeTip}
                onChangeCustomInputField={handleChangeCustomInputField}
                onCloseCustomInputField={() =>
                  setUserRequestsCustomAmount(false)
                }
                onShowCustomInputField={() => setUserRequestsCustomAmount(true)}
                onSubmit={(d) => console.log("SUBMIT", d)}
                numberOfUnits={numberOfUnits}
                tip={tip}
                showCustomInputField={
                  userRequestsCustomAmount || numberOfUnits === null
                }
              />
            )}
            {stepWithinWizard === 1 && <EmojiForm />}
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
            "1,000",
            "pairs of socks",
            "The Somerville Homeless Coalition"
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
          mt="12"
          options={options}
          onButtonClick={onClick}
          // onCustomButtonClick={onCustomClick}
          moreTooltipLabel="more options"
        />
        <AbsoluteCenter top={{ base: "75%", md: "80%" }}>
          <Chester {...chesterAnimationProps} />
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
