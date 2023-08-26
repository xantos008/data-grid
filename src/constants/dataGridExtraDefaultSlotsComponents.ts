import { DATA_GRID_DEFAULT_SLOTS_COMPONENTS } from '@mui/x-data-grid/internals';
import type { GridExtraSlotsComponent } from '../models';
import { GridExtraColumnMenu } from '../components/GridExtraColumnMenu';
import { GridColumnHeaders } from '../components/GridColumnHeaders';
import { GridHeaderFilterMenu } from '../components/headerFiltering/GridHeaderFilterMenu';
import { GridHeaderFilterCell } from '../components/headerFiltering/GridHeaderFilterCell';
import materialSlots from '../material';

export const DATA_GRID_EXTRA_DEFAULT_SLOTS_COMPONENTS: GridExtraSlotsComponent = {
  ...DATA_GRID_DEFAULT_SLOTS_COMPONENTS,
  ...materialSlots,
  ColumnMenu: GridExtraColumnMenu,
  ColumnHeaders: GridColumnHeaders,
  HeaderFilterCell: GridHeaderFilterCell,
  HeaderFilterMenu: GridHeaderFilterMenu,
};
