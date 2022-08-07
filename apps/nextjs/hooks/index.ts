import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { AppState, AppDispatch } from "store";

export * from "./useLabelBundle";
export * from "./useNavProps";
export * from "./useDonationsSubscription";
export * from "./useResizeListener";
export * from "./useRouteChangeListeners";
export * from "./useStatusListenererMiddleware";
export * from "./useTheme";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
