import { useState } from "react";
import { ColorSchemeTabs } from "./ColorSchemeTabs";
import { mockColorSchemes as colorSchemes } from "../mock";

export default {
  title: "Composites / ThemePanel",
};

export const ColorSchemeTabs_ = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  return (
    <ColorSchemeTabs
      colorSchemes={colorSchemes}
      index={activeIndex}
      onChange={setActiveIndex}
    />
  );
};
