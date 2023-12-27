import * as Equal from "../Equal.js";
import * as Hash from "../Hash.js";
import { pipeArguments } from "../Pipeable.js";
import * as Data from "./data.js";
import * as OpCodes from "./opCodes/effect.js";
import { moduleVersion } from "./version.js";
/** @internal */
export const EffectTypeId = /*#__PURE__*/Symbol.for("effect/Effect");
/** @internal */
export const StreamTypeId = /*#__PURE__*/Symbol.for("effect/Stream");
/** @internal */
export const SinkTypeId = /*#__PURE__*/Symbol.for("effect/Sink");
/** @internal */
export const ChannelTypeId = /*#__PURE__*/Symbol.for("effect/Channel");
/** @internal */
export const effectVariance = {
  _R: _ => _,
  _E: _ => _,
  _A: _ => _,
  _V: moduleVersion
};
/** @internal */
export const sinkVariance = {
  _R: _ => _,
  _E: _ => _,
  _In: _ => _,
  _L: _ => _,
  _Z: _ => _
};
/** @internal */
export const channelVariance = {
  _Env: _ => _,
  _InErr: _ => _,
  _InElem: _ => _,
  _InDone: _ => _,
  _OutErr: _ => _,
  _OutElem: _ => _,
  _OutDone: _ => _
};
/** @internal */
export const EffectPrototype = {
  [EffectTypeId]: effectVariance,
  [StreamTypeId]: effectVariance,
  [SinkTypeId]: sinkVariance,
  [ChannelTypeId]: channelVariance,
  [Equal.symbol](that) {
    return this === that;
  },
  [Hash.symbol]() {
    return Hash.random(this);
  },
  pipe() {
    return pipeArguments(this, arguments);
  }
};
/** @internal */
export const CommitPrototype = {
  ...EffectPrototype,
  _op: OpCodes.OP_COMMIT
};
/** @internal */
export const StructuralCommitPrototype = {
  ...CommitPrototype,
  ...Data.Structural.prototype
};
/** @internal */
export const Base = /*#__PURE__*/function () {
  function Base() {}
  Base.prototype = CommitPrototype;
  return Base;
}();
/** @internal */
export const StructuralBase = /*#__PURE__*/function () {
  function Base() {}
  Base.prototype = StructuralCommitPrototype;
  return Base;
}();
//# sourceMappingURL=effectable.js.map