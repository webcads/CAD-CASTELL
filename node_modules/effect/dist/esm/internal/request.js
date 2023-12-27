import { dual } from "../Function.js";
import { hasProperty } from "../Predicate.js";
import * as completedRequestMap from "./completedRequestMap.js";
import * as core from "./core.js";
import * as Data from "./data.js";
/** @internal */
const RequestSymbolKey = "effect/Request";
/** @internal */
export const RequestTypeId = /*#__PURE__*/Symbol.for(RequestSymbolKey);
/** @internal */
const requestVariance = {
  _E: _ => _,
  _A: _ => _
};
/** @internal */
export const isRequest = u => hasProperty(u, RequestTypeId);
/** @internal */
export const of = () => args =>
// @ts-expect-error
Data.struct({
  [RequestTypeId]: requestVariance,
  ...args
});
/** @internal */
export const tagged = tag => args =>
// @ts-expect-error
Data.struct({
  [RequestTypeId]: requestVariance,
  _tag: tag,
  ...args
});
/** @internal */
export const complete = /*#__PURE__*/dual(2, (self, result) => core.fiberRefGetWith(completedRequestMap.currentRequestMap, map => core.sync(() => {
  if (map.has(self)) {
    const entry = map.get(self);
    if (!entry.state.completed) {
      entry.state.completed = true;
      core.deferredUnsafeDone(entry.result, result);
    }
  }
})));
/** @internal */
export const completeEffect = /*#__PURE__*/dual(2, (self, effect) => core.matchEffect(effect, {
  onFailure: error => complete(self, core.exitFail(error)),
  onSuccess: value => complete(self, core.exitSucceed(value))
}));
/** @internal */
export const fail = /*#__PURE__*/dual(2, (self, error) => complete(self, core.exitFail(error)));
/** @internal */
export const succeed = /*#__PURE__*/dual(2, (self, value) => complete(self, core.exitSucceed(value)));
/** @internal */
export class Listeners {
  count = 0;
  observers = new Set();
  addObserver(f) {
    this.observers.add(f);
  }
  removeObserver(f) {
    this.observers.delete(f);
  }
  increment() {
    this.count++;
    this.observers.forEach(f => f(this.count));
  }
  decrement() {
    this.count--;
    this.observers.forEach(f => f(this.count));
  }
}
/**
 * @internal
 */
export const filterOutCompleted = requests => core.fiberRefGetWith(completedRequestMap.currentRequestMap, map => core.succeed(requests.filter(request => !(map.get(request)?.state.completed === true))));
//# sourceMappingURL=request.js.map