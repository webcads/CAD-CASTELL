import * as Equal from "../../Equal.js";
import { dual, pipe } from "../../Function.js";
import * as Hash from "../../Hash.js";
import * as HashSet from "../../HashSet.js";
import * as Option from "../../Option.js";
import { pipeArguments } from "../../Pipeable.js";
import { hasProperty } from "../../Predicate.js";
import * as metricKeyType from "./keyType.js";
import * as metricLabel from "./label.js";
/** @internal */
const MetricKeySymbolKey = "effect/MetricKey";
/** @internal */
export const MetricKeyTypeId = /*#__PURE__*/Symbol.for(MetricKeySymbolKey);
/** @internal */
const metricKeyVariance = {
  _Type: _ => _
};
/** @internal */
class MetricKeyImpl {
  name;
  keyType;
  description;
  tags;
  [MetricKeyTypeId] = metricKeyVariance;
  constructor(name, keyType, description, tags = HashSet.empty()) {
    this.name = name;
    this.keyType = keyType;
    this.description = description;
    this.tags = tags;
  }
  [Hash.symbol]() {
    return pipe(Hash.hash(this.name), Hash.combine(Hash.hash(this.keyType)), Hash.combine(Hash.hash(this.description)), Hash.combine(Hash.hash(this.tags)));
  }
  [Equal.symbol](u) {
    return isMetricKey(u) && this.name === u.name && Equal.equals(this.keyType, u.keyType) && Equal.equals(this.description, u.description) && Equal.equals(this.tags, u.tags);
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
}
/** @internal */
export const isMetricKey = u => hasProperty(u, MetricKeyTypeId);
/** @internal */
export const counter = (name, options) => new MetricKeyImpl(name, metricKeyType.counter(options), Option.fromNullable(options?.description));
/** @internal */
export const frequency = (name, description) => new MetricKeyImpl(name, metricKeyType.frequency, Option.fromNullable(description));
/** @internal */
export const gauge = (name, options) => new MetricKeyImpl(name, metricKeyType.gauge(options), Option.fromNullable(options?.description));
/** @internal */
export const histogram = (name, boundaries, description) => new MetricKeyImpl(name, metricKeyType.histogram(boundaries), Option.fromNullable(description));
/** @internal */
export const summary = options => new MetricKeyImpl(options.name, metricKeyType.summary(options), Option.fromNullable(options.description));
/** @internal */
export const tagged = /*#__PURE__*/dual(3, (self, key, value) => taggedWithLabelSet(self, HashSet.make(metricLabel.make(key, value))));
/** @internal */
export const taggedWithLabels = /*#__PURE__*/dual(2, (self, extraTags) => taggedWithLabelSet(self, HashSet.fromIterable(extraTags)));
/** @internal */
export const taggedWithLabelSet = /*#__PURE__*/dual(2, (self, extraTags) => HashSet.size(extraTags) === 0 ? self : new MetricKeyImpl(self.name, self.keyType, self.description, pipe(self.tags, HashSet.union(extraTags))));
//# sourceMappingURL=key.js.map