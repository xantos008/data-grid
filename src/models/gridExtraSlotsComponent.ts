import { GridSlotsComponent, UncapitalizedGridSlotsComponent } from '@mui/x-data-grid';
import { UncapitalizeObjectKeys } from '@mui/x-data-grid/internals';
import { GridExtraIconSlotsComponent } from './gridExtraIconSlotsComponent';

/**
 * Grid components React prop interface containing all the overridable components
 * for Pro package
 */
export interface GridExtraSlotsComponent extends GridSlotsComponent, GridExtraIconSlotsComponent {}

// TODO: remove in v7
export interface UncapitalizedGridProSlotsComponent
  extends UncapitalizedGridSlotsComponent,
    UncapitalizeObjectKeys<GridExtraIconSlotsComponent> {}
