import { axe } from "jest-axe";
import { ColorSchemeTabs } from "./ColorSchemeTabs";
import { render } from "../../../../../../testUtils";
import { mockColorSchemes as colorSchemes } from "../mock";

describe("ColorSchemeTabs", () => {
  it("should not have basic accessibility issues", async () => {
    const { container } = render(
      <ColorSchemeTabs
        activeColorSchemeId="halloween"
        colorSchemes={colorSchemes}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it("renders correctly", () => {
    const { container } = render(
      <ColorSchemeTabs
        activeColorSchemeId="halloween"
        colorSchemes={colorSchemes}
      />
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        activecolorschemeid="halloween"
        class="chakra-tabs css-wlea3r"
      >
        <p
          class="chakra-text css-1xm97lg"
        >
          Color Scheme
        </p>
        <div
          aria-orientation="horizontal"
          class="chakra-tabs__tablist css-k008qs"
          role="tablist"
        >
          <button
            aria-controls="tabs-2--tabpanel-0"
            aria-selected="true"
            class="chakra-tabs__tab css-1gf7tlz"
            data-index="0"
            id="tabs-2--tab-0"
            role="tab"
            tabindex="0"
            type="button"
          >
            <div
              aria-label="swatch colors blue, red"
              class="chakra-swatch css-1x28ovs"
              role="img"
            >
              <div
                class="css-3anxoi"
              />
            </div>
          </button>
          <button
            aria-controls="tabs-2--tabpanel-1"
            aria-selected="false"
            class="chakra-tabs__tab css-1gf7tlz"
            data-index="1"
            id="tabs-2--tab-1"
            role="tab"
            tabindex="-1"
            type="button"
          >
            <div
              aria-label="swatch colors black, orange"
              class="chakra-swatch css-1bnu0r8"
              role="img"
            >
              <div
                class="css-aodd92"
              />
            </div>
          </button>
        </div>
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
            />
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
            />
          </div>
        </div>
      </div>
    `);
  });
});
