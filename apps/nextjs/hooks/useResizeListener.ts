import debounce from "lodash.debounce";
import { useEffect } from "react";
import { isClient } from "@josulliv101/connect-client";

export function useResizeListener(callback: () => void) {
  useEffect(() => {
    if (!isClient() || !callback) {
      return () => "";
    }

    const handleResize = debounce(
      () => {
        callback();
      },
      300,
      { leading: true, trailing: false }
    );

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
}
