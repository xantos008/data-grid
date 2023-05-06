import {
  GridInitialState as GridInitialStateCommunity,
  GridState as GridStateCommunity,
} from '@mui/x-data-grid';
import type {
  GridDetailPanelState,
  GridDetailPanelInitialState,
  GridColumnReorderState,
  GridColumnResizeState,
  GridColumnPinningState,
} from '../hooks';

/**
 * The state of `DataGridExtra`.
 */
export interface GridStateExtra extends GridStateCommunity {
  columnReorder: GridColumnReorderState;
  columnResize: GridColumnResizeState;
  pinnedColumns: GridColumnPinningState;
  detailPanel: GridDetailPanelState;
}

/**
 * The initial state of `DataGridExtra`.
 */
export interface GridInitialStateExtra extends GridInitialStateCommunity {
  pinnedColumns?: GridColumnPinningState;
  detailPanel?: GridDetailPanelInitialState;
}
