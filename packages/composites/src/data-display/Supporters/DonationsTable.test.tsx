import * as React from "react";
// import userEvent from "@testing-library/user-event";
import { render } from "../../../../../../testUtils";
import { axe } from "jest-axe";
import { DonationsTable } from "./DonationsTable";
import { mockProps } from "./mock";

describe("Supporters", () => {
  it("should not have basic accessibility issues", async () => {
    const { container } = render(<DonationsTable {...mockProps} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it("renders correctly", () => {
    const { container } = render(
      <DonationsTable donations={mockProps.donations.slice(0, 1)} />
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="chakra-stack css-fxiqdw"
      >
        <div
          class="chakra-stack css-84zodg"
        >
          <span
            class="chakra-avatar css-j8hzwx"
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
            class="chakra-badge css-ifsvay"
          >
            10
             pairs of socks
          </span>
          <span
            class="chakra-badge css-ifsvay"
          >
            06/19/2022
          </span>
        </div>
      </div>
    `);
  });
});
