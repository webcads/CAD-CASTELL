/**
 * @since 2.0.0
 */
/**
 * @since 2.0.0
 * @category symbols
 */
export declare const NodeInspectSymbol: unique symbol;
/**
 * @since 2.0.0
 * @category symbols
 */
export type NodeInspectSymbol = typeof NodeInspectSymbol;
/**
 * @since 2.0.0
 * @category models
 */
export interface Inspectable {
    readonly toString: () => string;
    readonly toJSON: () => unknown;
    readonly [NodeInspectSymbol]: () => unknown;
}
/**
 * @since 2.0.0
 */
export declare const toJSON: (x: unknown) => unknown;
/**
 * @since 2.0.0
 */
export declare const toString: (x: unknown) => string;
//# sourceMappingURL=Inspectable.d.ts.map