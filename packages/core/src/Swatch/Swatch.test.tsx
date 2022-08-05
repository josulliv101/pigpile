import userEvent from "@testing-library/user-event";
import { render, screen } from "../../../../testUtils";
import { axe } from "jest-axe";
import { Swatch, SwatchButton } from "./Swatch";

const props = {
  color1: "blue.500",
  color2: "pink.500",
  color3: "#48bb78",
};

describe("Swatch", () => {
  it("should not have basic accessibility issues", async () => {
    const { container } = render(<Swatch {...props} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it("renders correctly", () => {
    const { container } = render(<Swatch {...props} />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        aria-label="swatch colors blue, pink, #48bb78"
        class="chakra-swatch css-uhd6gs"
        role="img"
      >
        <div
          class="css-27ub1o"
        />
        <div
          class="css-q4ok5u"
        />
      </div>
    `);
  });
});

describe("SwatchButton", () => {
  it("should not have basic accessibility issues", async () => {
    const { container } = render(<SwatchButton {...props} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it("should automatically set aria-label to colors", async () => {
    render(
      <SwatchButton
        color1="red"
        color2="green"
        color3="blue"
      />
    );
    expect(
      screen.getByRole("button", { name: "swatch colors red, green, blue" })
    ).toBeInTheDocument();
  });
  it("should respect manually set aria-label", async () => {
    render(
      <SwatchButton
        aria-label="custom swatch colors"
        {...props}
      />
    );
    expect(
      screen.getByRole("button", { name: "custom swatch colors" })
    ).toBeInTheDocument();
  });
  it("renders correctly", () => {
    const { container } = render(<SwatchButton {...props} />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <button
        aria-label="swatch colors blue, pink, #48bb78"
        class="chakra-button chakra-swatch css-1xmq3zc"
        type="button"
      >
        <div
          class="css-27ub1o"
        />
        <div
          class="css-q4ok5u"
        />
      </button>
    `);
  });
  it("handles click events", () => {
    const clickHandler = jest.fn();
    render(
      <SwatchButton
        {...props}
        onClick={clickHandler}
      />
    );
    userEvent.click(screen.getByRole("button"));
    expect(clickHandler).toHaveBeenCalled();
  });
});
