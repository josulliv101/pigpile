import { forwardRef } from "react";
import { ChakraComponent, useChakra, memoizedGet, mergeWith } from "@josulliv101/core";

export const extendThemedComponent = (
  extendedName: string,
  BaseComponentRecord: any,
  defaultProps = {}
): ChakraComponent<"div"> => {
  const [[baseName, BaseComponent]] = Object.entries(BaseComponentRecord);
  const C: ChakraComponent<"div"> = forwardRef((props, ref) => {
    const { theme } = useChakra();
    const styleConfig = mergeWith(
      {},
      memoizedGet(theme, `components.${baseName}`),
      defaultProps,
      memoizedGet(theme, `components.${extendedName}`)
    );
    return <BaseComponent ref={ref} styleConfig={styleConfig} {...props} />;
  });
  C.displayName = extendedName;
  return C;
};
