import { useState } from "react";
import { ColorSchemeTabs } from "./ColorSchemeTabs";
import { mockColorSchemes as colorSchemes } from "../mock";

export default {
  title: "Composites / ThemePanel",
  // decorators: [(story: Function) => <Container mt={4}>{story()}</Container>],
};

export const ColorSchemeTabs_ = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const ids = Object.keys(colorSchemes);
  return (
    <ColorSchemeTabs
      index={activeIndex}
      colorSchemes={colorSchemes}
      onChange={setActiveIndex}
    />
  );
};
