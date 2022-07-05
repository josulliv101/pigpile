import * as React from "react";
// import userEvent from "@testing-library/user-event";
import { render } from "../../../../testUtils";
import { axe } from "jest-axe";
import { Callout } from "./Callout";

const props = {
  children: "my callout",
};

describe("Callout", () => {
  it("should not have basic accessibility issues", async () => {
    const { container } = render(<Callout {...props} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it("renders correctly", () => {
    const { container } = render(<Callout {...props} />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <aside
        class="chakra-callout css-endsbc"
      >
        my callout
      </aside>
    `);
  });
});
