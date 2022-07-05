import * as React from "react";
import { render } from "../../../../testUtils";
import { Background } from "./Background";

const props = {
  bgImage: "url(https://pigpile-next.firebaseapp.com/images/landscape.png)",
};

describe("Background", () => {
  it("renders correctly", () => {
    const { container } = render(<Background {...props} />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="chakra-background css-0"
      />
    `);
  });
});
