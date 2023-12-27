/**
 * @since 2.0.0
 */
import type * as Chunk from "./Chunk.js";
import type * as Equal from "./Equal.js";
/**
 * @since 2.0.0
 * @category symbols
 */
export declare const ConfigSecretTypeId: unique symbol;
/**
 * @since 2.0.0
 * @category symbols
 */
export type ConfigSecretTypeId = typeof ConfigSecretTypeId;
/**
 * @since 2.0.0
 * @category models
 */
export interface ConfigSecret extends ConfigSecret.Proto, Equal.Equal {
}
/**
 * @since 2.0.0
 */
export declare namespace ConfigSecret {
    /**
     * @since 2.0.0
     * @category models
     */
    interface Proto {
        readonly [ConfigSecretTypeId]: ConfigSecretTypeId;
    }
}
/**
 * @since 2.0.0
 * @category refinements
 */
export declare const isConfigSecret: (u: unknown) => u is ConfigSecret;
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const make: (bytes: Array<number>) => ConfigSecret;
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const fromChunk: (chunk: Chunk.Chunk<string>) => ConfigSecret;
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const fromString: (text: string) => ConfigSecret;
/**
 * @since 2.0.0
 * @category getters
 */
export declare const value: (self: ConfigSecret) => string;
/**
 * @since 2.0.0
 * @category unsafe
 */
export declare const unsafeWipe: (self: ConfigSecret) => void;
//# sourceMappingURL=ConfigSecret.d.ts.map