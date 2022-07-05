import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@pigpile/core";
import { OAuthButtonGroup, OAuthButtonGroupProps } from "./OAuthButtonGroup";
import { PasswordField } from "./PasswordField";

export interface LoginFormProps extends OAuthButtonGroupProps {}

export const LoginForm: React.FC<LoginFormProps> = ({
  onSignInWithProvider,
}) => (
  <Box>
    <Stack w="full" spacing="8">
      <Box
        py={{ base: "0", sm: "8" }}
        px={{ base: "4", sm: "10" }}
        bg={useBreakpointValue({ base: "transparent", sm: "white" })}
        boxShadow={{ base: "none", sm: useColorModeValue("md", "md-dark") }}
        borderRadius={{ base: "none", sm: "xl" }}
        _dark={{ bg: "gray.700" }}
      >
        <Stack spacing="6">
          <Stack spacing="5">
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input id="email" type="email" />
            </FormControl>
            <PasswordField />
          </Stack>
          <HStack justify="space-between">
            <Checkbox defaultChecked>Remember me</Checkbox>
            <Button variant="link" colorScheme="blue" size="sm">
              Forgot password?
            </Button>
          </HStack>
          <Stack spacing="6">
            <Button size="md" variant="solid">
              Sign in
            </Button>
            <HStack borderColor="gray.300">
              <Divider />
              <Text fontSize="sm" whiteSpace="nowrap" color="muted">
                or continue with
              </Text>
              <Divider />
            </HStack>
            <OAuthButtonGroup onSignInWithProvider={onSignInWithProvider} />
          </Stack>
        </Stack>
      </Box>
      <Stack spacing="6" color="white">
        <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
          <HStack spacing="1" justify="center">
            <Text color="muted">Don't have an account?</Text>
            <Button variant="link" color="white">
              Sign up
            </Button>
          </HStack>
        </Stack>
      </Stack>
    </Stack>
  </Box>
);
