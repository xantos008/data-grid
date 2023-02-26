import { ComponentsOverrides, ComponentsProps } from '@mui/material/styles';
import { DataGridExtraProps } from '../models/dataGridExtraProps';

export interface DataGridExtraComponentsPropsList {
  MuiDataGrid: DataGridExtraProps;
}

export interface DataGridExtraComponents<Theme = unknown> {
  MuiDataGrid?: {
    defaultProps?: ComponentsProps['MuiDataGrid'];
    styleOverrides?: ComponentsOverrides<Theme>['MuiDataGrid'];
  };
}

declare module '@mui/material/styles' {
  interface ComponentsPropsList extends DataGridExtraComponentsPropsList {}
  interface Components<Theme = unknown> extends DataGridExtraComponents<Theme> {}
}
