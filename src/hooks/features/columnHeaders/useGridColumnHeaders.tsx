import * as React from 'react';
import {
  unstable_gridFocusColumnHeaderFilterSelector,
  useGridSelector,
  gridFilterModelSelector,
  unstable_gridTabIndexColumnHeaderFilterSelector,
  getDataGridUtilityClass,
  GridFilterItem,
} from '@mui/x-data-grid';
import { styled } from '@mui/system';
import {
  useGridColumnHeaders as useGridColumnHeadersCommunity,
  UseGridColumnHeadersProps,
  GetHeadersParams,
  getTotalHeaderHeight,
  useGridPrivateApiContext,
  getGridFilter,
  GridStateColDef,
} from '@mui/x-data-grid/internals';
import { unstable_composeClasses as composeClasses } from '@mui/utils';
import { useGridRootProps } from '../../utils/useGridRootProps';
import { DataGridExtraProcessedProps } from '../../../models/dataGridExtraProps';

type OwnerState = DataGridExtraProcessedProps;

const useUtilityClasses = (ownerState: OwnerState) => {
  const { classes } = ownerState;
  return React.useMemo(() => {
    const slots = {
      headerFilterRow: ['headerFilterRow'],
    };

    return composeClasses(slots, getDataGridUtilityClass, classes);
  }, [classes]);
};

const GridHeaderFilterRow = styled('div', {
  name: 'MuiDataGrid',
  slot: 'HeaderFilterRow',
  overridesResolver: (_props, styles) => styles.headerFilterRow,
})<{ ownerState: OwnerState }>(() => ({
  display: 'flex',
}));

const filterItemsCache: Record<GridStateColDef['field'], GridFilterItem> = Object.create(null);

export const useGridColumnHeaders = (props: UseGridColumnHeadersProps) => {
  const apiRef = useGridPrivateApiContext();
  const { headerGroupingMaxDepth, hasOtherElementInTabSequence } = props;
  const columnHeaderFilterTabIndexState = useGridSelector(
    apiRef,
    unstable_gridTabIndexColumnHeaderFilterSelector,
  );
  const { getColumnsToRender, getRootProps, ...otherProps } = useGridColumnHeadersCommunity({
    ...props,
    hasOtherElementInTabSequence:
      hasOtherElementInTabSequence || columnHeaderFilterTabIndexState !== null,
  });
  const headerFiltersRef = React.useRef<HTMLDivElement>(null);
  apiRef.current.register('private', {
    headerFiltersElementRef: headerFiltersRef,
  });
  const headerFilterMenuRef = React.useRef<HTMLButtonElement | null>(null);
  const rootProps = useGridRootProps();
  const classes = useUtilityClasses(rootProps);
  const disableHeaderFiltering = !rootProps.unstable_headerFilters;
  const headerHeight = Math.floor(rootProps.columnHeaderHeight * props.densityFactor);
  const filterModel = useGridSelector(apiRef, gridFilterModelSelector);
  const totalHeaderHeight =
    getTotalHeaderHeight(apiRef, rootProps.columnHeaderHeight) +
    (disableHeaderFiltering ? 0 : headerHeight);

  const columnHeaderFilterFocus = useGridSelector(
    apiRef,
    unstable_gridFocusColumnHeaderFilterSelector,
  );

  const getFilterItem = React.useCallback(
    (colDef: GridStateColDef) => {
      const filterModelItem = filterModel?.items.find(
        (it) => it.field === colDef.field && it.operator !== 'isAnyOf',
      );
      if (filterModelItem != null) {
        // there's a valid `filterModelItem` for this column
        return filterModelItem;
      }
      const defaultCachedItem = filterItemsCache[colDef.field];
      if (defaultCachedItem != null) {
        // there's a cached `defaultItem` for this column
        return defaultCachedItem;
      }
      // there's no cached `defaultItem` for this column, let's generate one and cache it
      const defaultItem = getGridFilter(colDef);
      filterItemsCache[colDef.field] = defaultItem;
      return defaultItem;
    },
    [filterModel],
  );

  const getColumnFilters = (params?: GetHeadersParams, other = {}) => {
    if (disableHeaderFiltering) {
      return null;
    }

    const columnsToRender = getColumnsToRender(params);

    if (columnsToRender == null) {
      return null;
    }

    const { renderedColumns, firstColumnToRender } = columnsToRender;

    const filters: React.JSX.Element[] = [];
    for (let i = 0; i < renderedColumns.length; i += 1) {
      const colDef = renderedColumns[i];
      const columnIndex = firstColumnToRender + i;
      const hasFocus = columnHeaderFilterFocus?.field === colDef.field;
      const isFirstColumn = columnIndex === 0;
      const tabIndexField = columnHeaderFilterTabIndexState?.field;
      const tabIndex =
        tabIndexField === colDef.field || (isFirstColumn && !props.hasOtherElementInTabSequence)
          ? 0
          : -1;

      const headerClassName =
        typeof colDef.headerClassName === 'function'
          ? colDef.headerClassName({ field: colDef.field, colDef })
          : colDef.headerClassName;

      // TODO: Support for `isAnyOf` operator
      const filterOperators =
        colDef.filterOperators?.filter((operator) => operator.value !== 'isAnyOf') ?? [];

      const item = getFilterItem(colDef);

      filters.push(
        <rootProps.slots.headerFilterCell
          colIndex={columnIndex}
          key={`${colDef.field}-filter`}
          height={headerHeight}
          width={colDef.computedWidth}
          colDef={colDef}
          hasFocus={hasFocus}
          tabIndex={tabIndex}
          headerFilterMenuRef={headerFilterMenuRef}
          headerClassName={headerClassName}
          filterOperators={filterOperators}
          data-field={colDef.field}
          item={item}
          {...rootProps.slotProps?.headerFilterCell}
          {...other}
        />,
      );
    }

    return (
      <GridHeaderFilterRow
        ref={headerFiltersRef}
        ownerState={rootProps}
        className={classes.headerFilterRow}
        role="row"
        aria-rowindex={headerGroupingMaxDepth + 2}
      >
        {filters}
      </GridHeaderFilterRow>
    );
  };

  const rootStyle = {
    minHeight: totalHeaderHeight,
    maxHeight: totalHeaderHeight,
    lineHeight: `${headerHeight}px`,
  };

  return {
    ...otherProps,
    getColumnFilters,
    getRootProps: disableHeaderFiltering
      ? getRootProps
      : (other = {}) => ({ style: rootStyle, ...other }),
  };
};
