import * as Equal from "../../Equal.js";
import { pipe } from "../../Function.js";
import * as Hash from "../../Hash.js";
import { pipeArguments } from "../../Pipeable.js";
import { hasProperty } from "../../Predicate.js";
/** @internal */
const MetricLabelSymbolKey = "effect/MetricLabel";
/** @internal */
export const MetricLabelTypeId = /*#__PURE__*/Symbol.for(MetricLabelSymbolKey);
/** @internal */
class MetricLabelImpl {
  key;
  value;
  [MetricLabelTypeId] = MetricLabelTypeId;
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
  [Hash.symbol]() {
    return pipe(Hash.hash(MetricLabelSymbolKey), Hash.combine(Hash.hash(this.key)), Hash.combine(Hash.hash(this.value)));
  }
  [Equal.symbol](that) {
    return isMetricLabel(that) && this.key === that.key && this.value === that.value;
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
}
/** @internal */
export const make = (key, value) => {
  return new MetricLabelImpl(key, value);
};
/** @internal */
export const isMetricLabel = u => hasProperty(u, MetricLabelTypeId);
//# sourceMappingURL=label.js.map