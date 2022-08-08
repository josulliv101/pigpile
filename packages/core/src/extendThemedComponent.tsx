/* eslint-disable @typescript-eslint/no-explicit-any */
import { forwardRef } from "react";
import { ChakraComponent, useChakra, ComponentWithAs } from "@chakra-ui/react";
import { memoizedGet, mergeWith } from "@chakra-ui/utils";

/**
 * Extending gives the ability for the new component to have its
 * own defaults (colorScheme, size, variants) set in the theme.
 *
 * Any default not set will inherit that of the parent component.
 */
export const extendThemedComponent = (
  extendedName: string,
  BaseComponentRecord: Record<string, ComponentWithAs<any, any>>,
  defaultProps = {}
): ComponentWithAs<any, any> => {
  const [[baseName, BaseComponent]] = Object.entries(BaseComponentRecord);
  const C: ChakraComponent<"div"> = forwardRef((props, ref) => {
    const { theme } = useChakra();
    const styleConfig = mergeWith(
      {},
      memoizedGet(theme, `components.${baseName}`),
      defaultProps,
      memoizedGet(theme, `components.${extendedName}`)
    );
    return (
      <BaseComponent
        ref={ref}
        styleConfig={styleConfig}
        {...props}
      />
    );
  });
  C.displayName = extendedName;
  return C;
};
