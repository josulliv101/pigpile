import * as React from "react";
import { render } from "../../../../testUtils";
import { axe } from "jest-axe";
import { CountUpBox } from "./CountUpBox";

describe("Chester", () => {
  it("should not have basic accessibility issues", async () => {
    const { container } = render(<CountUpBox label="894 of 1K" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it("renders correctly", () => {
    const { container } = render(<CountUpBox label="894 of 1K" />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        aria-label="894 of 1K"
        class="chakra-stack chakra-count-up-box css-1c6kzeh"
        role="figure"
      >
        <div
          class="chakra-stack css-q1a9bv"
        >
          <div
            class="css-0"
          >
            894 of 1K
          </div>
          <div
            class="css-0"
          >
            <span>
              0
            </span>
          </div>
        </div>
      </div>
    `);
  });
});
