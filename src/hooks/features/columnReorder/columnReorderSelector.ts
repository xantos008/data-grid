import { createSelector } from '@mui/x-data-grid/internals';
import { GridStateExtra } from '../../../models/gridStateExtra';

export const gridColumnReorderSelector = (state: GridStateExtra) => state.columnReorder;

export const gridColumnReorderDragColSelector = createSelector(
  gridColumnReorderSelector,
  (columnReorder) => columnReorder.dragCol,
);
