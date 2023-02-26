import { useGridPrivateApiContext as useCommunityGridPrivateApiContext } from '@mui/x-data-grid/internals';
import { GridPrivateApiExtra } from '../../models/gridApiExtra';

export const useGridPrivateApiContext = useCommunityGridPrivateApiContext<GridPrivateApiExtra>;
