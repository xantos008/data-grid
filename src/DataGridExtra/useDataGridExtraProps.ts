import * as React from 'react';
import { useThemeProps } from '@mui/material/styles';
import {
  GRID_DEFAULT_LOCALE_TEXT,
  DATA_GRID_PROPS_DEFAULT_VALUES,
  GridValidRowModel,
} from '@mui/x-data-grid';
import { computeSlots, useProps } from '@mui/x-data-grid/internals';
import {
  DataGridExtraProps,
  DataGridExtraProcessedProps,
  DataGridExtraPropsWithDefaultValue,
} from '../models/dataGridExtraProps';
import { GridExtraSlotsComponent } from '../models';
import { DATA_GRID_EXTRA_DEFAULT_SLOTS_COMPONENTS } from '../constants/dataGridExtraDefaultSlotsComponents';

/**
 * The default values of `DataGridExtraPropsWithDefaultValue` to inject in the props of DataGridExtra.
 */
export const DATA_GRID_EXTRA_PROPS_DEFAULT_VALUES: DataGridExtraPropsWithDefaultValue = {
  ...DATA_GRID_PROPS_DEFAULT_VALUES,
  scrollEndThreshold: 80,
  treeData: false,
  defaultGroupingExpansionDepth: 0,
  autosizeOnMount: false,
  disableAutosize: false,
  disableColumnPinning: false,
  keepColumnPositionIfDraggedOutside: false,
  disableChildrenFiltering: false,
  disableChildrenSorting: false,
  rowReordering: false,
  rowsLoadingMode: 'client',
  getDetailPanelHeight: () => 500,
  headerFilters: false,
};

const defaultSlots = DATA_GRID_EXTRA_DEFAULT_SLOTS_COMPONENTS;

export const useDataGridExtraProps = <R extends GridValidRowModel>(inProps: DataGridExtraProps<R>) => {
  const themedProps = useProps(
    // eslint-disable-next-line material-ui/mui-name-matches-component-name
    useThemeProps({
      props: inProps,
      name: 'MuiDataGrid',
    }),
  );

  const localeText = React.useMemo(
    () => ({ ...GRID_DEFAULT_LOCALE_TEXT, ...themedProps.localeText }),
    [themedProps.localeText],
  );

  const slots = React.useMemo<GridExtraSlotsComponent>(
    () =>
      computeSlots<GridExtraSlotsComponent>({
        defaultSlots,
        slots: themedProps.slots,
      }),
    [themedProps.slots],
  );

  return React.useMemo<DataGridExtraProcessedProps<R>>(
    () => ({
      ...DATA_GRID_EXTRA_PROPS_DEFAULT_VALUES,
      ...themedProps,
      localeText,
      slots,
      signature: 'DataGridExtra',
    }),
    [themedProps, localeText, slots],
  );
};
