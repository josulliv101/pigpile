import { useEffect, useState } from "react";
import { Formik, Field, FieldProps, Form } from "formik";
import {
  Box,
  Button,
  Callout,
  Checkbox,
  FormControl,
  FormErrorMessage,
  HTMLChakraProps,
  Input,
  InputGroup,
  InputRightAddon,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
  Textarea,
  useToast,
} from "@josulliv101/core";

const emojis = [
  "❤️",
  // "💕",
  // "💙",
  "💚",
  // "💜",
  "🖤",
  "😊",
  "😎",
  "🥰",
  "🌷",
  "🌹",
  "🌻",
  "🌼",
  // "💐",
  "🐶",
  "🐱",
  "🐭",
  "🐨",
  "🦊",
  "🐰",
  // "👏",
  // "🙌",
  // "🙏",
  "💪",
  "✌️",
  "🤟",
  "🤘",
];

export interface EmojiFormProps extends HTMLChakraProps<"div"> {
  onSubmit: () => void;
}

const FieldAnonymousCheckBox = () => {
  const toast = useToast();
  const [toastHasBeenDisplayedOnce, setToastHasBeenDisplayedOnce] = useState();
  return (
    <Field name="anonymous">
      {({ field, form }: FieldProps) => {
        useEffect(() => {
          if (!toastHasBeenDisplayedOnce && form.values.anonymous) {
            setToastHasBeenDisplayedOnce(true);
            toast({
              title: "Ok, we won't display your name.",
              description: "You can still update the displayed emoji.",
              status: "info",
              duration: 5000,
              isClosable: true,
              position: "top",
            });
          }
        }, [form.values.anonymous]);
        return (
          <FormControl
            id="anonymous"
            isInvalid={!!form.errors.anonymous && !!form.touched.anonymous}
          >
            <Checkbox size="sm" {...field}>
              Don't display my name on the site.
            </Checkbox>
            {/*<FormHelperText color="gray.300">Don't display my name publicly on the campaign.</FormHelperText>*/}
            <FormErrorMessage>{form.errors.anonymous}</FormErrorMessage>
          </FormControl>
        );
      }}
    </Field>
  );
};

export const EmojiForm: React.FC<EmojiFormProps> = ({ onSubmit, ...props }) => {
  const [activeEmoji, setActiveEmoji] = useState(emojis[0]);
  /*  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    values,
    actions
  ) => {
    console.log("handleSubmit", values, actions);
  };*/

  return (
    <Callout as={Stack} spacing="8" {...props}>
      <Text>Thank you! One final step below.</Text>
      <Formik
        initialValues={{ displayName: "", comment: "", anonymous: false }}
        onSubmit={onSubmit}
        validate={(values) => {
          let errors = {};
          if (!values.anonymous && !values.displayName) {
            errors.displayName =
              "Add a name (it does not need to match the name on your credit card).";
          }
          console.log("validating...", values, errors);
          return errors;
        }}
      >
        {({ dirty, isValid, values }) => {
          return (
            <Form>
              <Stack spacing="4">
                <Field name="displayName">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={
                        form.errors.displayName && form.touched.displayName
                      }
                      // isDisabled={showCustomInputField}
                    >
                      <InputGroup>
                        <Input
                          {...field}
                          // isRequired={!values.anonymous}
                          isDisabled={values.anonymous}
                          id="displayName"
                          aria-label="displayName"
                          placeholder="Name to display"
                          _placeholder={{ color: "whiteAlpha.800" }}
                          value={
                            values.anonymous ? "Anonymous" : values.displayName
                          }
                        />
                        <InputRightAddon
                          fontSize="xl"
                          px="2"
                          bgColor="gray.50"
                          children={activeEmoji}
                        />
                      </InputGroup>
                      <FormErrorMessage>
                        {form.errors.displayName}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <FieldAnonymousCheckBox />
                <Text pt="20px">Select Your Emoji</Text>
                <Box p="2" borderRadius="md" borderWidth="1px">
                  <SimpleGrid columns={{ base: 5, sm: 7, md: 10 }} spacing={2}>
                    {emojis.map((emoji) => (
                      <Button
                        isActive={emoji === activeEmoji}
                        onClick={() => setActiveEmoji(emoji)}
                        minH="32px"
                        fontSize="xl"
                        _active={{
                          bgColor: "whiteAlpha.200",
                          borderWidth: 1,
                          borderColor: "whiteAlpha.100",
                        }}
                        _hover={{ bgColor: "whiteAlpha.100" }}
                        // bgColor={emoji === activeEmoji ? "white" : "whiteAlpha.300"}
                        size="xs"
                        variant="ghost"
                        w="auto"
                        aria-label={emoji}
                      >
                        {emoji}
                      </Button>
                    ))}
                  </SimpleGrid>
                </Box>
                <Field name="comment">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.comment && form.touched.comment}
                      // isDisabled={showCustomInputField}
                    >
                      <InputGroup>
                        <Textarea
                          {...field}
                          id="comment"
                          aria-label="comment"
                          placeholder="Include a comment"
                          _placeholder={{ color: "whiteAlpha.800" }}
                          mt="7"
                          // bgColor="blackAlpha.100"
                          value={values.comment}
                        />
                      </InputGroup>
                      <FormErrorMessage>
                        {form.errors.displayName}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Spacer p="1" />
                <Button
                  type="submit"
                  variant="solid"
                  colorScheme="blue"
                  disabled={!dirty || !isValid}
                >
                  Finish
                </Button>
              </Stack>
            </Form>
          );
        }}
      </Formik>
    </Callout>
  );
};
