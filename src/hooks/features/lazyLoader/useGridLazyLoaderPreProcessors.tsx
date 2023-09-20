import * as React from 'react';
import { GridPipeProcessor, useGridRegisterPipeProcessor } from '@mui/x-data-grid/internals';
import { GRID_ROOT_GROUP_ID, GridGroupNode, GridSkeletonRowNode } from '@mui/x-data-grid';
import { GridPrivateApiExtra } from '../../../models/gridApiExtra';
import {
  DataGridExtraProcessedProps,
  GridExperimentalExtraFeatures,
} from '../../../models/dataGridExtraProps';

export const GRID_SKELETON_ROW_ROOT_ID = 'auto-generated-skeleton-row-root';

const getSkeletonRowId = (index: number) => `${GRID_SKELETON_ROW_ROOT_ID}-${index}`;

export const useGridLazyLoaderPreProcessors = (
  privateApiRef: React.MutableRefObject<GridPrivateApiExtra>,
  props: Pick<DataGridExtraProcessedProps, 'rowCount' | 'rowsLoadingMode' | 'experimentalFeatures'>,
) => {
  const { lazyLoading } = (props.experimentalFeatures ?? {}) as GridExperimentalExtraFeatures;

  const addSkeletonRows = React.useCallback<GridPipeProcessor<'hydrateRows'>>(
    (groupingParams) => {
      const rootGroup = groupingParams.tree[GRID_ROOT_GROUP_ID] as GridGroupNode;

      if (
        !lazyLoading ||
        props.rowsLoadingMode !== 'server' ||
        !props.rowCount ||
        rootGroup.children.length >= props.rowCount
      ) {
        return groupingParams;
      }

      const tree = { ...groupingParams.tree };
      const rootGroupChildren = [...rootGroup.children];

      for (let i = 0; i < props.rowCount - rootGroup.children.length; i += 1) {
        const skeletonId = getSkeletonRowId(i);

        rootGroupChildren.push(skeletonId);

        const skeletonRowNode: GridSkeletonRowNode = {
          type: 'skeletonRow',
          id: skeletonId,
          parent: GRID_ROOT_GROUP_ID,
          depth: 0,
        };

        tree[skeletonId] = skeletonRowNode;
      }

      tree[GRID_ROOT_GROUP_ID] = { ...rootGroup, children: rootGroupChildren };

      return {
        ...groupingParams,
        tree,
      };
    },
    [props.rowCount, props.rowsLoadingMode, lazyLoading],
  );

  useGridRegisterPipeProcessor(privateApiRef, 'hydrateRows', addSkeletonRows);
};
