import { useField } from "formik";
import { Flex, useRadioGroup } from "@josulliv101/core";
import { RadioCard } from "./RadioCard";
import { defaultEmojis } from "./defaultEmojis";

export function EmojiField({ name, value, onChange, onBlur }) {
  const [field, , { setValue }] = useField({ name, value });
  const { getRootProps, getRadioProps } = useRadioGroup({
    ...field,
    onChange: (...args) => {
      setValue(...args);
    },
  });

  const group = getRootProps();

  return (
    <Flex flexWrap="wrap" {...group}>
      {defaultEmojis.map((val) => {
        const radio = getRadioProps({ value: val });
        return (
          <RadioCard key={val} {...radio}>
            {val}
          </RadioCard>
        );
      })}
    </Flex>
  );
}
