import { useState } from "react";
import { LandscapeTabs } from "./LandscapeTabs";

export default {
  title: "Composites / ThemePanel",
  // decorators: [(story: Function) => <Container mt={4}>{story()}</Container>],
};

export const LandscapeTabs_ = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  return <LandscapeTabs index={activeIndex} onChange={setActiveIndex} />;
};