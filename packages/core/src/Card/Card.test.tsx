import * as React from "react";
import { render } from "../../../../testUtils";
import { axe } from "jest-axe";
import { Card, CardBackground, CardAvatar, CardContent } from "./Card";

describe("Card", () => {
  it("should not have basic accessibility issues", async () => {
    const { container } = render(
      <Card>
        <CardBackground />
        <CardAvatar />
        <CardContent>card content</CardContent>
      </Card>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it("renders correctly without Avatar", () => {
    const { container } = render(
      <Card>
        <CardBackground />
        <CardAvatar />
        <CardContent>card content</CardContent>
      </Card>
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="chakra-card css-0"
      >
        <div
          class="chakra-card__background css-0"
        />
        <div
          class="chakra-card__avatar css-0"
        />
        <div
          class="chakra-card__content css-0"
        >
          card content
        </div>
      </div>
    `);
  });
  it("renders correctly with avatar As component", () => {
    const { container } = render(
      <Card>
        <CardBackground />
        <CardAvatar as={() => <span className="mock-avatar-cmp" />} />
        <CardContent>card content</CardContent>
      </Card>
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="chakra-card css-0"
      >
        <div
          class="chakra-card__background css-0"
        />
        <span
          class="mock-avatar-cmp"
        />
        <div
          class="chakra-card__content css-0"
        >
          card content
        </div>
      </div>
    `);
  });
});
