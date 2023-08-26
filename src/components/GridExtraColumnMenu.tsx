import * as React from 'react';
import PropTypes from 'prop-types';
import {
  GridGenericColumnMenu,
  GridColumnMenuProps,
  GRID_COLUMN_MENU_SLOTS,
  GRID_COLUMN_MENU_SLOT_PROPS,
} from '@mui/x-data-grid';
import { GridColumnMenuPinningItem } from './GridColumnMenuPinningItem';

export const GRID_COLUMN_MENU_SLOTS_EXTRA = {
  ...GRID_COLUMN_MENU_SLOTS,
  columnMenuPinningItem: GridColumnMenuPinningItem,
};

export const GRID_COLUMN_MENU_SLOT_PROPS_EXTRA = {
  ...GRID_COLUMN_MENU_SLOT_PROPS,
  columnMenuPinningItem: {
    displayOrder: 15,
  },
};

const GridExtraColumnMenu = React.forwardRef<HTMLUListElement, GridColumnMenuProps>(
  function GridExtraColumnMenu(props, ref) {
    return (
      <GridGenericColumnMenu
        ref={ref}
        {...props}
        defaultSlots={GRID_COLUMN_MENU_SLOTS_EXTRA}
        defaultSlotProps={GRID_COLUMN_MENU_SLOT_PROPS_EXTRA}
      />
    );
  },
);

GridExtraColumnMenu.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  colDef: PropTypes.object.isRequired,
  hideMenu: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
} as any;

export { GridExtraColumnMenu };
