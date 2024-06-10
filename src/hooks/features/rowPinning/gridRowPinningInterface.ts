import {
  GridRowId,
  GridRowIdToModelLookup,
  GridRowsProp,
  GridValidRowModel,
} from '@mui/x-data-grid';

export interface GridPinnedRowsExtrap<R extends GridValidRowModel = GridValidRowModel> {
  top?: GridRowsProp<R>;
  bottom?: GridRowsProp<R>;
}

export interface GridRowPinningApi {
  /**
   * Changes the pinned rows.
   * @param {GridPinnedRowsExtrap} pinnedRows An object containing the rows to pin.
   */
  unstable_setPinnedRows: (pinnedRows?: GridPinnedRowsExtrap) => void;
}

export interface GridRowPinningInternalCache {
  topIds: GridRowId[];
  bottomIds: GridRowId[];
  idLookup: GridRowIdToModelLookup;
}
