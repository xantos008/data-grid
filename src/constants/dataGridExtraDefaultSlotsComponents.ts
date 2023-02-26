import { DATA_GRID_DEFAULT_SLOTS_COMPONENTS } from '@mui/x-data-grid/internals';
import { GridExtraSlotsComponent, GridExtraIconSlotsComponent } from '../models';
import { GridPushPinRightIcon, GridPushPinLeftIcon } from '../components';
import { GridExtraColumnMenu } from '../components/GridExtraColumnMenu';

export const DEFAULT_GRID_EXTRA_ICON_SLOTS_COMPONENTS: GridExtraIconSlotsComponent = {
  ColumnMenuPinRightIcon: GridPushPinRightIcon,
  ColumnMenuPinLeftIcon: GridPushPinLeftIcon,
};

export const DATA_GRID_EXTRA_DEFAULT_SLOTS_COMPONENTS: GridExtraSlotsComponent = {
  ...DATA_GRID_DEFAULT_SLOTS_COMPONENTS,
  ...DEFAULT_GRID_EXTRA_ICON_SLOTS_COMPONENTS,
  ColumnMenu: GridExtraColumnMenu,
};
