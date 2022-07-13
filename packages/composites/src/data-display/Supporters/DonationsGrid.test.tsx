import * as React from "react";
// import userEvent from "@testing-library/user-event";
import { render } from "../../../../../../testUtils";
import { axe } from "jest-axe";
import { DonationsGrid } from "./DonationsGrid";
import { mockProps } from "./mock";

describe("Supporters", () => {
  it("should not have basic accessibility issues", async () => {
    const { container } = render(<DonationsGrid {...mockProps} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it("renders correctly", () => {
    const { container } = render(
      <DonationsGrid donations={mockProps.donations.slice(0, 1)} />
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="css-1d3m6tr"
      >
        <div
          class="chakra-card css-0"
        >
          <span
            class="chakra-avatar chakra-card__avatar css-66hxb4"
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
          <span
            class="chakra-badge chakra-card__badge css-wgvyo1"
          >
            10
          </span>
          <div
            class="chakra-card__content css-0"
          >
            <h2
              class="chakra-heading css-zvlevn"
            >
              Joe Sullivan
            </h2>
            <p
              class="chakra-text css-1lj023j"
            >
              06/19/2022
            </p>
          </div>
        </div>
      </div>
    `);
  });
});
