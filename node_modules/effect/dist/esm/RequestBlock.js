import * as _RequestBlock from "./internal/blockedRequests.js";
import * as core from "./internal/core.js";
import * as _dataSource from "./internal/dataSource.js";
/**
 * @since 2.0.0
 * @category constructors
 */
export const single = _RequestBlock.single;
/**
 * @since 2.0.0
 * @category constructors
 */
export const empty = _RequestBlock.empty;
/**
 * @since 2.0.0
 * @category constructors
 */
export const mapRequestResolvers = _RequestBlock.mapRequestResolvers;
/**
 * @since 2.0.0
 * @category constructors
 */
export const parallel = _RequestBlock.par;
/**
 * @since 2.0.0
 * @category constructors
 */
export const reduce = _RequestBlock.reduce;
/**
 * @since 2.0.0
 * @category constructors
 */
export const sequential = _RequestBlock.seq;
/**
 * Provides each data source with part of its required environment.
 *
 * @since 2.0.0
 * @category utils
 */
export const mapInputContext = (self, f) => reduce(self, MapInputContextReducer(f));
const MapInputContextReducer = f => ({
  emptyCase: () => empty,
  parCase: (left, right) => parallel(left, right),
  seqCase: (left, right) => sequential(left, right),
  singleCase: (dataSource, blockedRequest) => single(_dataSource.mapInputContext(dataSource, f), blockedRequest)
});
/**
 * Provides each data source with a fiber ref value.
 *
 * @since 2.0.0
 * @category utils
 */
export const locally = core.requestBlockLocally;
//# sourceMappingURL=RequestBlock.js.map