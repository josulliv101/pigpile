import { useEffect, useState } from "react";
import { useViewportScroll } from "framer-motion";
import debounce from "lodash.debounce";

export default function useIsScrolledY() {
  const { scrollY } = useViewportScroll();
  const [y, setY] = useState(0);
  useEffect(() => {
    return scrollY.onChange(
      debounce(() => setY(scrollY.get()), 150, {
        leading: true,
        trailing: true,
      })
    );
  }, [scrollY]);

  return y > 0;
}
