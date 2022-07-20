import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useViewportScroll } from "framer-motion";
import debounce from "lodash.debounce";
import { selectAppState, appSlice } from "../../../store";

export default function useIsScrolledY() {
  const { scrollY } = useViewportScroll();
  const [y, setY] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    return scrollY.onChange(
      debounce(() => setY(scrollY.get()), 150, {
        leading: true,
        trailing: true,
      })
    );
  }, [scrollY]);

  const resetWindowScrollPosition = useCallback(
    () => window?.scrollTo(0, 0),
    []
  );

  useEffect(() => {
    window.onbeforeunload = function () {
      dispatch(appSlice.actions.setState({ isUnloading: true }));
      resetWindowScrollPosition();
    };
  }, [dispatch, resetWindowScrollPosition]);

  return y > 0;
}
