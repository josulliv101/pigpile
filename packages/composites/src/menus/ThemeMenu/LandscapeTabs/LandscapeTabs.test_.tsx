import * as React from "react";
import userEvent from "@testing-library/user-event";
import { render, screen } from "../../../../../../../testUtils";
import { axe } from "jest-axe";
import { LandscapeTabs } from "./LandscapeTabs";

describe("LandscapeTabs", () => {
  /*  it("should not have basic accessibility issues", async () => {
    const { container } = render(<LandscapeTabs />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });*/
  it("renders correctly", () => {
    const { container } = render(<LandscapeTabs />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="chakra-tabs css-wlea3r"
      >
        <div
          aria-orientation="horizontal"
          class="chakra-tabs__tablist css-k008qs"
          role="tablist"
        >
          <button
            aria-controls="tabs-1--tabpanel-0"
            aria-selected="true"
            class="chakra-tabs__tab css-5wl5ud"
            data-index="0"
            id="tabs-1--tab-0"
            role="tab"
            tabindex="0"
            type="button"
          >
            <p
              class="chakra-text css-0"
            >
              Farm
            </p>
          </button>
          <button
            aria-controls="tabs-1--tabpanel-1"
            aria-selected="false"
            class="chakra-tabs__tab css-5wl5ud"
            data-index="1"
            id="tabs-1--tab-1"
            role="tab"
            tabindex="-1"
            type="button"
          >
            <p
              class="chakra-text css-0"
            >
              Park
            </p>
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
            aria-labelledby="tabs-1--tab-0"
            class="chakra-tabs__tab-panel css-sjt5nk"
            id="tabs-1--tabpanel-0"
            role="tabpanel"
            tabindex="0"
          >
            <span
              class="css-f8n5zr"
            >
              Farm
               Landscape
            </span>
          </div>
          <div
            aria-labelledby="tabs-1--tab-1"
            class="chakra-tabs__tab-panel css-sjt5nk"
            hidden=""
            id="tabs-1--tabpanel-1"
            role="tabpanel"
            tabindex="0"
          >
            <span
              class="css-f8n5zr"
            >
              Park
               Landscape
            </span>
          </div>
        </div>
      </div>
    `);
  });
});
