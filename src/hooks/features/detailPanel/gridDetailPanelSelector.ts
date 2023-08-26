import { GridRowId } from '@mui/x-data-grid';
import { createSelectorMemoized } from '@mui/x-data-grid/internals';
import { GridStateExtra } from '../../../models/gridStateExtra';

export const gridDetailPanelExpandedRowIdsSelector = (state: GridStateExtra) =>
  state.detailPanel.expandedRowIds;

export const gridDetailPanelExpandedRowsContentCacheSelector = (state: GridStateExtra) =>
  state.detailPanel.contentCache;

export const gridDetailPanelRawHeightCacheSelector = (state: GridStateExtra) =>
  state.detailPanel.heightCache;

// TODO v6: Make this selector return the full object, including the autoHeight flag
export const gridDetailPanelExpandedRowsHeightCacheSelector = createSelectorMemoized(
  gridDetailPanelRawHeightCacheSelector,
  (heightCache) =>
    Object.entries(heightCache).reduce<Record<GridRowId, number>>((acc, [id, { height }]) => {
      acc[id] = height || 0;
      return acc;
    }, {}),
);
