import { render, screen } from "../../../../../testUtils";
import { act } from "react-dom/test-utils";
import { axe } from "jest-axe";
import { DonationTabs } from "./DonationTabs";

describe("Donation Tabs", () => {
  it("renders correctly", () => {
    const { container } = render(
      <DonationTabs queryType={1} viewType={0} onChange={jest.fn()} />
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="chakra-stack css-3hqcgi"
      >
        <div
          class="css-1muuw4s"
        >
          <div
            class="chakra-tabs css-0"
          >
            <div
              aria-orientation="horizontal"
              class="chakra-tabs__tablist css-k008qs"
              role="tablist"
            >
              <button
                aria-controls="tabs-:r0:--tabpanel-0"
                aria-selected="false"
                class="chakra-tabs__tab css-5wl5ud"
                data-index="0"
                id="tabs-:r0:--tab-0"
                role="tab"
                tabindex="-1"
                type="button"
              >
                <p
                  class="chakra-text css-zvlevn"
                >
                  Latest Donations
                </p>
              </button>
              <button
                aria-controls="tabs-:r0:--tabpanel-1"
                aria-selected="true"
                class="chakra-tabs__tab css-5wl5ud"
                data-index="1"
                id="tabs-:r0:--tab-1"
                role="tab"
                tabindex="0"
                type="button"
              >
                <p
                  class="chakra-text css-zvlevn"
                >
                  Top Donations
                </p>
              </button>
            </div>
            <div
              class="chakra-tabs__tab-indicator css-112pexu"
              role="presentation"
              style="position: absolute; transition-property: left, right, top, bottom, height, width; transition-duration: 0ms; transition-timing-function: cubic-bezier(0, 0, 0.2, 1); left: 0px; width: 0px;"
            />
          </div>
          <hr
            aria-orientation="vertical"
            class="chakra-divider css-12rtzjl"
          />
          <div
            class="css-9n3bbc"
          >
            <label
              class="chakra-switch css-1gj0gtr"
            >
              <input
                class="chakra-switch__input"
                style="border: 0px; clip: rect(0px, 0px, 0px, 0px); height: 1px; width: 1px; margin: -1px; padding: 0px; overflow: hidden; white-space: nowrap; position: absolute;"
                type="checkbox"
                value=""
              />
              <span
                aria-hidden="true"
                class="chakra-switch__track css-14qxnv8"
              >
                <span
                  class="chakra-switch__thumb css-0"
                />
              </span>
              <span
                class="chakra-switch__label css-1y8kf23"
              >
                <svg
                  fill="currentColor"
                  height="1em"
                  stroke="currentColor"
                  stroke-width="0"
                  viewBox="0 0 448 512"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
                  />
                </svg>
              </span>
            </label>
          </div>
        </div>
        <div
          align="center"
          class="css-1g2bmhh"
        >
          <div
            class="chakra-button__group css-19th3sd"
            role="group"
          >
            <button
              aria-label="previous"
              class="chakra-button css-24qtlu"
              type="button"
            >
              <svg
                aria-hidden="true"
                fill="currentColor"
                focusable="false"
                height="1em"
                stroke="currentColor"
                stroke-width="0"
                viewBox="0 0 320 512"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
                />
              </svg>
            </button>
            <button
              aria-label="next"
              class="chakra-button css-24qtlu"
              type="button"
            >
              <svg
                aria-hidden="true"
                fill="currentColor"
                focusable="false"
                height="1em"
                stroke="currentColor"
                stroke-width="0"
                viewBox="0 0 320 512"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    `);
  });
});
