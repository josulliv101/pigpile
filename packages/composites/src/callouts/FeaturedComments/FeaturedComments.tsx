import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { Comment as CommentType } from "@josulliv101/types";
import { Box, HStack, IconButton, Text, useColorModeValue } from "@josulliv101/core";
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
      as="section"
      display="flex"
      flexDirection="column"
      bgColor="gray.100"
      pt="4"
      _dark={{ bgColor: "gray.500" }}
    >
      {comment && <Comment {...comment} />}
      {comments.length > 1 && (
        <HStack
          justify="center"
          spacing={{ base: 4, md: 3 }}
          mt="8"
          mb="4"
          color={useColorModeValue("gray.300", "gray.600")}
        >
          {comments.map((_, index) => (
            <IconButton
              key={`btn-${index}${activeIndex === index ? "-active" : ""}`}
              aria-label="View comment"
              borderWidth="2px"
              borderColor={index === activeIndex ? "inherit" : "gray.100"}
              size="3xs"
              bgColor={index === activeIndex ? undefined : "gray.300"}
              borderRadius="full"
              onClick={() => setActiveIndex(index)}
              _active={{
                bgColor: index === activeIndex ? undefined : "gray.300",
              }}
              _dark={{
                bgColor: index === activeIndex ? undefined : "gray.400",
              }}
            />
          ))}
        </HStack>
      )}
      <Text
        align="right"
        fontSize="xs"
        bgColor="gray.200"
        color="gray.500"
        _dark={{ bgColor: "gray.700", color: "gray.300" }}
        px="3"
        py="2"
      >
        Featured Comments
      </Text>
    </Box>
  );
};
