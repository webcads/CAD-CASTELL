import * as Chunk from "../Chunk.js";
import * as Equal from "../Equal.js";
import { pipe } from "../Function.js";
import * as Hash from "../Hash.js";
import { hasProperty } from "../Predicate.js";
/** @internal */
const ConfigSecretSymbolKey = "effect/ConfigSecret";
/** @internal */
export const ConfigSecretTypeId = /*#__PURE__*/Symbol.for(ConfigSecretSymbolKey);
/** @internal */
export const proto = {
  [ConfigSecretTypeId]: ConfigSecretTypeId,
  [Hash.symbol]() {
    return pipe(Hash.hash(ConfigSecretSymbolKey), Hash.combine(Hash.array(this.raw)));
  },
  [Equal.symbol](that) {
    return isConfigSecret(that) && this.raw.length === that.raw.length && this.raw.every((v, i) => Equal.equals(v, that.raw[i]));
  }
};
/** @internal */
export const isConfigSecret = u => hasProperty(u, ConfigSecretTypeId);
/** @internal */
export const make = bytes => {
  const secret = Object.create(proto);
  Object.defineProperty(secret, "toString", {
    enumerable: false,
    value() {
      return "ConfigSecret(<redacted>)";
    }
  });
  Object.defineProperty(secret, "raw", {
    enumerable: false,
    value: bytes
  });
  return secret;
};
/** @internal */
export const fromChunk = chunk => {
  return make(Chunk.toReadonlyArray(chunk).map(char => char.charCodeAt(0)));
};
/** @internal */
export const fromString = text => {
  return make(text.split("").map(char => char.charCodeAt(0)));
};
/** @internal */
export const value = self => {
  return self.raw.map(byte => String.fromCharCode(byte)).join("");
};
/** @internal */
export const unsafeWipe = self => {
  for (let i = 0; i < self.raw.length; i++) {
    self.raw[i] = 0;
  }
};
//# sourceMappingURL=configSecret.js.map