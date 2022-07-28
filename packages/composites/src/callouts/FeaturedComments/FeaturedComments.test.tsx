import { render } from "../../../../../../testUtils";
import { axe } from "jest-axe";
import { CampaignCreationCallout } from "./CampaignCreationCallout";
import { mockProps } from "./mock";

describe("Organization", () => {
  it("should not have basic accessibility issues", async () => {
    const { container } = render(<CampaignCreationCallout {...mockProps} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it("renders correctly", () => {
    const { container } = render(<CampaignCreationCallout {...mockProps} />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <aside
        class="chakra-callout css-1f5rrzb"
      >
        <div
          class="chakra-stack css-pki0e0"
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
          <div
            class="css-0"
          >
            <p
              class="chakra-text css-g5hezf"
            >
              Fundraiser created by
              Joe Sullivan
               on
              01/12/2022
            </p>
            <span
              class="chakra-badge css-us1946"
            >
              Pigpile Employee
            </span>
            <p
              class="chakra-text css-c397xu"
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
            </p>
          </div>
        </div>
      </aside>
    `);
  });
});
