import * as OpCodes from "./opCodes/deferred.js";
/** @internal */
const DeferredSymbolKey = "effect/Deferred";
/** @internal */
export const DeferredTypeId = /*#__PURE__*/Symbol.for(DeferredSymbolKey);
/** @internal */
export const deferredVariance = {
  _E: _ => _,
  _A: _ => _
};
/** @internal */
export const pending = joiners => {
  return {
    _tag: OpCodes.OP_STATE_PENDING,
    joiners
  };
};
/** @internal */
export const done = effect => {
  return {
    _tag: OpCodes.OP_STATE_DONE,
    effect
  };
};
//# sourceMappingURL=deferred.js.map