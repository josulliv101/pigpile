import { useEffect, useRef } from "react";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  HTMLChakraProps,
} from "@josulliv101/core";

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
      bgColor="blackAlpha.200"
      borderColor="whiteAlpha.500"
      defaultValue={numberOfUnits}
      display="inline-flex"
      max={500}
      maxW="100px"
      min={1}
      mx="3"
      onChange={onChange}
      size="lg"
    >
      <NumberInputField
        ref={inputEl}
        _focusVisible={{ outlineColor: "white" }}
        arial-label="update number of units"
      />
      <NumberInputStepper borderColor="whiteAlpha.500">
        <NumberIncrementStepper
          arial-label="increment number of units"
          borderColor="whiteAlpha.500"
        />
        <NumberDecrementStepper borderColor="whiteAlpha.500" />
      </NumberInputStepper>
    </NumberInput>
  );
};
