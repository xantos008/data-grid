import * as React from 'react';

export interface GridExtraIconSlotsComponent {
  /**
   * Icon displayed in column menu for left pinning
   * @default GridPushPinLeftIcon
   */
  columnMenuPinLeftIcon: React.JSXElementConstructor<any>;
  /**
   * Icon displayed in column menu for right pinning
   * @default GridPushPinRightIcon
   */
  columnMenuPinRightIcon: React.JSXElementConstructor<any>;
}
