import { useGridRootProps as useCommunityGridRootProps } from '@mui/x-data-grid';
import { DataGridExtraProcessedProps } from '../../models/dataGridExtraProps';

export const useGridRootProps = useCommunityGridRootProps as () => DataGridExtraProcessedProps;
