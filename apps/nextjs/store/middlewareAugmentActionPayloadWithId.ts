const actions = ["status/setStatus", "donation/add/rejected"];

// TODO update id generator
const getId = () => new Date().getTime().toString(36);

export const middlewareAugmentActionPayloadWithId = () => (next) => (action) => {
  if (!actions.includes(action.type)) {
    return next(action);
  }
  let result = next({
    ...action,
    payload: { ...action.payload, id: getId() },
  });
  return result;
};
