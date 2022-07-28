import { render } from "../../../../../testUtils";
import { axe } from "jest-axe";
import { DonationsGrid } from "./DonationsGrid";
import { mockDonationProps } from "./mock";

describe("Supporters", () => {
  it("should not have basic accessibility issues", async () => {
    const { container } = render(<DonationsGrid {...mockDonationProps} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it("renders correctly", () => {
    const { container } = render(
      <DonationsGrid donations={mockDonationProps.donations.slice(0, 1)} />
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="css-1svbe3o"
      >
        <div
          class="chakra-card css-cfa4mp"
        >
          <span
            class="chakra-avatar chakra-card__avatar css-1afu1a"
          >
            <p
              class="chakra-text css-1o8uild"
            >
              😊
            </p>
          </span>
          <div
            class="chakra-card__background css-0"
          />
          <div
            class="chakra-card__content css-0"
          >
            <h2
              class="chakra-heading css-zvlevn"
            >
              Joe Sullivan
            </h2>
            <p
              class="chakra-text css-llnct3"
            >
              10
               pairs of socks
            </p>
            <p
              class="chakra-text css-llnct3"
            >
              NaN years ago
            </p>
          </div>
        </div>
      </div>
    `);
  });
});
