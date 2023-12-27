import * as Exit from "../../Exit.js";
import * as OpCodes from "../opCodes/continuation.js";
/** @internal */
export const ContinuationTypeId = /*#__PURE__*/Symbol.for("effect/ChannelContinuation");
/** @internal */
const continuationVariance = {
  _Env: _ => _,
  _InErr: _ => _,
  _InElem: _ => _,
  _InDone: _ => _,
  _OutErr: _ => _,
  _OutDone: _ => _,
  _OutErr2: _ => _,
  _OutElem: _ => _,
  _OutDone2: _ => _
};
/** @internal */
export class ContinuationKImpl {
  onSuccess;
  onHalt;
  _tag = OpCodes.OP_CONTINUATION_K;
  [ContinuationTypeId] = continuationVariance;
  constructor(onSuccess, onHalt) {
    this.onSuccess = onSuccess;
    this.onHalt = onHalt;
  }
  onExit(exit) {
    return Exit.isFailure(exit) ? this.onHalt(exit.cause) : this.onSuccess(exit.value);
  }
}
/** @internal */
export class ContinuationFinalizerImpl {
  finalizer;
  _tag = OpCodes.OP_CONTINUATION_FINALIZER;
  [ContinuationTypeId] = continuationVariance;
  constructor(finalizer) {
    this.finalizer = finalizer;
  }
}
//# sourceMappingURL=continuation.js.map