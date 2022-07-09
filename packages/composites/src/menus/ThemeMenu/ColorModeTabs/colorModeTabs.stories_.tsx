import { useState } from "react";
import { ColorModeTabs } from "./ColorModeTabs";

export default {
  title: "Composites / ThemePanel",
  // decorators: [(story: Function) => <Container mt={4}>{story()}</Container>],
};

export const ColorModeTabs_ = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  return <ColorModeTabs index={activeIndex} onChange={setActiveIndex} />;
};
