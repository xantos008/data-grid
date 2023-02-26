import { createSelector } from '@mui/x-data-grid/internals';
import { GridStateExtra } from '../../../models/gridStateExtra';

export const gridColumnResizeSelector = (state: GridStateExtra) => state.columnResize;

export const gridResizingColumnFieldSelector = createSelector(
  gridColumnResizeSelector,
  (columnResize) => columnResize.resizingColumnField,
);
