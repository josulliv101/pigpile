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
      <div
        class="chakra-card css-e25xwy"
        description="Sed ut perspiciatis unde omnis iste natus error sit."
      >
        <span
          class="chakra-avatar chakra-card__avatar css-5f30d9"
        >
          <svg
            aria-label=" avatar"
            class="chakra-avatar__svg css-16ite8i"
            role="img"
            viewBox="0 0 128 128"
          >
            <path
              d="M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"
              fill="currentColor"
            />
            <path
              d="M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"
              fill="currentColor"
            />
          </svg>
        </span>
        <div
          class="chakra-card__background css-g05wsb"
        />
        <div
          class="chakra-card__content css-1tqud6q"
        >
          <h2
            class="chakra-heading css-kk50yz"
          >
            Joe Sullivan

            is organizing this fundraiser
            .
          </h2>
          <span
            class="chakra-badge css-195g6wb"
          >
            Pigpile
            Employee
          </span>
          <p
            class="chakra-text css-wx3o4z"
          >
            Created

            6 days ago
          </p>
        </div>
      </div>
    `);
  });
});
