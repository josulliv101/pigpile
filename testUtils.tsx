import * as React from "react";
import {
  render as rtlRender,
  RenderOptions,
  RenderResult,
} from "@testing-library/react";
import { Provider } from "react-redux";
// import { makeStore } from "@josulliv101/nextjs";
import { EnhancedStore } from "@reduxjs/toolkit";

/*type ReduxRenderOptions = {
  store?: EnhancedStore;
  renderOptions?: Omit<RenderOptions, "wrapper">;
};

const render = (
  ui: React.ReactElement,
  { store = makeStore(), ...renderOptions }: ReduxRenderOptions = {}
): RenderResult => {
  function Wrapper({ children }: { children?: React.ReactNode }): React.ReactElement {
    return (
      <Provider store={store}>
        {children}
      </Provider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};*/

// re-export everything
export * from "@testing-library/react";

// override render method / comment out for now until redux store is needed
// export { render };
