import { render } from "../../../../../testUtils";
import { axe } from "jest-axe";
import { DonationsTable } from "./DonationsTable";
import { mockDonationProps } from "./mock";

describe("Supporters", () => {
  it("should not have basic accessibility issues", async () => {
    const { container } = render(<DonationsTable {...mockDonationProps} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it("renders correctly", () => {
    const { container } = render(
      <DonationsTable donations={mockDonationProps.donations.slice(0, 1)} />
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="chakra-stack css-fxiqdw"
      >
        <div
          class="chakra-stack css-uxb30m"
        >
          <span
            class="chakra-avatar css-1sst10v"
          >
            <p
              class="chakra-text css-ypozbv"
            >
              😊
            </p>
          </span>
          <p
            class="chakra-text css-gp7egc"
          >
            Joe Sullivan
          </p>
          <span
            class="chakra-badge css-djgwfr"
          >
            10
             pairs of socks
          </span>
          <span
            class="chakra-badge css-djgwfr"
          >
            NaN years ago
          </span>
        </div>
      </div>
    `);
  });
});
