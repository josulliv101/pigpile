const actions = ["status/setStatus", "donation/add/rejected"];

// TODO use better id generator
const getId = () => new Date().getTime().toString(36);

export const addUniqueIdMiddleware = () => (next) => (action) => {
  if (!actions.includes(action.type)) {
    return next(action);
  }
  const result = next({
    ...action,
    payload: { ...action.payload, id: getId() },
  });
  return result;
};
