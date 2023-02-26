import * as React from 'react';
import { unstable_composeClasses as composeClasses } from '@mui/utils';
import { getDataGridUtilityClass, GridColDef } from '@mui/x-data-grid';
import { GridPipeProcessor, useGridRegisterPipeProcessor } from '@mui/x-data-grid/internals';
import { DataGridExtraProcessedProps } from '../../../models/dataGridExtraProps';
import { GRID_REORDER_COL_DEF } from './gridRowReorderColDef';
import { GridPrivateApiExtra } from '../../../models/gridApiExtra';

type OwnerState = { classes: DataGridExtraProcessedProps['classes'] };

const useUtilityClasses = (ownerState: OwnerState) => {
  const { classes } = ownerState;

  return React.useMemo(() => {
    const slots = {
      rowReorderCellContainer: ['rowReorderCellContainer'],
      columnHeaderReorder: ['columnHeaderReorder'],
    };

    return composeClasses(slots, getDataGridUtilityClass, classes);
  }, [classes]);
};

export const useGridRowReorderPreProcessors = (
  privateApiRef: React.MutableRefObject<GridPrivateApiExtra>,
  props: DataGridExtraProcessedProps,
) => {
  const ownerState = { classes: props.classes };
  const classes = useUtilityClasses(ownerState);

  const updateReorderColumn = React.useCallback<GridPipeProcessor<'hydrateColumns'>>(
    (columnsState) => {
      const reorderColumn: GridColDef = {
        ...GRID_REORDER_COL_DEF,
        cellClassName: classes.rowReorderCellContainer,
        headerClassName: classes.columnHeaderReorder,
        headerName: privateApiRef.current.getLocaleText('rowReorderingHeaderName'),
      };

      const shouldHaveReorderColumn = props.rowReordering;
      const haveReorderColumn = columnsState.lookup[reorderColumn.field] != null;

      if (shouldHaveReorderColumn && haveReorderColumn) {
        return columnsState;
      }

      if (shouldHaveReorderColumn && !haveReorderColumn) {
        columnsState.lookup[reorderColumn.field] = reorderColumn;
        columnsState.orderedFields = [reorderColumn.field, ...columnsState.orderedFields];
      } else if (!shouldHaveReorderColumn && haveReorderColumn) {
        delete columnsState.lookup[reorderColumn.field];
        columnsState.orderedFields = columnsState.orderedFields.filter(
          (field) => field !== reorderColumn.field,
        );
      }

      return columnsState;
    },
    [privateApiRef, classes, props.rowReordering],
  );

  useGridRegisterPipeProcessor(privateApiRef, 'hydrateColumns', updateReorderColumn);
};
