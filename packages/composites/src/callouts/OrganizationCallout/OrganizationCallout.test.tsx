import * as React from "react";
// import userEvent from "@testing-library/user-event";
import { render } from "../../../../../../testUtils";
import { axe } from "jest-axe";
import { OrganizationCallout } from "./OrganizationCallout";
import { mockProps } from "./mock";

describe("Organization", () => {
  it("should not have basic accessibility issues", async () => {
    const { container } = render(<OrganizationCallout {...mockProps} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it("renders correctly", () => {
    const { container } = render(<OrganizationCallout {...mockProps} />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <aside
        class="chakra-callout css-endsbc"
      >
        <div
          class="chakra-stack css-1ojabmr"
        >
          <div
            class="css-0"
          >
            <h2
              class="chakra-heading css-1l9d4sb"
            >
              Somerville Homeless Shelter
            </h2>
            <p
              class="chakra-text css-fllu3e"
            >
              Somervill,e MA
            </p>
            <p
              class="chakra-text css-0"
            >
              Founded in 1969, Pine Street Inn provides a comprehensive range of services to nearly 2,000 homeless men and women each day. We are the largest homeless services provider in New England, and could not do this important work without the support of our donors and local community.
            </p>
          </div>
          <div
            class="chakra-stack css-2nt6bn"
          >
            <button
              class="chakra-button css-llght"
              type="button"
            >
              Visit Website
            </button>
          </div>
        </div>
      </aside>
    `);
  });
});