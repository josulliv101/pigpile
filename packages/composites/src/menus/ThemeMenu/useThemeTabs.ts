import { useEffect, useMemo } from "react";
import { useDispatch, useSelector, Dispatch } from "react-redux";
import { useColorMode } from "@chakra-ui/react";
import { selectThemeOptions, updateThemeActiveIndex } from "@josulliv101/store";

const makeOnChangeHandler = (dispatch, key) => (index) =>
  dispatch(updateThemeActiveIndex({ key, index }));

export function useThemeTabs() {
  const dispatch = useDispatch();
  const themeOptions = useSelector(selectThemeOptions);
  const { colorMode } = themeOptions;
  const { setColorMode } = useColorMode();

  const handlers = useMemo(
    () =>
      Object.keys(themeOptions).reduce(
        (acc, id) => ({ ...acc, [id]: makeOnChangeHandler(dispatch, id) }),
        {}
      ),
    [dispatch]
  );

  const items = useMemo(() => {
    return Object.entries(themeOptions).map(([key, item]) => ({
      ...item,
      onChange: handlers[key],
    }));
  }, [themeOptions]);

  useEffect(() => {
    const { id: activeColorMode } = colorMode.options[colorMode.index];
    setColorMode(activeColorMode);
  }, [colorMode]);

  return {
    items,
  };
}
