import {
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@josulliv101/core";
import { OAuthButtonGroup, OAuthButtonGroupProps } from "./OAuthButtonGroup";
import { PasswordField } from "./PasswordField";

export interface LoginFormProps extends OAuthButtonGroupProps {
  onForgotPassword: () => void;
  onSignIn: () => void;
  onSignInWithProvider: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({
  onForgotPassword,
  onSignIn,
  onSignInWithProvider,
}) => (
  <Box>
    <Stack w="full" spacing="8" alignItems="center">
      <Box
        maxW="md"
        py={{ base: "0", sm: "8" }}
        px={{ base: "4", sm: "10" }}
        bg={useBreakpointValue({ base: "transparent", sm: "whiteAlpha.900" })}
        boxShadow={{ base: "none", sm: useColorModeValue("md", "md-dark") }}
        borderRadius={{ base: "none", sm: "xl" }}
        _dark={{ bg: "gray.700", color: "gray.100" }}
        color="gray.600"
      >
        <Stack spacing="6">
          <Stack spacing="5">
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input id="email" type="email" />
            </FormControl>
            <PasswordField />
          </Stack>
          <HStack justify="flex-end">
            <Button
              variant="link"
              colorScheme="blue"
              size="sm"
              onClick={onForgotPassword}
            >
              Forgot password?
            </Button>
          </HStack>
          <Stack spacing="6">
            <Button size="md" variant="solid" onClick={onSignIn}>
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
