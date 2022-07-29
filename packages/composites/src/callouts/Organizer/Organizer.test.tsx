import { render } from "../../../../../testUtils";
import { axe } from "jest-axe";
import { Organizer } from "./Organizer";
import { mockProps } from "./mock";

describe("Organization", () => {
  it("should not have basic accessibility issues", async () => {
    const { container } = render(<Organizer {...mockProps} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it("renders correctly", () => {
    const { container } = render(<Organizer {...mockProps} />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <aside
        class="chakra-callout css-ifhov8"
      >
        <div
          class="chakra-stack css-1m032t"
        >
          <span
            class="chakra-avatar css-1ruhx4w"
          >
            <div
              aria-label="Joe Sullivan"
              class="chakra-avatar__initials css-0"
              role="img"
            >
              JS
            </div>
          </span>
          <p
            class="chakra-text css-kgzj4k"
          >
            Created by
            Joe Sullivan
          </p>
          <p
            class="chakra-text css-fqidec"
          >
            01/12/2022
          </p>
          <span
            class="chakra-badge css-18h78m9"
          >
            Pigpile Employee
          </span>
          <p
            class="chakra-text css-c397xu"
          >
            Sed ut perspiciatis unde omnis iste natus error sit.
          </p>
        </div>
      </aside>
    `);
  });
});
