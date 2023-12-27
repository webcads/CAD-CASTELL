/**
 * @since 2.0.0
 */
import type * as Context from "./Context.js";
import type { FiberRef } from "./FiberRef.js";
import type * as Request from "./Request.js";
import type * as RequestResolver from "./RequestResolver.js";
/**
 * `RequestBlock` captures a collection of blocked requests as a data
 * structure. By doing this the library is able to preserve information about
 * which requests must be performed sequentially and which can be performed in
 * parallel, allowing for maximum possible batching and pipelining while
 * preserving ordering guarantees.
 *
 * @since 2.0.0
 * @category models
 */
export type RequestBlock<R> = Empty | Par<R> | Seq<R> | Single<R>;
/**
 * @since 2.0.0
 * @category models
 */
export declare namespace RequestBlock {
    /**
     * @since 2.0.0
     * @category models
     */
    interface Reducer<R, Z> {
        readonly emptyCase: () => Z;
        readonly parCase: (left: Z, right: Z) => Z;
        readonly singleCase: (dataSource: RequestResolver.RequestResolver<unknown, R>, blockedRequest: Request.Entry<unknown>) => Z;
        readonly seqCase: (left: Z, right: Z) => Z;
    }
}
/**
 * @since 2.0.0
 * @category models
 */
export interface Empty {
    readonly _tag: "Empty";
}
/**
 * @since 2.0.0
 * @category models
 */
export interface Par<R> {
    readonly _tag: "Par";
    readonly left: RequestBlock<R>;
    readonly right: RequestBlock<R>;
}
/**
 * @since 2.0.0
 * @category models
 */
export interface Seq<R> {
    readonly _tag: "Seq";
    readonly left: RequestBlock<R>;
    readonly right: RequestBlock<R>;
}
/**
 * @since 2.0.0
 * @category models
 */
export interface Single<R> {
    readonly _tag: "Single";
    readonly dataSource: RequestResolver.RequestResolver<unknown, R>;
    readonly blockedRequest: Request.Entry<unknown>;
}
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const single: <R, A>(dataSource: RequestResolver.RequestResolver<A, R>, blockedRequest: Request.Entry<A>) => RequestBlock<R>;
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const empty: RequestBlock<never>;
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const mapRequestResolvers: <R, A, R2>(self: RequestBlock<R>, f: (dataSource: RequestResolver.RequestResolver<A, R>) => RequestResolver.RequestResolver<A, R2>) => RequestBlock<R | R2>;
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const parallel: <R, R2>(self: RequestBlock<R>, that: RequestBlock<R2>) => RequestBlock<R | R2>;
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const reduce: <R, Z>(self: RequestBlock<R>, reducer: RequestBlock.Reducer<R, Z>) => Z;
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const sequential: <R, R2>(self: RequestBlock<R>, that: RequestBlock<R2>) => RequestBlock<R | R2>;
/**
 * Provides each data source with part of its required environment.
 *
 * @since 2.0.0
 * @category utils
 */
export declare const mapInputContext: <R0, R>(self: RequestBlock<R>, f: (context: Context.Context<R0>) => Context.Context<R>) => RequestBlock<R0>;
/**
 * Provides each data source with a fiber ref value.
 *
 * @since 2.0.0
 * @category utils
 */
export declare const locally: <R, A>(self: RequestBlock<R>, ref: FiberRef<A>, value: A) => RequestBlock<R>;
//# sourceMappingURL=RequestBlock.d.ts.map