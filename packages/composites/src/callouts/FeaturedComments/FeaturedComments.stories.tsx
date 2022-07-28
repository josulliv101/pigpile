import { FeaturedComments } from "./FeaturedComments";
import { mockComments } from "./mock";

export default {
  title: "Callouts / FeaturedComments",
};

export const Basic = () => {
  return <FeaturedComments comments={mockComments} />;
};
