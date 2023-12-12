import {
  GridApiCommon,
  GridColumnReorderApi,
  GridRowMultiSelectionApi,
  GridRowProApi,
} from '@mui/x-data-grid';
import { GridPrivateOnlyApiCommon } from '@mui/x-data-grid/internals';
import { GridInitialStateExtra, GridStateExtra } from './gridStateExtra';
import type {
  GridColumnPinningApi,
  GridColumnResizeApi,
  GridDetailPanelApi,
  GridRowPinningApi,
  GridDetailPanelPrivateApi,
} from '../hooks';
import type { DataGridExtraProcessedProps } from './dataGridExtraProps';

/**
 * The api of `DataGridExtra`.
 */
export interface GridApiExtra
  extends GridApiCommon<GridStateExtra, GridInitialStateExtra>,
    GridRowProApi,
    GridColumnPinningApi,
    GridColumnResizeApi,
    GridDetailPanelApi,
    GridRowPinningApi,
    GridRowMultiSelectionApi,
    GridColumnReorderApi {}

export interface GridPrivateApiExtra
  extends GridApiExtra,
    GridPrivateOnlyApiCommon<GridApiExtra, GridPrivateApiExtra, DataGridExtraProcessedProps>,
    GridDetailPanelPrivateApi {}
