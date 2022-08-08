import debounce from "lodash.debounce";
import { useEffect } from "react";

export function useResizeListener(callback: () => void) {
  useEffect(() => {
    if (typeof window === "undefined" || !callback) {
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
