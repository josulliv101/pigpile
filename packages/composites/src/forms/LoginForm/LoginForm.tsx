import { Provider } from "@josulliv101/types";
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
  useColorModeValue,
} from "@josulliv101/core";
import { OAuthButtonGroup, OAuthButtonGroupProps } from "./OAuthButtonGroup";
import { PasswordField } from "./PasswordField";

export interface LoginFormProps extends OAuthButtonGroupProps {
  onForgotPassword: () => void;
  onSignIn: () => void;
  onSignInWithProvider: (p: Provider) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({
  onForgotPassword,
  onSignIn,
  onSignUp,
  onSignInWithProvider,
}) => (
  <Box>
    <Stack
      alignItems="center"
      spacing="8"
      w="full"
    >
      <Box
        _dark={{
          bg: { base: "transparent", sm: "gray.700" },
          color: "gray.100",
        }}
        bgColor={{ base: "transparent", sm: "gray.200" }}
        borderRadius={{ base: "none", sm: "xl" }}
        boxShadow={{ base: "none", sm: useColorModeValue("md", "md-dark") }}
        color={{ base: "white", sm: "gray.600" }}
        maxW="md"
        px={{ base: "4", sm: "10" }}
        py={{ base: "0", sm: "8" }}
      >
        <Stack spacing="6">
          <Stack spacing="5">
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                bgColor="whiteAlpha.500"
                borderColor="gray.300"
                id="email"
                type="email"
              />
            </FormControl>
            <PasswordField
              bgColor="whiteAlpha.500"
              borderColor="gray.300"
            />
          </Stack>
          <HStack justify="flex-end">
            <Button
              color={{ base: "gray.200", sm: "gray.500" }}
              colorScheme="blue"
              fontWeight="normal"
              onClick={onForgotPassword}
              size="sm"
              variant="link"
            >
              Forgot password?
            </Button>
          </HStack>
          <Stack spacing="6">
            <Button
              onClick={onSignIn}
              size="md"
              variant="solid"
            >
              Sign in
            </Button>
            <HStack borderColor="gray.300">
              <Divider borderColor="gray.400" />
              <Text
                color="muted"
                fontSize="sm"
                whiteSpace="nowrap"
              >
                or continue with
              </Text>
              <Divider borderColor="gray.400" />
            </HStack>
            <OAuthButtonGroup onSignInWithProvider={onSignInWithProvider} />
          </Stack>
        </Stack>
      </Box>
      <Stack
        color="white"
        spacing="6"
      >
        <Stack
          spacing={{ base: "2", md: "3" }}
          textAlign="center"
        >
          <HStack
            justify="center"
            spacing="1"
          >
            <Text color="muted">Don&apos;t have an account?</Text>
            <Button
              color="white"
              onClick={onSignUp}
              variant="link"
            >
              Sign up
            </Button>
          </HStack>
        </Stack>
      </Stack>
    </Stack>
  </Box>
);
