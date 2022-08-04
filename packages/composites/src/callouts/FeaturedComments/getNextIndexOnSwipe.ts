import { Comment } from "@josulliv101/types";

interface SwipeDetails {
  activeIndex: number;
  comments: Comment[];
  direction?: string;
}

export const getNextIndexOnSwipe = ({
  activeIndex = 0,
  comments = [],
  direction = "forward",
}: SwipeDetails): number => {
  if (direction !== "forward") {
    return activeIndex ? activeIndex - 1 : comments.length - 1;
  }
  return activeIndex < comments.length - 1 ? activeIndex + 1 : 0;
};
