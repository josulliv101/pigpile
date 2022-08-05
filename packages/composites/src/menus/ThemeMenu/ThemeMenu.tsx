import { useEffect } from "react";
import {
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverCloseButton,
  useColorMode,
} from "@josulliv101/core";
import {
  ActiveThemeIds as ActiveThemeOptionIds,
  ThemeOptions,
} from "@josulliv101/theme";
import { PaintBrushIcon, ThemeTabs } from "./";

export interface ThemeMenuProps {
  activeIndexes: ActiveThemeOptionIds;
  themeOptions: ThemeOptions;
  onThemeOptionChange: (s: string, i: number) => void;
}

export const ThemeMenu: React.FC<ThemeMenuProps> = ({
  activeIndexes = {},
  themeOptions,
  onThemeOptionChange,
}) => {
  const { setColorMode } = useColorMode();
  const { colorMode } = themeOptions;
  const colorModeIndex = activeIndexes.colorMode;

  useEffect(() => {
    const { id: activeColorMode } = colorMode.options[colorModeIndex];
    // TODO find better way to avoid animation disruption when color mode changes
    setTimeout(() => setColorMode(activeColorMode), 300);
  }, [colorModeIndex]);

  return (
    <Popover
      placement="bottom-end"
      size="10rem"
    >
      <PopoverTrigger>
        <IconButton
          // colorScheme="blackAlpha"
          _active={{ bgColor: "blackAlpha.50" }}
          _focusVisible={{ outlineColor: "white" }}
          _hover={{ bgColor: "blackAlpha.50" }}
          aria-label="Theme"
          bgColor="transparent"
          borderColor="transparent"
          icon={
            <PaintBrushIcon
              boxSize="5"
              color="gray.200"
            />
          }
        />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverCloseButton />
        <PopoverHeader
          _dark={{ bgColor: "gray.600" }}
          bgColor="gray.200"
        >
          Theme Options
        </PopoverHeader>
        <PopoverBody
          _dark={{ bgColor: "gray.700" }}
          bgColor="gray.50"
          pt="4"
        >
          {Object.keys(themeOptions).map((key) => (
            <ThemeTabs
              key={key}
              id={key}
              {...themeOptions[key]}
              index={activeIndexes?.[key] ?? 0}
              onChange={onThemeOptionChange}
            />
          ))}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
