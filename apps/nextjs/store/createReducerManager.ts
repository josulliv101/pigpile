import { combineReducers, ReducersMapObject, Reducer, Action } from "redux";
import { AppState } from "store";

export interface ReducaerManagerApi {
  getReducerMap: () => ReducersMapObject;
  reduce: (state: AppState, action: Action) => ReturnType<typeof combineReducers>;
  add: (key: string, reducer: Reducer) => void;
  remove: (key: string) => void;
}

export function createReducerManager(initialReducers: ReducersMapObject): ReducaerManagerApi {
  const reducers = { ...initialReducers };
  let combinedReducer = combineReducers(reducers);
  let keysToRemove: string[] = [];

  return {
    getReducerMap: () => reducers,
    reduce: (state, action) => {
      // If any reducers have been removed, clean up their state first
      if (keysToRemove.length > 0) {
        state = { ...state };
        for (const key of keysToRemove) {
          delete state[key];
        }
        keysToRemove = [];
      }
      return combinedReducer(state, action);
    },

    add: (key: string, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return;
      }

      reducers[key] = reducer;
      combinedReducer = combineReducers(reducers);
    },

    remove: (key: string) => {
      if (!key || !reducers[key]) {
        return;
      }

      delete reducers[key];
      keysToRemove.push(key);
      combinedReducer = combineReducers(reducers);
    },
  };
}
