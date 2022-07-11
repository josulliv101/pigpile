import { Box, Container, Tag, useBreakpointValue } from "@pigpile/core";

export const Footer: React.FC<HTMLChakraProps<"footer">> = props => {
  const breakPoint = useBreakpointValue({ base: "base", xs: "xs", sm: "sm", md: "md", lg: "lg", xl: "xl" })
  return (
    <Box as="footer" py="4" {...props}>
      <Container>
        <Tag>Pigpile Footer  ({breakPoint})</Tag>
      </Container>
    </Box>
  );
}
