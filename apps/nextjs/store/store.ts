import { createWrapper } from "next-redux-wrapper";
import { makeStore } from "./makeStore";

export * from "./getAuthApi";
export * from "./makeStore";

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const wrapper = createWrapper<AppStore>(makeStore);
