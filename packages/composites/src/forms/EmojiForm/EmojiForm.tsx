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
  // useToast,
} from "@josulliv101/core";
import { Donation } from "@josulliv101/types";
import { EmojiField } from "./EmojiField";

const emojis = [
  "❤️",
  "💚",
  "🖤",
  "😊",
  "😎",
  "🥰",
  "🌷",
  "🌹",
  "🌻",
  "🌼",
  "🐶",
  "🐱",
  "🐭",
  "🐨",
  "🦊",
  "🐰",
  "💪",
  "✌️",
  "🤟",
  "🤘",
  "🍔",
  "🍕",
  "🍎",
  "🍪",
];

export interface EmojiFormProps extends HTMLChakraProps<"div"> {
  onSubmit: (d: Partial<Donation>) => void;
}

const FieldAnonymousCheckBox = () => {
  return (
    <Field name="isAnonymous">
      {({ field, form }: FieldProps) => {
        return (
          <FormControl isInvalid={!!form.errors.anonymous && !!form.touched.anonymous}>
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
  return (
    <Callout as={Stack} spacing="8" {...props}>
      <Text>Thank you! One final step below.</Text>
      <Formik
        initialValues={{
          displayName: "",
          comment: "",
          emoji: "😊",
          isAnonymous: false,
        }}
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
                    <FormControl isInvalid={form.errors.displayName && form.touched.displayName}>
                      <InputGroup>
                        <Input
                          {...field}
                          // isRequired={!values.anonymous}
                          isDisabled={values.anonymous}
                          id="displayName"
                          aria-label="displayName"
                          placeholder="Name to display"
                          _placeholder={{ color: "whiteAlpha.800" }}
                          value={values.anonymous ? "Anonymous" : values.displayName}
                        />
                        <InputRightAddon
                          fontSize="xl"
                          px="2"
                          bgColor="gray.50"
                          children={values.emoji}
                        />
                      </InputGroup>
                      <FormErrorMessage>{form.errors.displayName}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <FieldAnonymousCheckBox />
                <Text pt="20px">Select Your Emoji</Text>
                <Field name="emoji">
                  {({ field, form }) => (
                    <FormControl>
                      <EmojiField {...field} />
                      <FormErrorMessage>{form.errors.displayName}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
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
                          value={values.comment}
                        />
                      </InputGroup>
                      <FormErrorMessage>{form.errors.displayName}</FormErrorMessage>
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
