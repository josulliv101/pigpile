import { useCallback, useEffect, useState } from "react";
import { useViewportScroll } from "framer-motion";
import debounce from "lodash.debounce";
import { appSlice } from "store";
import { useAppDispatch } from "hooks";

export default function useIsScrolledY() {
  const { scrollY } = useViewportScroll();
  const [y, setY] = useState(0);
  const dispatch = useAppDispatch();

  useEffect(() => {
    return scrollY.onChange(
      debounce(() => setY(scrollY.get()), 300, {
        leading: true,
        trailing: true,
      })
    );
  }, [scrollY]);

  const resetWindowScrollPosition = useCallback(() => window?.scrollTo(0, 0), []);

  useEffect(() => {
    window.onbeforeunload = function () {
      dispatch(appSlice.actions.unloading());
      resetWindowScrollPosition();
    };
  }, [dispatch, resetWindowScrollPosition]);

  return y > 0;
}
