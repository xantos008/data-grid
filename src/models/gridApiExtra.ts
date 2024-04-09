import {
  GridApiCommon,
  GridColumnReorderApi,
  GridRowMultiSelectionApi,
  GridRowProApi,
} from '@mui/x-data-grid';
import { GridPrivateOnlyApiCommon, GridInfiniteLoaderPrivateApi } from '@mui/x-data-grid/internals';
import { GridInitialStateExtra, GridStateExtra } from './gridStateExtra';
import type {
  GridColumnPinningApi,
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
    GridDetailPanelApi,
    GridRowPinningApi,
    GridRowMultiSelectionApi,
    GridColumnReorderApi {}

export interface GridPrivateApiExtra
  extends GridApiExtra,
    GridPrivateOnlyApiCommon<GridApiExtra, GridPrivateApiExtra, DataGridExtraProcessedProps>,
    GridDetailPanelPrivateApi,
    GridInfiniteLoaderPrivateApi {}
