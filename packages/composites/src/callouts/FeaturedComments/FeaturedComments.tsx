import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { Box, HStack, IconButton, Text, useColorModeValue } from "@josulliv101/core";
import { Comment as CommentType } from "@josulliv101/types";
import { Quotee } from "./Quotee";
import { QuoteIcon } from "./QuoteIcon";
import { Comment } from "./Comment";

interface Props {
  comments: CommentType[];
}

function getNextIndexOnSwipe({
  activeIndex = 0,
  comments = [],
  direction = "forward",
}: {
  activeIndex: number;
  comments: CommentType[];
  direction?: string;
}) {
  if (direction !== "forward") {
    return activeIndex ? activeIndex - 1 : comments.length - 1;
  }
  return activeIndex < comments.length - 1 ? activeIndex + 1 : 0;
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
      _dark={{ bgColor: "gray.500" }}
      pt="4"
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
              // border={index === activeIndex ? "2px #000 solid" : "2px red solid"}
              size="3xs"
              // size={index === activeIndex ? "2xs" : "3xs"}
              bgColor={index === activeIndex ? undefined : "gray.300"}
              _dark={{
                bgColor: index === activeIndex ? undefined : "gray.400",
              }}
              borderRadius="full"
              onClick={() => setActiveIndex(index)}
              _active={{
                bgColor: index === activeIndex ? undefined : "gray.300",
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
