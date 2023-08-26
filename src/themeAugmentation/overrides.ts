import { GridClassKey } from '@mui/x-data-grid';

export interface DataGridExtraComponentNameToClassKey {
  MuiDataGrid: GridClassKey;
}

declare module '@mui/material/styles' {
  interface ComponentNameToClassKey extends DataGridExtraComponentNameToClassKey {}
}
