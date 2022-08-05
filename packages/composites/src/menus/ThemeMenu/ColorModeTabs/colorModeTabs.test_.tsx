import { render } from "../../../../../../testUtils";
import { axe } from "jest-axe";
import { ColorModeTabs } from "./ColorModeTabs";

describe("ColorModeTabs", () => {
  it("should not have basic accessibility issues", async () => {
    const { container } = render(<ColorModeTabs />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it("renders correctly", () => {
    const { container } = render(<ColorModeTabs />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="chakra-tabs css-wlea3r"
      >
        <p
          class="chakra-text css-1xm97lg"
        >
          Color Mode
        </p>
        <div
          aria-orientation="horizontal"
          class="chakra-tabs__tablist css-k008qs"
          role="tablist"
        >
          <button
            aria-controls="tabs-2--tabpanel-0"
            aria-selected="true"
            class="chakra-tabs__tab css-5wl5ud"
            data-index="0"
            id="tabs-2--tab-0"
            role="tab"
            tabindex="0"
            type="button"
          >
            <div
              class="chakra-stack css-dxrexh"
            >
              <svg
                class="chakra-icon css-18pp5k"
                fill="currentColor"
                focusable="false"
                height="1em"
                stroke="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"
                />
              </svg>
              <p
                class="chakra-text css-0"
              >
                Light
              </p>
            </div>
          </button>
          <button
            aria-controls="tabs-2--tabpanel-1"
            aria-selected="false"
            class="chakra-tabs__tab css-5wl5ud"
            data-index="1"
            id="tabs-2--tab-1"
            role="tab"
            tabindex="-1"
            type="button"
          >
            <div
              class="chakra-stack css-dxrexh"
            >
              <svg
                class="chakra-icon css-18pp5k"
                fill="currentColor"
                focusable="false"
                height="1em"
                stroke="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"
                />
              </svg>
              <p
                class="chakra-text css-0"
              >
                Dark
              </p>
            </div>
          </button>
        </div>
        <div
          class="chakra-tabs__tab-indicator css-0"
          style="position: absolute; transition-property: left, right, top, bottom; transition-duration: 0ms; transition-timing-function: cubic-bezier(0, 0, 0.2, 1); left: 0px; width: 0px;"
        />
        <div
          class="chakra-tabs__tab-panels css-8atqhb"
        >
          <div
            aria-labelledby="tabs-2--tab-0"
            class="chakra-tabs__tab-panel css-sjt5nk"
            id="tabs-2--tabpanel-0"
            role="tabpanel"
            tabindex="0"
          >
            <span
              class="css-f8n5zr"
            >
              Light
               Color Mode
            </span>
          </div>
          <div
            aria-labelledby="tabs-2--tab-1"
            class="chakra-tabs__tab-panel css-sjt5nk"
            hidden=""
            id="tabs-2--tabpanel-1"
            role="tabpanel"
            tabindex="0"
          >
            <span
              class="css-f8n5zr"
            >
              Dark
               Color Mode
            </span>
          </div>
        </div>
      </div>
    `);
  });
});
