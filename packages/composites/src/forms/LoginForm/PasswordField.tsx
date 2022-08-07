import { forwardRef, useRef } from "react";
import {
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
  useDisclosure,
  useMergeRefs,
} from "@josulliv101/core";
import { HiEye, HiEyeOff } from "react-icons/hi";

export const PasswordField = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { isOpen, onToggle } = useDisclosure();
  const inputRef = useRef<HTMLInputElement>(null);

  const mergeRef = useMergeRefs(inputRef, ref);
  const onClickReveal = () => {
    onToggle();
    if (inputRef.current) {
      inputRef.current.focus({ preventScroll: true });
    }
  };

  return (
    <FormControl>
      <FormLabel htmlFor="password">Password</FormLabel>
      <InputGroup>
        <InputRightElement>
          <IconButton
            aria-label={isOpen ? "Mask password" : "Reveal password"}
            color="inherit"
            icon={isOpen ? <HiEyeOff /> : <HiEye />}
            onClick={onClickReveal}
            opacity={{ base: ".76", sm: ".5" }}
            variant="link"
          />
        </InputRightElement>
        <Input
          ref={mergeRef}
          autoComplete="current-password"
          id="password"
          name="password"
          required
          type={isOpen ? "text" : "password"}
          {...props}
        />
      </InputGroup>
    </FormControl>
  );
});

PasswordField.displayName = "PasswordField";
