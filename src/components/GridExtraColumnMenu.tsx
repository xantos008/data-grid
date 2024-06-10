import * as React from 'react';
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

export const GridExtraColumnMenu = React.forwardRef<HTMLUListElement, GridColumnMenuProps>(
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
