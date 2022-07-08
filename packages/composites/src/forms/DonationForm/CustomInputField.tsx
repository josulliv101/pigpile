import { useEffect, useRef } from "react";
import {
  HStack,
  Stack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Text,
} from "@pigpile/core";
import { FaPencilAlt } from "react-icons/fa";

export interface CustomInputFieldProps extends HTMLChakraProps<"div"> {
  label?: string;
  numberOfUnits?: number;
  onChange: (units) => void;
}

export const CustomInputField: React.FC<CustomInputFieldProps> = ({
  amount = 0,
  label = "Donate how many?",
  numberOfUnits,
  onChange,
}) => {
  const inputEl = useRef(null);
  useEffect(() => {
    if (inputEl?.current) {
      inputEl.current.focus();
    }
  }, []);
  return (
    <NumberInput
      mx="3"
      display="inline-flex"
      maxW="66px"
      size="xs"
      onChange={onChange}
      defaultValue={numberOfUnits}
      min={1}
      max={500}
      borderColor="whiteAlpha.500"
    >
      <NumberInputField ref={inputEl} arial-label="update number of units" />
      <NumberInputStepper borderColor="whiteAlpha.500">
        <NumberIncrementStepper
          borderColor="whiteAlpha.500"
          arial-label="increment number of units"
        />
        <NumberDecrementStepper borderColor="whiteAlpha.500" />
      </NumberInputStepper>
    </NumberInput>
  );
};
