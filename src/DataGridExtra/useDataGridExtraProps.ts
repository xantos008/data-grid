import * as React from 'react';
import { useThemeProps } from '@mui/material/styles';
import {
  GRID_DEFAULT_LOCALE_TEXT,
  DATA_GRID_PROPS_DEFAULT_VALUES,
  GridValidRowModel,
} from '@mui/x-data-grid';
import { computeSlots, uncapitalizeObjectKeys } from '@mui/x-data-grid/internals';
import {
  DataGridExtraProps,
  DataGridExtraProcessedProps,
  DataGridExtraPropsWithDefaultValue,
} from '../models/dataGridExtraProps';
import { GridExtraSlotsComponent, UncapitalizedGridProSlotsComponent } from '../models';
import { DATA_GRID_EXTRA_DEFAULT_SLOTS_COMPONENTS } from '../constants/dataGridExtraDefaultSlotsComponents';

/**
 * The default values of `DataGridExtraPropsWithDefaultValue` to inject in the props of DataGridExtra.
 */
export const DATA_GRID_EXTRA_PROPS_DEFAULT_VALUES: DataGridExtraPropsWithDefaultValue = {
  ...DATA_GRID_PROPS_DEFAULT_VALUES,
  scrollEndThreshold: 80,
  treeData: false,
  defaultGroupingExpansionDepth: 0,
  disableColumnPinning: false,
  keepColumnPositionIfDraggedOutside: false,
  disableChildrenFiltering: false,
  disableChildrenSorting: false,
  rowReordering: false,
  rowsLoadingMode: 'client',
  getDetailPanelHeight: () => 500,
};

const defaultSlots = uncapitalizeObjectKeys(DATA_GRID_EXTRA_DEFAULT_SLOTS_COMPONENTS)!;

export const useDataGridExtraProps = <R extends GridValidRowModel>(inProps: DataGridExtraProps<R>) => {
  const { components, componentsProps, ...themedProps } = useThemeProps({
    props: inProps,
    name: 'MuiDataGrid',
  });

  const localeText = React.useMemo(
    () => ({ ...GRID_DEFAULT_LOCALE_TEXT, ...themedProps.localeText }),
    [themedProps.localeText],
  );

  const slots = React.useMemo<UncapitalizedGridProSlotsComponent>(
    () =>
      computeSlots<GridExtraSlotsComponent>({
        defaultSlots,
        slots: themedProps.slots,
        components,
      }),
    [components, themedProps.slots],
  );

  return React.useMemo<DataGridExtraProcessedProps<R>>(
    () => ({
      ...DATA_GRID_EXTRA_PROPS_DEFAULT_VALUES,
      ...themedProps,
      localeText,
      slots,
      slotProps: themedProps.slotProps ?? componentsProps,
      signature: 'DataGridExtra',
    }),
    [themedProps, localeText, slots, componentsProps],
  );
};
