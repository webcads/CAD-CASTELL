import * as Equal from "../Equal.js";
import * as Hash from "../Hash.js";
/** @internal */
export const ArrayProto = /*#__PURE__*/Object.assign( /*#__PURE__*/Object.create(Array.prototype), {
  [Hash.symbol]() {
    return Hash.array(this);
  },
  [Equal.symbol](that) {
    if (Array.isArray(that) && this.length === that.length) {
      return this.every((v, i) => Equal.equals(v, that[i]));
    } else {
      return false;
    }
  }
});
/** @internal */
export const StructProto = {
  [Hash.symbol]() {
    return Hash.structure(this);
  },
  [Equal.symbol](that) {
    const selfKeys = Object.keys(this);
    const thatKeys = Object.keys(that);
    if (selfKeys.length !== thatKeys.length) {
      return false;
    }
    for (const key of selfKeys) {
      if (!(key in that && Equal.equals(this[key], that[key]))) {
        return false;
      }
    }
    return true;
  }
};
/** @internal */
export const Structural = /*#__PURE__*/function () {
  function Structural(args) {
    if (args) {
      Object.assign(this, args);
    }
  }
  Structural.prototype = StructProto;
  return Structural;
}();
/** @internal */
export const struct = as => Object.assign(Object.create(StructProto), as);
//# sourceMappingURL=data.js.map