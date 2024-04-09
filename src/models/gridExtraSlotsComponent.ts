import { GridSlotsComponent } from '@mui/x-data-grid';
import { GridExtraIconSlotsComponent } from './gridExtraIconSlotsComponent';

/**
 * Grid components React prop interface containing all the overridable components
 * for Pro package
 */
export interface GridExtraSlotsComponent extends GridSlotsComponent, GridExtraIconSlotsComponent {
  /**
   * Component responsible for showing menu adornment in Header filter row
   * @default GridHeaderFilterCell
   */
  headerFilterCell: React.JSXElementConstructor<any>;
  /**
   * Component responsible for showing menu in Header filter row
   * @default GridHeaderFilterMenu
   */
  headerFilterMenu: React.JSXElementConstructor<any> | null;
}
