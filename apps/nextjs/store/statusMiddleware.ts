import { createListenerMiddleware } from "@reduxjs/toolkit";
import { statusSlice } from "store";

export const listenerMiddleware = createListenerMiddleware();

/*listenerMiddleware.startListening({
  actionCreator: statusSlice.actions.setStatus,
  effect: async (action, listenerApi) => {

    console.log('Middleware: ', action.payload)

  },
})
*/
