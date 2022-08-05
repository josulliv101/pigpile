import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { Comment as CommentType } from "@josulliv101/types";
import {
  Box,
  HStack,
  IconButton,
  Text,
  useColorModeValue,
} from "@josulliv101/core";
import { getNextIndexOnSwipe } from "./getNextIndexOnSwipe";
import { Comment } from "./Comment";

interface Props {
  comments: CommentType[];
}

export const FeaturedComments = ({ comments = [] }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const indexNext = getNextIndexOnSwipe({ activeIndex, comments });
  const indexPrev = getNextIndexOnSwipe({
    activeIndex,
    comments,
    direction: "back",
  });
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => setActiveIndex(indexNext),
    onSwipedRight: () => setActiveIndex(indexPrev),
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });
  const comment = comments?.[activeIndex];
  return (
    <Box
      {...swipeHandlers}
      _dark={{ bgColor: "gray.500" }}
      as="section"
      bgColor="gray.100"
      display="flex"
      flexDirection="column"
      pt="4"
    >
      {comment && <Comment {...comment} />}
      {comments.length > 1 && (
        <HStack
          color={useColorModeValue("gray.300", "gray.600")}
          justify="center"
          mb="4"
          mt="8"
          spacing={{ base: 4, md: 3 }}
        >
          {comments.map((_, index) => (
            <IconButton
              key={`btn-${index}${activeIndex === index ? "-active" : ""}`}
              _active={{
                bgColor: index === activeIndex ? undefined : "gray.300",
              }}
              _dark={{
                bgColor: index === activeIndex ? undefined : "gray.400",
              }}
              aria-label="View comment"
              bgColor={index === activeIndex ? undefined : "gray.300"}
              borderColor={index === activeIndex ? "inherit" : "gray.100"}
              borderRadius="full"
              borderWidth="2px"
              onClick={() => setActiveIndex(index)}
              size="3xs"
            />
          ))}
        </HStack>
      )}
      <Text
        _dark={{ bgColor: "gray.700", color: "gray.300" }}
        align="right"
        bgColor="gray.200"
        color="gray.500"
        fontSize="xs"
        px="3"
        py="2"
      >
        Featured Comments
      </Text>
    </Box>
  );
};
