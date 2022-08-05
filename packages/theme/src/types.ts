import { SwatchProps } from "@josulliv101/core";

export interface ChesterAbsolutePosition {
  top?: string;
  left?: string;
  bottom?: string;
  right?: string;
}

export enum ChesterAnimations {
  JUMP = "jump",
  WIGGLE = "wiggle",
}

export enum ColorModes {
  LIGHT = "light",
  DARK = "dark",
}

export interface ActiveThemeIds {
  colorSchemeId: string;
  themeId: string;
}

export interface ComponentsByColorScheme {
  colorScheme: string;
  components: string[];
}

export interface ComponentsByVariant {
  variant: string;
  components: string[];
}

export interface ComponentsBySize {
  size: string;
  components: string[];
}

export interface ColorScheme {
  id: string;
  swatch: SwatchProps;
  componentsByColorScheme: ComponentsByColorScheme[];
}

export interface UserTheme {
  id: string;
  label: string;
  bgImage: string;
  bgPosition: string;
  chesterPosition?: ChesterAbsolutePosition;
  componentsByVariant: ComponentsByVariant[];
  componentsBySize: ComponentsBySize[];
}

export type ColorSchemeMap = Record<string, ColorScheme>;
export type ThemeMap = Record<string, UserTheme>;

export interface ThemeOptions {
  activeThemeIds: ActiveThemeIds;
  colorSchemes: ColorSchemeMap;
  themes: ThemeMap;
}
