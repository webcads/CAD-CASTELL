import * as Chunk from "../../Chunk.js";
import * as Equal from "../../Equal.js";
import { pipe } from "../../Function.js";
import * as Hash from "../../Hash.js";
import { pipeArguments } from "../../Pipeable.js";
import { hasProperty } from "../../Predicate.js";
import * as ReadonlyArray from "../../ReadonlyArray.js";
/** @internal */
const MetricBoundariesSymbolKey = "effect/MetricBoundaries";
/** @internal */
export const MetricBoundariesTypeId = /*#__PURE__*/Symbol.for(MetricBoundariesSymbolKey);
/** @internal */
class MetricBoundariesImpl {
  values;
  [MetricBoundariesTypeId] = MetricBoundariesTypeId;
  constructor(values) {
    this.values = values;
  }
  [Hash.symbol]() {
    return pipe(Hash.hash(MetricBoundariesSymbolKey), Hash.combine(Hash.hash(this.values)));
  }
  [Equal.symbol](u) {
    return isMetricBoundaries(u) && Equal.equals(this.values, u.values);
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
}
/** @internal */
export const isMetricBoundaries = u => hasProperty(u, MetricBoundariesTypeId);
/** @internal */
export const fromChunk = chunk => {
  const values = pipe(chunk, Chunk.appendAll(Chunk.of(Number.POSITIVE_INFINITY)), Chunk.dedupe);
  return new MetricBoundariesImpl(values);
};
/** @internal */
export const linear = options => pipe(ReadonlyArray.makeBy(options.count - 1, i => options.start + i * options.width), Chunk.unsafeFromArray, fromChunk);
/** @internal */
export const exponential = options => pipe(ReadonlyArray.makeBy(options.count - 1, i => options.start * Math.pow(options.factor, i)), Chunk.unsafeFromArray, fromChunk);
//# sourceMappingURL=boundaries.js.map