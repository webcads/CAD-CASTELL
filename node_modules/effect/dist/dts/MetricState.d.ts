/**
 * @since 2.0.0
 */
import type * as Chunk from "./Chunk.js";
import type * as Equal from "./Equal.js";
import type * as HashMap from "./HashMap.js";
import type * as MetricKeyType from "./MetricKeyType.js";
import type * as Option from "./Option.js";
import type { Pipeable } from "./Pipeable.js";
/**
 * @since 2.0.0
 * @category symbols
 */
export declare const MetricStateTypeId: unique symbol;
/**
 * @since 2.0.0
 * @category symbols
 */
export type MetricStateTypeId = typeof MetricStateTypeId;
/**
 * @since 2.0.0
 * @category symbols
 */
export declare const CounterStateTypeId: unique symbol;
/**
 * @since 2.0.0
 * @category symbols
 */
export type CounterStateTypeId = typeof CounterStateTypeId;
/**
 * @since 2.0.0
 * @category symbols
 */
export declare const FrequencyStateTypeId: unique symbol;
/**
 * @since 2.0.0
 * @category symbols
 */
export type FrequencyStateTypeId = typeof FrequencyStateTypeId;
/**
 * @since 2.0.0
 * @category symbols
 */
export declare const GaugeStateTypeId: unique symbol;
/**
 * @since 2.0.0
 * @category symbols
 */
export type GaugeStateTypeId = typeof GaugeStateTypeId;
/**
 * @since 2.0.0
 * @category symbols
 */
export declare const HistogramStateTypeId: unique symbol;
/**
 * @since 2.0.0
 * @category symbols
 */
export type HistogramStateTypeId = typeof HistogramStateTypeId;
/**
 * @since 2.0.0
 * @category symbols
 */
export declare const SummaryStateTypeId: unique symbol;
/**
 * @since 2.0.0
 * @category symbols
 */
export type SummaryStateTypeId = typeof SummaryStateTypeId;
/**
 * A `MetricState` describes the state of a metric. The type parameter of a
 * metric state corresponds to the type of the metric key (`MetricStateType`).
 * This phantom type parameter is used to tie keys to their expected states.
 *
 * @since 2.0.0
 * @category models
 */
export interface MetricState<A> extends MetricState.Variance<A>, Equal.Equal, Pipeable {
}
/**
 * @since 2.0.0
 */
export declare namespace MetricState {
    /**
     * @since 2.0.0
     * @category models
     */
    interface Untyped extends MetricState<any> {
    }
    /**
     * @since 2.0.0
     * @category models
     */
    interface Counter<A extends (number | bigint)> extends MetricState<MetricKeyType.MetricKeyType.Counter<A>> {
        readonly [CounterStateTypeId]: CounterStateTypeId;
        readonly count: A;
    }
    /**
     * @since 2.0.0
     * @category models
     */
    interface Frequency extends MetricState<MetricKeyType.MetricKeyType.Frequency> {
        readonly [FrequencyStateTypeId]: FrequencyStateTypeId;
        readonly occurrences: HashMap.HashMap<string, number>;
    }
    /**
     * @since 2.0.0
     * @category models
     */
    interface Gauge<A extends (number | bigint)> extends MetricState<MetricKeyType.MetricKeyType.Gauge<A>> {
        readonly [GaugeStateTypeId]: GaugeStateTypeId;
        readonly value: A;
    }
    /**
     * @since 2.0.0
     * @category models
     */
    interface Histogram extends MetricState<MetricKeyType.MetricKeyType.Histogram> {
        readonly [HistogramStateTypeId]: HistogramStateTypeId;
        readonly buckets: Chunk.Chunk<readonly [number, number]>;
        readonly count: number;
        readonly min: number;
        readonly max: number;
        readonly sum: number;
    }
    /**
     * @since 2.0.0
     * @category models
     */
    interface Summary extends MetricState<MetricKeyType.MetricKeyType.Summary> {
        readonly [SummaryStateTypeId]: SummaryStateTypeId;
        readonly error: number;
        readonly quantiles: Chunk.Chunk<readonly [number, Option.Option<number>]>;
        readonly count: number;
        readonly min: number;
        readonly max: number;
        readonly sum: number;
    }
    /**
     * @since 2.0.0
     * @category models
     */
    interface Variance<A> {
        readonly [MetricStateTypeId]: {
            readonly _A: (_: A) => void;
        };
    }
}
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const counter: {
    (count: number): MetricState.Counter<number>;
    (count: bigint): MetricState.Counter<bigint>;
};
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const frequency: (occurrences: HashMap.HashMap<string, number>) => MetricState.Frequency;
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const gauge: {
    (count: number): MetricState.Gauge<number>;
    (count: bigint): MetricState.Gauge<bigint>;
};
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const histogram: (options: {
    readonly buckets: Chunk.Chunk<readonly [number, number]>;
    readonly count: number;
    readonly min: number;
    readonly max: number;
    readonly sum: number;
}) => MetricState.Histogram;
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const summary: (options: {
    readonly error: number;
    readonly quantiles: Chunk.Chunk<readonly [number, Option.Option<number>]>;
    readonly count: number;
    readonly min: number;
    readonly max: number;
    readonly sum: number;
}) => MetricState.Summary;
/**
 * @since 2.0.0
 * @category refinements
 */
export declare const isMetricState: (u: unknown) => u is MetricState.Counter<number | bigint>;
/**
 * @since 2.0.0
 * @category refinements
 */
export declare const isCounterState: (u: unknown) => u is MetricState.Counter<number | bigint>;
/**
 * @since 2.0.0
 * @category refinements
 */
export declare const isFrequencyState: (u: unknown) => u is MetricState.Frequency;
/**
 * @since 2.0.0
 * @category refinements
 */
export declare const isGaugeState: (u: unknown) => u is MetricState.Gauge<number | bigint>;
/**
 * @since 2.0.0
 * @category refinements
 */
export declare const isHistogramState: (u: unknown) => u is MetricState.Histogram;
/**
 * @since 2.0.0
 * @category refinements
 */
export declare const isSummaryState: (u: unknown) => u is MetricState.Summary;
//# sourceMappingURL=MetricState.d.ts.map