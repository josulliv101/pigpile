import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { ButtonGroup, Container, HStack, IconButton, Logo, Stack, Text, useBreakpointValue } from "@pigpile/core";

export const Footer: React.FC<HTMLChakraProps<"footer">> = props => {
  const breakPoint = useBreakpointValue({ base: "base", xs: "xs", sm: "sm", md: "md", lg: "lg", xl: "xl" })
  return (
    <Container as="footer" role="contentinfo" py={{ base: '2', md: '4' }} {...props}>
      <Stack spacing={{ base: '4', md: '5' }}>
        <Stack justify="space-between" direction="row" align="center">
          <HStack>
            <Text fontSize="sm" color="gray.200" opacity=".8">
              &copy; {new Date().getFullYear()} Pigpile Corporation. All rights reserved.
            </Text>
            {/*<Logo boxSize={5} bgColor="gray.600" fill="gray.500" shadow="none" borderWidth="0" opacity=".4" />*/}
          </HStack>
          <ButtonGroup variant="ghost" opacity=".8" spacing="4">
            <IconButton
              as="a"
              href="#"
              aria-label="LinkedIn"
              icon={<FaLinkedin fontSize="1.25rem" />}
              color="gray.300"
            />
            <IconButton as="a" href="#" aria-label="GitHub" color="gray.300" icon={<FaGithub fontSize="1.25rem" />} />
            <IconButton
              as="a"
              href="#"
              aria-label="Twitter"
              color="gray.300"
              icon={<FaTwitter fontSize="1.25rem" />}
            />
          </ButtonGroup>
        </Stack>
      </Stack>
    </Container>
  );
}
