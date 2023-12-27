/**
 * @since 2.0.0
 */
import * as Dual from "./Function.js";
import * as HashMap from "./HashMap.js";
import { NodeInspectSymbol, toJSON, toString } from "./Inspectable.js";
import * as MutableRef from "./MutableRef.js";
import * as Option from "./Option.js";
import { pipeArguments } from "./Pipeable.js";
const TypeId = /*#__PURE__*/Symbol.for("effect/MutableHashMap");
const MutableHashMapProto = {
  [TypeId]: TypeId,
  [Symbol.iterator]() {
    return this.backingMap.current[Symbol.iterator]();
  },
  toString() {
    return toString(this.toJSON());
  },
  toJSON() {
    return {
      _id: "MutableHashMap",
      values: Array.from(this).map(toJSON)
    };
  },
  [NodeInspectSymbol]() {
    return this.toJSON();
  },
  pipe() {
    return pipeArguments(this, arguments);
  }
};
const fromHashMap = backingMap => {
  const map = Object.create(MutableHashMapProto);
  map.backingMap = MutableRef.make(backingMap);
  return map;
};
/**
 * @since 2.0.0
 * @category constructors
 */
export const empty = () => fromHashMap(HashMap.empty());
/**
 * @since 2.0.0
 * @category constructors
 */
export const make = (...entries) => fromIterable(entries);
/**
 * @since 2.0.0
 * @category conversions
 */
export const fromIterable = entries => fromHashMap(HashMap.fromIterable(entries));
/**
 * @since 2.0.0
 * @category elements
 */
export const get = /*#__PURE__*/Dual.dual(2, (self, key) => HashMap.get(self.backingMap.current, key));
/**
 * @since 2.0.0
 * @category elements
 */
export const has = /*#__PURE__*/Dual.dual(2, (self, key) => Option.isSome(get(self, key)));
/**
 * Updates the value of the specified key within the `MutableHashMap` if it exists.
 *
 * @since 2.0.0
 */
export const modify = /*#__PURE__*/Dual.dual(3, (self, key, f) => {
  MutableRef.update(self.backingMap, HashMap.modify(key, f));
  return self;
});
/**
 * Set or remove the specified key in the `MutableHashMap` using the specified
 * update function.
 *
 * @since 2.0.0
 */
export const modifyAt = /*#__PURE__*/Dual.dual(3, (self, key, f) => {
  const result = f(get(self, key));
  if (Option.isSome(result)) {
    set(self, key, result.value);
  } else {
    remove(self, key);
  }
  return self;
});
/**
 * @since 2.0.0
 */
export const remove = /*#__PURE__*/Dual.dual(2, (self, key) => {
  MutableRef.update(self.backingMap, HashMap.remove(key));
  return self;
});
/**
 * @since 2.0.0
 */
export const set = /*#__PURE__*/Dual.dual(3, (self, key, value) => {
  MutableRef.update(self.backingMap, HashMap.set(key, value));
  return self;
});
/**
 * @since 2.0.0
 * @category elements
 */
export const size = self => HashMap.size(MutableRef.get(self.backingMap));
//# sourceMappingURL=MutableHashMap.js.map