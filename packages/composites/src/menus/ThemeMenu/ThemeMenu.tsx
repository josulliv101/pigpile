import { useEffect, useState } from "react";
import {
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverCloseButton,
  useColorMode,
} from "@pigpile/core";
import {
  ActiveThemeIds as ActiveThemeOptionIds,
  ThemeOptions,
} from "@pigpile/theme";
import { PaintBrushIcon, ThemeTabs } from "./";

export interface ThemeMenuProps {
  activeThemeOptionIds: ActiveThemeOptionIds;
  themeOptions: ThemeOptions;
  onThemeOptionChange: () => void;
}

export const ThemeMenu: React.FC<ThemeMenuProps> = ({
  themeOptions,
  onThemeOptionChange,
}) => {
  const { setColorMode } = useColorMode();
  const { colorMode } = themeOptions;

  useEffect(() => {
    const { id: activeColorMode } = colorMode.options[colorMode.index];
    // TODO find better way to avoid animation disruption when color mode changes
    setTimeout(() => setColorMode(activeColorMode), 300);
  }, [colorMode]);

  return (
    <Popover placement="bottom-end" size="10rem">
      <PopoverTrigger>
        <IconButton
          colorScheme="blue"
          borderColor="transparent"
          aria-label="Theme"
          icon={<PaintBrushIcon boxSize="5" color="gray.200" />}
        />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverCloseButton />
        <PopoverHeader bgColor="gray.200" _dark={{ bgColor: "gray.600" }}>
          Theme Options
        </PopoverHeader>
        <PopoverBody mt="4">
          {Object.keys(themeOptions).map((key) => (
            <ThemeTabs
              key={key}
              id={key}
              {...themeOptions[key]}
              onChange={onThemeOptionChange}
            />
          ))}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
