import { GridClassKey } from '@mui/x-data-grid';

export interface DataGridExtraComponentNameToClassKey {
  MuiDataGrid: GridClassKey;
}

declare module '@mui/material/styles/overrides' {
  interface ComponentNameToClassKey extends DataGridExtraComponentNameToClassKey {}
}
