import {
  GridInitialState as GridInitialStateCommunity,
  GridState as GridStateCommunity,
  GridColumnPinningState,
  GridPinnedColumnFields,
} from '@mui/x-data-grid';
import type {
  GridDetailPanelState,
  GridDetailPanelInitialState,
  GridColumnReorderState,
} from '../hooks';

/**
 * The state of `DataGridExtra`.
 */
export interface GridStateExtra extends GridStateCommunity {
  columnReorder: GridColumnReorderState;
  pinnedColumns: GridColumnPinningState;
  detailPanel: GridDetailPanelState;
}

/**
 * The initial state of `DataGridExtra`.
 */
export interface GridInitialStateExtra extends GridInitialStateCommunity {
  pinnedColumns?: GridPinnedColumnFields;
  detailPanel?: GridDetailPanelInitialState;
}
