import type { GridExtraIconSlotsComponent } from '../models';
import { GridPushPinRightIcon, GridPushPinLeftIcon } from './icons';

const iconSlots: GridExtraIconSlotsComponent = {
  columnMenuPinRightIcon: GridPushPinRightIcon,
  columnMenuPinLeftIcon: GridPushPinLeftIcon,
};

const materialSlots = {
  ...iconSlots,
};

export default materialSlots;
