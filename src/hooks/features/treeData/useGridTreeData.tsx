import * as React from 'react';
import { useGridApiEventHandler, GridEventListener } from '@mui/x-data-grid';
import { GridApiExtra } from '../../../models/gridApiExtra';

export const useGridTreeData = (apiRef: React.MutableRefObject<GridApiExtra>) => {
  /**
   * EVENTS
   */
  const handleCellKeyDown = React.useCallback<GridEventListener<'cellKeyDown'>>(
    (params, event) => {
      const cellParams = apiRef.current.getCellParams(params.id, params.field);
      if (cellParams.colDef.type === 'treeDataGroup' && event.key === ' ' && !event.shiftKey) {
        if (params.rowNode.type !== 'group') {
          return;
        }

        apiRef.current.setRowChildrenExpansion(params.id, !params.rowNode.childrenExpanded);
      }
    },
    [apiRef],
  );

  useGridApiEventHandler(apiRef, 'cellKeyDown', handleCellKeyDown);
};
