import type { GridExtraIconSlotsComponent } from '../models';
import { GridPushPinRightIcon, GridPushPinLeftIcon } from './icons';

const iconSlots: GridExtraIconSlotsComponent = {
  ColumnMenuPinRightIcon: GridPushPinRightIcon,
  ColumnMenuPinLeftIcon: GridPushPinLeftIcon,
};

const materialSlots = {
  ...iconSlots,
};

export default materialSlots;
