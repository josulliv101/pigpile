const effectedActions = ["status/setStatus"];

// TODO update id generator if needed
const getId = () => new Date().getTime().toString(36);

export function augmentActionPayloadWithId(storeAPI) {
  return function wrapDispatch(next) {
    return function handleAction(action) {
      if (!effectedActions.includes(action.type)) {
        return next(action);
      }
      console.log("dispatching", action);
      let result = next({
        ...action,
        payload: { ...action.payload, id: getId() },
      });
      console.log("next state", storeAPI.getState());
      return result;
    };
  };
}
