import { useRouter } from "next/router";
import { useEffect } from "react";
import { appSlice, selectAppState } from "store";
import { useAppDispatch, useAppSelector } from "hooks";
import * as ga from "../analytics";

export function useRouteChangeListeners() {
  const { isUnloading, isMobileNavOpen } = useAppSelector(selectAppState());
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleRouteChangeStart = (url: sting) => {
      console.log(`Loading: ${url}`);
    };
    const handleRouteChangStop = (url: string) => {
      if (isMobileNavOpen) {
        setTimeout(() => dispatch(appSlice.actions.closeMobileNav()), 0);
      }
      ga.pageview(url);
    };

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangStop);
    router.events.on("routeChangeError", handleRouteChangStop);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangStop);
      router.events.off("routeChangeError", handleRouteChangStop);
    };
  }, [router]);
  return { isUnloading };
}
