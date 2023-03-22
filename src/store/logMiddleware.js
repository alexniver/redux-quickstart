export const logMiddleware = store => next => action => {
  return next(action);
}
