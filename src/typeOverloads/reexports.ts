import type { GridApiExtra } from '../models/gridApiExtra';
import type { GridInitialStateExtra, GridStateExtra } from '../models/gridStateExtra';

export { useGridApiContext } from '../hooks/utils/useGridApiContext';
export { useGridApiRef } from '../hooks/utils/useGridApiRef';
export { useGridRootProps } from '../hooks/utils/useGridRootProps';

/**
 * The full grid API.
 */
export type GridApi = GridApiExtra;

/**
 * The state of `DataGridExtra`.
 */
export type GridState = GridStateExtra;

/**
 * The initial state of `DataGridExtra`.
 */
export type GridInitialState = GridInitialStateExtra;
