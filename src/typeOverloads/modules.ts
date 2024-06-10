import React from "react";
import { GridRowId, GridPinnedColumnFields } from '@mui/x-data-grid';
import type {
  GridRowScrollEndParams,
  GridRowOrderChangeParams,
  GridFetchRowsParams,
} from '../models';
import type { GridRenderHeaderFilterProps } from '../components/headerFiltering/GridHeaderFilterCell';
import type { GridColumnPinningInternalCache } from '../hooks/features/columnPinning/gridColumnPinningInterface';
import type { GridCanBeReorderedPreProcessingContext } from '../hooks/features/columnReorder/columnReorderInterfaces';
import { GridRowPinningInternalCache } from '../hooks/features/rowPinning/gridRowPinningInterface';

export interface GridColDefExtra {
  /**
   * Allows to render a component in the column header filter cell.
   * @param {GridRenderHeaderFilterProps} params Object containing parameters for the renderer and `inputRef`.
   * @returns {React.ReactNode} The element to be rendered.
   */
  renderHeaderFilter?: (params: GridRenderHeaderFilterProps) => React.ReactNode;
}

export interface GridControlledStateEventLookupExtra {
  /**
   * Fired when the open detail panels are changed.
   * @ignore - do not document.
   */
  detailPanelsExpandedRowIdsChange: { params: GridRowId[] };
  /**
   * Fired when the pinned columns is changed.
   * @ignore - do not document.
   */
  pinnedColumnsChange: { params: GridPinnedColumnFields };
}

export interface GridEventLookupExtra {
  /**
   * Fired when scrolling to the bottom of the grid viewport.
   */
  rowsScrollEnd: { params: GridRowScrollEndParams };
  /**
   * Fired when the user ends reordering a row.
   */
  rowOrderChange: { params: GridRowOrderChangeParams };
  /**
   * Fired when a new batch of rows is requested to be loaded. Called with a [[GridFetchRowsParams]] object.
   */
  fetchRows: { params: GridFetchRowsParams };
}

export interface GridPipeProcessingLookupExtra {
  canBeReordered: {
    value: boolean;
    context: GridCanBeReorderedPreProcessingContext;
  };
}

export interface GridApiCachesExtra {
  columnPinning: GridColumnPinningInternalCache;
  pinnedRows: GridRowPinningInternalCache;
}

declare module '@mui/x-data-grid' {
  interface GridEventLookup extends GridEventLookupExtra {}

  interface GridControlledStateEventLookup extends GridControlledStateEventLookupExtra {}

  interface GridPipeProcessingLookup extends GridPipeProcessingLookupExtra {}
}

declare module '@mui/x-data-grid/internals' {
  interface GridApiCaches extends GridApiCachesExtra {}

  interface GridBaseColDef extends GridColDefExtra {}
}
