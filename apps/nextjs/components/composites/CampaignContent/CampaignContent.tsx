import { Donation } from "@josulliv101/types";
import {
  Box,
  Container,
  HStack,
  Spacer,
  Stack,
} from "@josulliv101/core";
import {
  FeaturedComments,
  MeetChester,
  Organization,
  OurMission,
  SecurePayment,
  Supporters,
} from "@josulliv101/composites";

const SPACING = 10;

interface Props {
  donations: Donation[];
}

const CampaignContent: React.FC<Props> = ({ beneficiary, chesterAnimationType, comments = [], donations, donationFilter, getDonationsLabel, landscapeImage, location, onDonationFilterChange, organization }): JSX.Element => {
  return (
    <>
      <Container minH="100px">
        <HStack
          align="flex-start"
          flexDirection={{ base: "column-reverse", md: "row" }}
          id="grid-container"
          mb={SPACING}
          spacing={{ base: 0, md: SPACING }}
          w="full"
        >
          <Stack
            spacing={{ base: 0, md: 8 }}
            w={{ base: "full", md: "76%" }}
          >
            <Supporters
              {...donationFilter}
              donations={donations}
              getLabel={getDonationsLabel}
              onChange={onDonationFilterChange}
            />
            <Box
              display={{ base: "block", md: "none" }}
              h="6"
              w="0"
            />
            <HStack
              alignItems="stretch"
              flexDirection={{ base: "column", lg: "row" }}
              p="0"
              spacing={{ base: 0, lg: 10 }}
              w="full"
            >
              <Organization
                flex="1"
                p={{ base: 10, sm: 20, md: 10 }}
                {...organization}
                location={location}
                name={beneficiary}
              />
              <Box
                display={{ base: "block", lg: "none" }}
                h="6"
                w="0"
              />
              <OurMission bgImage={landscapeImage} />
            </HStack>
          </Stack>
          <Stack
            spacing={{ base: 4, md: 4 }}
            w={{ base: "full", md: "24%" }}
          >
            {comments?.length && <FeaturedComments comments={comments} />}
            <MeetChester animationType={chesterAnimationType} />
            <SecurePayment />
            <Spacer p="1" />
          </Stack>
        </HStack>
      </Container>
    </>
  );
};

export default CampaignContent;
