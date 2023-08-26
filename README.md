# data-grid-extra

This package is a full customized data grid component base on mui data grid library. Skip installation and read usage

[![Buy me a coffee](https://img.buymeacoffee.com/button-api/?url=https%3A%2F%2Fwww.buymeacoffee.com%2Fxantos008&text=Buy%20me%20a%20coffee&emoji=&slug=xantos008&button_colour=FFDD00&font_colour=000000&font_family=Lato&outline_colour=000000&coffee_colour=ffffff)](https://www.buymeacoffee.com/xantos008)

## Installation

Install the package in your project directory with:

```sh
npm install data-grid-extra
```

## Info

This is an additional helper library for `DataGridUltra`. So instead of this use
```sh
npm install data-grid-ultra
```

if you don't want to use DataGridUltra you still can use DataGridExtra. Take a look at the Usage

## Usage

```sh
import { DataGridExtra } from 'data-grid-extra';

export default function DataGridExtraDemo() {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100000,
    editable: true,
  });

  return (
    <Box sx={{ height: 520, width: '100%' }}>
      <DataGridExtra
        {...data}
        loading={data.rows.length === 0}
        rowHeight={38}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
```

## Props

---

`columns` **REQUIRED**

Set of columns of type GridColDef[].

**Type**: `Array<object>`

---

`rows` **REQUIRED**

Set of rows of type GridRowsProp.

**Type**: `Array<object>`

---

`apiRef`

The ref object that allows grid manipulation. Can be instantiated with `useGridApiRef()`.

**Type**: `{ current: object }`

---

`aria-label`

The label of the grid.

**Type**: `string`

---

`aria-labelledby`

The id of the element containing a label for the grid.

**Type**: `string`

---

`autoHeight`

If `true`, the grid height is dynamic and follow the number of rows in the grid.

**Type**: `bool`

---

`autoPageSize`

If `true`, the pageSize is calculated according to the container size and the max number of rows to avoid rendering a vertical scroll bar.

**Type**: `bool`

---

`cellModesModel`

Controls the modes of the cells.

**Type**: `object`

---

`checkboxSelection`

If `true`, the grid get a first column with a checkbox that allows to select rows.

**Type**: `bool`

---

`checkboxSelectionVisibleOnly`

If `true`, the "Select All" header checkbox selects only the rows on the current page. To be used in combination with `checkboxSelection`. It only works if the pagination is enabled.

**Type**: `bool` **Default**: `false`

---

`classes`
Override or extend the styles applied to the component.

See [CSS API](#css) below for more details.

**Type**: `object`

---

`clipboardCopyCellDelimiter`

The character used to separate cell values when copying to the clipboard.

**Type**: `string` **Default**: `'\t'`

---

`columnBuffer`

Number of extra columns to be rendered before/after the visible slice.

**Type**: `number` **Default**: `3`

---

`columnHeaderHeight`

Sets the height in pixel of the column headers in the grid.

**Type**: `number` **Default**: `56`

---

`columnThreshold`

Number of rows from the `columnBuffer` that can be visible before a new slice is rendered.

**Type**: `number` **Default**: `3`

---

`columnVisibilityModel`

Set the column visibility model of the grid. If defined, the grid will ignore the `hide` property in GridColDef.

**Type**: `object`

---

`defaultGroupingExpansionDepth`

If above 0, the row children will be expanded up to this depth. If equal to -1, all the row children will be expanded.

**Type**: `number` **Default**: `0`

---

`density`

Set the density of the grid.

**Type**: `'comfortable' | 'compact' | 'standard'` **Default**: `standard`

---

`detailPanelExpandedRowIds`

The row ids to show the detail panel.

**Type**: `Array<number | string>`

---

`disableChildrenFiltering`

If `true`, the filtering will only be applied to the top level rows when grouping rows with the `treeData` prop.

**Type**: `bool`

---

`disableChildrenSorting`

If `true`, the sorting will only be applied to the top level rows when grouping rows with the `treeData` prop.

**Type**: `bool`

---

`disableColumnFilter`

If `true`, column filters are disabled.

**Type**: `bool`

---

`disableColumnMenu`

If `true`, the column menu is disabled.

**Type**: `bool`

---

`disableColumnPinning`

If `true`, the column pinning is disabled.

**Type**: `bool`

---

`disableColumnReorder`

If `true`, reordering columns is disabled.

**Type**: `bool`

---

`disableColumnResize`

If `true`, resizing columns is disabled.

**Type**: `bool`

---

`disableColumnSelector`

If `true`, hiding/showing columns is disabled.

**Type**: `bool`

---

`disableDensitySelector`

If `true`, the density selector is disabled.

**Type**: `bool`

---

`disableMultipleColumnsFiltering`

If `true`, filtering with multiple columns is disabled.

**Type**: `bool`

---

`disableMultipleColumnsSorting`

If `true`, sorting with multiple columns is disabled.

**Type**: `bool`

---

`disableMultipleRowSelection`

If `true`, multiple selection using the Ctrl or CMD key is disabled.

**Type**: `bool`

---

`disableRowSelectionOnClick`

If `true`, the selection on click on a row or cell is disabled.

**Type**: `bool`

---

`disableVirtualization`

If `true`, the virtualization is disabled.

**Type**: `bool`

---

`editMode`

Controls whether to use the cell or row editing.

**Type**: `'cell' | 'row'` **Default**: `"cell"`

---

`experimentalFeatures`

Unstable features, breaking changes might be introduced. For each feature, if the flag is not explicitly set to `true`, the feature will be fully disabled and any property / method call will not have any effect.

**Type**: `{ ariaV7?: bool, columnGrouping?: bool, lazyLoading?: bool, warnIfFocusStateIsNotSynced?: bool }`

---

`filterDebounceMs`

The milliseconds delay to wait after a keystroke before triggering filtering.

**Type**: `number` **Default**: `150`

---

`filterMode`

Filtering can be processed on the server or client-side. Set it to 'server' if you would like to handle filtering on the server-side.

**Type**: `'client' | 'server'` **Default**: `"client"`

---

`filterModel`

Set the filter model of the grid.

**Type**: `{ items: Array<{ field: string, id?: number | string, operator: string, value?: any }>, logicOperator?: 'and' | 'or', quickFilterExcludeHiddenColumns?: bool, quickFilterLogicOperator?: 'and' | 'or', quickFilterValues?: array }`

---

`getCellClassName`

Function that applies CSS classes dynamically on cells.

**Type**: `func`

**Signature**:`function(params: GridCellParams) => string`

* **params**:  With all properties from GridCellParams.

**Returns**: The CSS class to apply to the cell.

---

`getDetailPanelContent`

Function that returns the element to render in row detail.

**Type**: `func`

**Signature**:`function(params: GridRowParams) => React.JSX.Element`

* **params**: With all properties from GridRowParams.

**Returns**: The row detail element.

---

`getDetailPanelHeight`

Function that returns the height of the row detail panel.

**Type**: `func`

**Default**: `"() => 500"`

**Signature**: `function(params: GridRowParams) => number | string`

* **params**: With all properties from GridRowParams.

**Returns**: The height in pixels or "auto" to use the content height.

---

`getEstimatedRowHeight`

Function that returns the estimated height for a row. Only works if dynamic row height is used. Once the row height is measured this value is discarded.

**Type**: `func`

**Signature**: `function(params: GridRowHeightParams) => number | null`

* **params**: With all properties from GridRowHeightParams.

**Returns**: The estimated row height value. If `null` or `undefined` then the default row height, based on the density, is applied.

---

`getRowClassName`

Function that applies CSS classes dynamically on rows.

**Type**: `func`

**Signature**: `function(params: GridRowClassNameParams) => string`

* **params**: With all properties from GridRowClassNameParams.

**Returns**: The CSS class to apply to the row.

---

`getRowHeight`

Function that sets the row height per row.

**Type**: `func`

**Signature**: `function(params: GridRowHeightParams) => GridRowHeightReturnValue`

* **params**: With all properties from GridRowHeightParams.

**Returns**: The row height value. If `null` or `undefined` then the default row height is applied. If "auto" then the row height is calculated based on the content.

---

`getRowId`

Return the id of a given GridRowModel.

**Type**: `func`

---

`getRowSpacing`

Function that allows to specify the spacing between rows.

**Type**: `func`

**Signature**: `function(params: GridRowSpacingParams) => GridRowSpacing`

* **params**: With all properties from GridRowSpacingParams.

**Returns**: The row spacing values.

---

`getTreeDataPath`

Determines the path of a row in the tree data. For instance, a row with the path ["A", "B"] is the child of the row with the path ["A"]. Note that all paths must contain at least one element.

**Type**: `func`

**Signature**: `function(row: R) => Array`

* **row**: The row from which we want the path.

**Returns**: The path to the row.

---

`groupingColDef`

The grouping column used by the tree data.

**Type**: `func | object`

---

`hideFooter`

If `true`, the footer component is hidden.

**Type**: `bool`

---

`hideFooterPagination`

If `true`, the pagination component in the footer is hidden.

**Type**: `bool`

---

`hideFooterRowCount`

If `true`, the row count in the footer is hidden. It has no effect if the pagination is enabled.

**Type**: `bool` **Default**: `false`

---

`hideFooterSelectedRowCount`

If `true`, the selected row count in the footer is hidden.

**Type**: `bool`

---

`initialState`

The initial state of the DataGridExtra. The data in it will be set in the state on initialization but will not be controlled. If one of the data in `initialState` is also being controlled, then the control state wins.

**Type**: `object`

---

`isCellEditable`

Callback fired when a cell is rendered, returns true if the cell is editable.

**Type**: `func`

**Signature**: `function(params: GridCellParams) => boolean`

* **params**: With all properties from GridCellParams.

**Returns**: A boolean indicating if the cell is editable.

---

`isGroupExpandedByDefault`

Determines if a group should be expanded after its creation. This prop takes priority over the `defaultGroupingExpansionDepth` prop.

**Type**: `func`

**Signature**: `function(node: GridGroupNode) => boolean`

* **node**: The node of the group to test.

**Returns**: A boolean indicating if the group is expanded.

---

`isRowSelectable`

Determines if a row can be selected.

**Type**: `func`

**Signature**: `function(params: GridRowParams) => boolean`

* **params**: With all properties from GridRowParams.

**Returns**: A boolean indicating if the cell is selectable.

---

`keepColumnPositionIfDraggedOutside`

If `true`, moving the mouse pointer outside the grid before releasing the mouse button in a column re-order action will not cause the column to jump back to its original position.

**Type**: `bool`

---

`keepNonExistentRowsSelected`

If `true`, the selection model will retain selected rows that do not exist. Useful when using server side pagination and row selections need to be retained when changing pages.

**Type**: `bool`

---

`loading`

If `true`, a loading overlay is displayed.

**Type**: `bool`

---

`localeText`

Set the locale text of the grid. You can find all the translation keys supported in [the source](https://github.com/mui/mui-x/blob/HEAD/packages/grid/x-data-grid/src/constants/localeTextConstants.ts).

**Type**: `object`

---

`logger`

Pass a custom logger in the components that implements the Logger interface.

**Type**: `{ debug: func, error: func, info: func, warn: func }` **Default**: `console`

---

`logLevel`

Allows to pass the logging level or false to turn off logging.

**Type**: `'debug' | 'error' | 'info' | 'warn' | false` **Default**: `"error" ("warn" in dev mode)`

---

`nonce`

Nonce of the inline styles for [Content Security Policy](https://www.w3.org/TR/2016/REC-CSP2-20161215/#script-src-the-nonce-attribute).

**Type**: `string`

---

`onCellClick`

Callback fired when any cell is clicked.

**Type**: `func`

**Signature**: `function(params: GridCellParams, event: MuiEvent, details: GridCallbackDetails) => void`
* **params**: With all properties from GridCellParams.
* **event**: The event object.
* **details**: Additional details for this callback.

---

`onCellDoubleClick`

Callback fired when a double click event comes from a cell element.

**Type**: `func`

**Signature**:`function(params: GridCellParams, event: MuiEvent, details: GridCallbackDetails) => void`

* **params**: With all properties from GridCellParams.
* **event**: The event object.
* **details**: Additional details for this callback.

---

`onCellEditStart`

Callback fired when the cell turns to edit mode.

**Type**: `func`

**Signature**: `function(params: GridCellParams, event: MuiEvent) => void`

* **params**: With all properties from GridCellParams.
* **event**: The event that caused this prop to be called.

---

`onCellEditStop`

Callback fired when the cell turns to view mode.

**Type**: `func`

**Signature**: `function(params: GridCellParams, event: MuiEvent) => void`

* **params**: With all properties from GridCellParams.
* **event**: The event that caused this prop to be called.

---

`onCellKeyDown`

Callback fired when a keydown event comes from a cell element.

**Type**: `func`

**Signature**: `function(params: GridCellParams, event: MuiEvent, details: GridCallbackDetails) => void`

* **params**: With all properties from GridCellParams.
* **event**: The event object.
* **details**: Additional details for this callback.

---

`onCellModesModelChange`

Callback fired when the cellModesModel prop changes.

**Type**: `func`

**Signature**: `function(cellModesModel: GridCellModesModel, details: GridCallbackDetails) => void`

* **cellModesModel**: Object containing which cells are in "edit" mode.
* **details**: Additional details for this callback.

---

`onClipboardCopy`

Callback called when the data is copied to the clipboard.

**Type**: `func`

**Signature**: `function(data: string) => void`

* **data**: The data copied to the clipboard.

---

`onColumnHeaderClick`

Callback fired when a click event comes from a column header element.

**Type**: `func`

**Signature**: `function(params: GridColumnHeaderParams, event: MuiEvent, details: GridCallbackDetails) => void`

* **params**: With all properties from GridColumnHeaderParams.
* **event**: The event object.
* **details**: Additional details for this callback.

---

`onColumnHeaderDoubleClick`

Callback fired when a double click event comes from a column header element.

**Type**: `func`

**Signature**: `function(params: GridColumnHeaderParams, event: MuiEvent, details: GridCallbackDetails) => void`

* **params**: With all properties from GridColumnHeaderParams.
* **event**: The event object.
* **details**: Additional details for this callback.

---

`onColumnHeaderEnter`

Callback fired when a mouse enter event comes from a column header element.

**Type**: `func`

**Signature**: `function(params: GridColumnHeaderParams, event: MuiEvent, details: GridCallbackDetails) => void`

* **params**: With all properties from GridColumnHeaderParams.
* **event**: The event object.
* **details**: Additional details for this callback.

---

`onColumnHeaderLeave`

Callback fired when a mouse leave event comes from a column header element.

**Type**: `func`

**Signature**: `function(params: GridColumnHeaderParams, event: MuiEvent, details: GridCallbackDetails) => void`

* **params**: With all properties from GridColumnHeaderParams.
* **event**: The event object.
* **details**: Additional details for this callback.

---

`onColumnHeaderOut`

Callback fired when a mouseout event comes from a column header element.

**Type**: `func`

**Signature**: `function(params: GridColumnHeaderParams, event: MuiEvent, details: GridCallbackDetails) => void`

* **params**: With all properties from GridColumnHeaderParams.
* **event**: The event object.
* **details**: Additional details for this callback.

---

`onColumnHeaderOver`

Callback fired when a mouseover event comes from a column header element.

**Type**: `func`

**Signature**: `function(params: GridColumnHeaderParams, event: MuiEvent, details: GridCallbackDetails) => void`

* **params**: With all properties from GridColumnHeaderParams.
* **event**: The event object.
* **details**: Additional details for this callback.

---

`onColumnOrderChange`

Callback fired when a column is reordered.

**Type**: `func`

**Signature**: `function(params: GridColumnOrderChangeParams, event: MuiEvent<{}>, details: GridCallbackDetails) => void`

* **params**: With all properties from GridColumnOrderChangeParams.
* **event**: The event object.
* **details**: Additional details for this callback.

---

`onColumnResize`

Callback fired while a column is being resized.

**Type**: `func`

**Signature**: `function(params: GridColumnResizeParams, event: MuiEvent, details: GridCallbackDetails) => void`

* **params**: With all properties from GridColumnResizeParams.
* **event**: The event object.
* **details**: Additional details for this callback.

---

`onColumnVisibilityModelChange`

Callback fired when the column visibility model changes.

**Type**: `func`

**Signature**: `function(model: GridColumnVisibilityModel, details: GridCallbackDetails) => void`

* **model** The new model.
* **details** Additional details for this callback.

---

`onColumnWidthChange`

Callback fired when the width of a column is changed.

**Type**: `func`

**Signature**: `function(params: GridColumnResizeParams, event: MuiEvent, details: GridCallbackDetails) => void`

* **params**: With all properties from GridColumnResizeParams.
* **event**: The event object.
* **details**: Additional details for this callback.

---

`onDetailPanelExpandedRowIdsChange`

Callback fired when the detail panel of a row is opened or closed.

**Type**: `func`

**Signature**: `function(ids: Array, details: GridCallbackDetails) => void`

* **ids**: The ids of the rows which have the detail panel open.
* **details**: Additional details for this callback.

---

`onFetchRows`

Callback fired when rowCount is set and the next batch of virtualized rows is rendered.

**Type**: `func`

**Signature**: `function(params: GridFetchRowsParams, event: MuiEvent<{}>, details: GridCallbackDetails) => void`

* **params**: With all properties from GridFetchRowsParams.
* **event**: The event object.
* **details**: Additional details for this callback.

---

`onFilterModelChange`

Callback fired when the Filter model changes before the filters are applied.

**Type**: `func`

**Signature**: `function(model: GridFilterModel, details: GridCallbackDetails) => void`

* **model**: With all properties from GridFilterModel.
* **details**: Additional details for this callback.

---

`onMenuClose`

Callback fired when the menu is closed.

**Type**: `func`

**Signature**: `function(params: GridMenuParams, event: MuiEvent<{}>, details: GridCallbackDetails) => void`

* **params**: With all properties from GridMenuParams.
* **event**: The event object.
* **details**: Additional details for this callback.

---

`onMenuOpen`

Callback fired when the menu is opened.

**Type**: `func`

**Signature**: `function(params: GridMenuParams, event: MuiEvent<{}>, details: GridCallbackDetails) => void`

* **params**: With all properties from GridMenuParams.
* **event**: The event object.
* **details**: Additional details for this callback.

---

`onPaginationModelChange`

Callback fired when the pagination model has changed.

**Type**: `func`

**Signature**: `function(model: GridPaginationModel, details: GridCallbackDetails) => void`

* **model**: Updated pagination model.
* **details**: Additional details for this callback.

---

`onPinnedColumnsChange`

Callback fired when the pinned columns have changed.

**Type**: `func`

**Signature**: `function(pinnedColumns: GridPinnedColumns, details: GridCallbackDetails) => void`

* **pinnedColumns**: The changed pinned columns.
* **details**: Additional details for this callback.

---

`onPreferencePanelClose`

Callback fired when the preferences panel is closed.

**Type**: `func`

**Signature**: `function(params: GridPreferencePanelParams, event: MuiEvent<{}>, details: GridCallbackDetails) => void`

* **params**: With all properties from GridPreferencePanelParams.
* **event**: The event object.
* **details**: Additional details for this callback.

---

`onPreferencePanelOpen`

Callback fired when the preferences panel is opened.

**Type**: `func`

**Signature**: `function(params: GridPreferencePanelParams, event: MuiEvent<{}>, details: GridCallbackDetails) => void`

* **params**: With all properties from GridPreferencePanelParams.
* **event**: The event object.
* **details**: Additional details for this callback.

---

`onProcessRowUpdateError`

Callback called when `processRowUpdate` throws an error or rejects.

**Type**: `func`

**Signature**: `function(error: any) => void`

* **error**: The error thrown.

---

`onResize`

Callback fired when the grid is resized.

**Type**: `func`

**Signature**: `function(containerSize: ElementSize, event: MuiEvent<{}>, details: GridCallbackDetails) => void`

* **containerSize**: With all properties from ElementSize.
* **event**: The event object.
* **details**: Additional details for this callback.

---

`onRowClick`

Callback fired when a row is clicked. Not called if the target clicked is an interactive element added by the built-in columns.

**Type**: `func`

**Signature**: `function(params: GridRowParams, event: MuiEvent, details: GridCallbackDetails) => void`

* **params**: With all properties from GridRowParams.
* **event**: The event object.
* **details**: Additional details for this callback.

---

`onRowDoubleClick`

Callback fired when a double click event comes from a row container element.

**Type**: `func`

**Signature**: `function(params: GridRowParams, event: MuiEvent, details: GridCallbackDetails) => void`

* **params**: With all properties from RowParams.
* **event**: The event object.
* **details**: Additional details for this callback.

---

`onRowEditCommit`

Callback fired when the row changes are committed.

**Type**: `func` 

**Signature**: `function(id: GridRowId, event: MuiEvent) => void`

* **id**: The row id.
* **event**: The event that caused this prop to be called.

---

`onRowEditStart`

Callback fired when the row turns to edit mode.

**Type**: `func`

**Signature**: `function(params: GridRowParams, event: MuiEvent) => void`

* **params**: With all properties from GridRowParams.
* **event**: The event that caused this prop to be called.

---

`onRowEditStop`

Callback fired when the row turns to view mode.

**Type**: `func`

**Signature**: `function(params: GridRowParams, event: MuiEvent) => void`

* **params**: With all properties from GridRowParams.
* **event**: The event that caused this prop to be called.

---

`onRowModesModelChange`

Callback fired when the `rowModesModel` prop changes.

**Type**: `func`

**Signature**: `function(rowModesModel: GridRowModesModel, details: GridCallbackDetails) => void`

* **rowModesModel**: Object containing which rows are in "edit" mode.
* **details**: Additional details for this callback.

--- 

`onRowOrderChange`

Callback fired when a row is being reordered.

**Type**: `func`

**Signature**: `function(params: GridRowOrderChangeParams, event: MuiEvent<{}>, details: GridCallbackDetails) => void`

* **params**: With all properties from GridRowOrderChangeParams.
* **event**: The event object.
* **details**: Additional details for this callback.

---

`onRowSelectionModelChange`

Callback fired when the selection state of one or multiple rows changes.

**Type**: `func`

**Signature**: `function(rowSelectionModel: GridRowSelectionModel, details: GridCallbackDetails) => void`

* **rowSelectionModel**: With all the row ids GridSelectionModel.
* **details**: Additional details for this callback.

---

`onRowsScrollEnd`

Callback fired when scrolling to the bottom of the grid viewport.

**Type**: `func`

**Signature**: `function(params: GridRowScrollEndParams, event: MuiEvent<{}>, details: GridCallbackDetails) => void`

* **params**: With all properties from GridRowScrollEndParams.
* **event**: The event object.
* **details**: Additional details for this callback.

---

`onSortModelChange`

Callback fired when the sort model changes before a column is sorted.

**Type**: `func`

**Signature**: `function(model: GridSortModel, details: GridCallbackDetails) => void`

* **model**: With all properties from GridSortModel.
* **details**: Additional details for this callback.

---

`pageSizeOptions`

Select the pageSize dynamically using the component UI.

**Type**: `Array<number | { label: string, value: number }>` **Default**: `[25, 50, 100]`

---

`pagination`

If `true`, pagination is enabled.

**Type**: `bool`

---

`paginationMode`

Pagination can be processed on the server or client-side. Set it to 'client' if you would like to handle the pagination on the client-side. Set it to 'server' if you would like to handle the pagination on the server-side.

**Type**: `'client' | 'server'` **Default**: `"client"`

---

`paginationModel`

The pagination model of type GridPaginationModel which refers to current `page` and `pageSize`.

**Type**: `{ page: number, pageSize: number }`

---

`pinnedColumns`

The column fields to display pinned to left or right.

**Type**: `{ left?: Array<string>, right?: Array<string> }`

---

`pinnedRows`

Rows data to pin on top or bottom.

**Type**: `{ bottom?: Array<object>, top?: Array<object> }`

---

`processRowUpdate`

Callback called before updating a row with new values in the row and cell editing.

**Type**: `func`

**Signature**: `function(newRow: R, oldRow: R) => Promise | R`

* **newRow**: Row object with the new values.
* **oldRow**: Row object with the old values.

**Returns**: The final values to update the row.

---

`rowBuffer`

Number of extra rows to be rendered before/after the visible slice.

**Type**: `number` **Default**: `3`

---

`rowCount`

Set the total number of rows, if it is different from the length of the value `rows` prop. If some rows have children (for instance in the tree data), this number represents the amount of top level rows.

**Type**: `number`

---

`rowHeight`

Sets the height in pixel of a row in the grid.

**Type**: `number` **Default**: `52`

---

`rowModesModel`

Controls the modes of the rows.

**Type**: `object`

---

`rowReordering`

If `true`, the reordering of rows is enabled.

**Type**: `bool`

---

`rowSelection`

If `false`, the row selection mode is disabled.

**Type**: `bool` **Default**: `true`

---

`rowSelectionModel`

Sets the row selection model of the grid.

`Type`: `Array<number | string> | number | string`

---

`rowsLoadingMode`

Loading rows can be processed on the server or client-side. Set it to 'client' if you would like enable infnite loading. Set it to 'server' if you would like to enable lazy loading. * @default "client"

**Type**: `'client' | 'server'`

---

`rowSpacingType`

Sets the type of space between rows added by `getRowSpacing`.

**Type**: `'border' | 'margin'` **Default**: `"margin"`

---

`rowThreshold`

Number of rows from the `rowBuffer` that can be visible before a new slice is rendered.

**Type**: `number` **Default**: `3`

---

`scrollbarSize`

Override the height/width of the grid inner scrollbar.

**Type**: `number`

---

`scrollEndThreshold`

Set the area in `px` at the bottom of the grid viewport where onRowsScrollEnd is called.

**Type**: `number` **Default**: `80`

---

`showCellVerticalBorder`

If true, the vertical borders of the cells are displayed.

**Type**: `bool`

---

`showColumnVerticalBorder`

If `true`, the right border of the column headers are displayed.

**Type**: `bool`

---

`slotProps`

Overridable components props dynamically passed to the component at rendering.

**Type**: `object`

---

`slots`

Overridable components.

**Type**: `object`

---

`sortingMode`

Sorting can be processed on the server or client-side. Set it to 'client' if you would like to handle sorting on the client-side. Set it to 'server' if you would like to handle sorting on the server-side.

**Type**: `'client' | 'server'` **Default**: `"client"`

---

`sortingOrder`

The order of the sorting sequence.

**Type**: `Array<'asc' | 'desc'>` **Default**: `['asc', 'desc', null]`

---

`sortModel`

Set the sort model of the grid.

**Type**: `Array<{ field: string, sort?: 'asc' | 'desc' }>`

---

`sx`

The system prop that allows defining system overrides as well as additional CSS styles.

See the [sx page](https://mui.com/system/getting-started/the-sx-prop/) for more details.

**Type**: `Array<func | object | bool> | func | object`

---

`throttleRowsMs`

If positive, the Grid will throttle updates coming from `apiRef.current.updateRows` and `apiRef.current.setRows`. It can be useful if you have a high update rate but do not want to do heavy work like filtering / sorting or rendering on each individual update.

**Type**: `number` **Default**: `0`

---

`treeData`

If `true`, the rows will be gathered in a tree structure according to the `getTreeDataPath` prop.

**Type**: `bool`

---

`unstable_headerFilters`

If `true`, enables the data grid filtering on header feature.

**Type**: `bool`

---

`unstable_ignoreValueFormatterDuringExport`

If true, the grid will not use `valueFormatter` when exporting to CSV or copying to clipboard. If an object is provided, you can choose to ignore the `valueFormatter` for CSV export or clipboard export.

**Type**: `{ clipboardExport?: bool, csvExport?: bool } | bool`
**Default**: `false`

---

## Slots

`baseButton`

The custom Button component used in the grid.

**Default**: `Button`

---

`baseCheckbox`

The custom Checkbox component used in the grid for both header and cells.

**Default**: `Checkbox`

---

`baseChip`

The custom Chip component used in the grid.

**Default**: `Chip`

---

`baseFormControl`

The custom FormControl component used in the grid.

**Default**: `FormControl`

---

`baseIconButton`

The custom IconButton component used in the grid.

**Default**: `IconButton`

---

`baseInputAdornment`

The custom InputAdornment component used in the grid.

**Default**: `InputAdornment`

---

`baseInputLabel`

The custom InputLabel component used in the grid.

**Default**: `InputLabel`

---

`basePopper`

The custom Popper component used in the grid.

**Default**: `Popper`

---

`baseSelect`

The custom Select component used in the grid.

**Default**: `Select`

---

`baseSelectOption`

The custom SelectOption component used in the grid.

**Default**: `MenuItem`

---

`baseSwitch`

The custom Switch component used in the grid.

**Default**: `Switch`

---

`baseTextField`

The custom TextField component used in the grid.

**Default**: `TextField`

---

`baseTooltip`

The custom Tooltip component used in the grid.

**Default**: `Tooltip`

---

`booleanCellFalseIcon`

Icon displayed on the boolean cell to represent the false value.

**Default**: `GridCloseIcon`

---

`booleanCellTrueIcon`

Icon displayed on the boolean cell to represent the true value.

**Default**: `GridCheckIcon`

---

`cell`

Component rendered for each cell.

**Default**: `GridCell`

---

`columnFilteredIcon`

Icon displayed on the column header menu to show that a filter has been applied to the column.

**Default**: `GridFilterAltIcon`

---

`columnHeaderFilterIconButton`

Filter icon component rendered in each column header.

**Default**: `GridColumnHeaderFilterIconButton`

---

`columnHeaders`

Component responsible for rendering the column headers.

**Default**: `DataGridColumnHeaders`

---

`columnMenu`

Column menu component rendered by clicking on the 3 dots "kebab" icon in column headers.

**Default**: `GridColumnMenu`

---

`columnMenuClearIcon`

Icon displayed in column menu for clearing values

**Default**: `GridClearIcon`

---

`columnMenuFilterIcon`

Icon displayed in column menu for filter

**Default**: `GridFilterAltIcon`

---

`columnMenuHideIcon`

Icon displayed in column menu for hiding column

`Default`: **GridVisibilityOffIcon**

---

`columnMenuIcon`

Icon displayed on the side of the column header title to display the filter input component.

**Default**: `GridTripleDotsVerticalIcon`

---

`columnMenuManageColumnsIcon`

Icon displayed in column menu for showing all columns

**Default**: `GridViewColumnIcon`

---

`columnMenuPinLeftIcon`

Icon displayed in column menu for left pinning

**Default**: `GridPushPinLeftIcon`

---

`columnMenuPinRightIcon`

Icon displayed in column menu for right pinning

**Default**: `GridPushPinRightIcon`

---

`columnMenuSortAscendingIcon`

Icon displayed in column menu for ascending sort

**Default**: `GridArrowUpwardIcon`

---

`columnMenuSortDescendingIcon`

Icon displayed in column menu for descending sort

**Default**: `GridArrowDownwardIcon`

---

`columnReorderIcon`

Icon displayed on the column reorder button.

**Default**: `GridDragIcon`

---

`columnResizeIcon`

Icon displayed in between two column headers that allows to resize the column header.

**Default**: `GridSeparatorIcon`

---

`columnSelectorIcon`

Icon displayed on the column menu selector tab.

**Default**: `GridColumnIcon`

---

`columnSortedAscendingIcon`

Icon displayed on the side of the column header title when sorted in ascending order.

**Default**: `GridArrowUpwardIcon`

---

`columnSortedDescendingIcon`

Icon displayed on the side of the column header title when sorted in descending order.

**Default**: `GridArrowDownwardIcon`

---

`columnUnsortedIcon`

Icon displayed on the side of the column header title when unsorted.

**Default**: `GridColumnUnsortedIcon`

---

`columnsPanel`

GridColumns panel component rendered when clicking the columns button.

**Default**: `GridColumnsPanel`

---

`densityComfortableIcon`

Icon displayed on the "comfortable" density option in the toolbar.

**Default**: `GridViewStreamIcon`

---

`densityCompactIcon`

Icon displayed on the compact density option in the toolbar.

**Default**: `GridViewHeadlineIcon`

---

`densityStandardIcon`

Icon displayed on the standard density option in the toolbar.

**Default**: `GridTableRowsIcon`

---

`detailPanelCollapseIcon`

Icon displayed on the detail panel toggle column when expanded.

**Default**: `GridRemoveIcon`

---

`detailPanelExpandIcon`

Icon displayed on the detail panel toggle column when collapsed.

**Default**: `GridAddIcon`

---

`exportIcon`

Icon displayed on the open export button present in the toolbar by default.

**Default**: `GridSaveAltIcon`

---

`filterPanel`

Filter panel component rendered when clicking the filter button.

**Default**: `GridFilterPanel`

---

`filterPanelAddIcon`

Icon displayed for deleting the filter from filter panel.

**Default**: `GridAddIcon`

---

`filterPanelDeleteIcon`

Icon displayed for deleting the filter from filter panel.

**Default**: `GridDeleteIcon`

---

`filterPanelRemoveAllIcon`

Icon displayed for deleting all the active filters from filter panel.

**Default**: `GridDeleteForeverIcon`

---

`footer`

Footer component rendered at the bottom of the grid viewport.

**Default**: `GridFooter`

---

`groupingCriteriaCollapseIcon`

Icon displayed on the grouping column when the children are expanded

**Default**: `GridExpandMoreIcon`

---

`groupingCriteriaExpandIcon`

Icon displayed on the grouping column when the children are collapsed

**Default**: `GridKeyboardArrowRight`

---

`headerFilterCell`

Component responsible for showing menu adornment in Header filter row

**Default**: `GridHeaderFilterCell`

---

`headerFilterMenu`

Component responsible for showing menu in Header filter row

**Default**: `GridHeaderFilterMenu`

---

`loadIcon`

Icon displayed on the input while processing.

**Default**: `GridLoadIcon`

---

`loadingOverlay`

Loading overlay component rendered when the grid is in a loading state.

**Default**: `GridLoadingOverlay`

---

`moreActionsIcon`

Icon displayed on the actions column type to open the menu.

**Default**: `GridMoreVertIcon`

---

`noResultsOverlay`

No results overlay component rendered when the grid has no results after filtering.

**Default**: `GridNoResultsOverlay`

---

`noRowsOverlay`

No rows overlay component rendered when the grid has no rows.

**Default**: `GridNoRowsOverlay`

---

`openFilterButtonIcon`

Icon displayed on the open filter button present in the toolbar by default.

**Default**: `GridFilterListIcon`

---

`pagination`

Pagination component rendered in the grid footer by default.

**Default**: `Pagination`

---

`panel`

Panel component wrapping the filters and columns panels.

**Default**: `GridPanel`

---

`preferencesPanel`

PreferencesPanel component rendered inside the Header component.

**Default**: `GridPreferencesPanel`

---

`quickFilterClearIcon`

Icon displayed on the quick filter reset input.

**Default**: `GridCloseIcon`

---

`quickFilterIcon`

Icon displayed on the quick filter input.

**Default**: `GridSearchIcon`

---

`row`

Component rendered for each row.

**Default**: `GridRow`

---

`rowReorderIcon`

Icon displayed on the reorder column type to reorder a row.

**Default**: `GridDragIcon`

---

`skeletonCell`

Component rendered for each skeleton cell.

**Default**: `GridSkeletonCell`

---

`toolbar`

Toolbar component rendered inside the Header component.

**Default**: `null`

---

`treeDataCollapseIcon`

Icon displayed on the tree data toggling column when the children are expanded

**Default**: `GridExpandMoreIcon`

---

`treeDataExpandIcon`

Icon displayed on the tree data toggling column when the children are collapsed

**Default**: `GridKeyboardArrowRight`

---

## CSS

`.MuiDataGrid-actionsCell` **actionsCell**

Styles applied to the root element of the cell with type="actions".

---

`.MuiDataGrid-aggregationColumnHeader` **aggregationColumnHeader**

Styles applied to the root element of the column header when aggregated.

---

`.MuiDataGrid-aggregationColumnHeader--alignLeft` **aggregationColumnHeader--alignLeft**

Styles applied to the root element of the header when aggregation if headerAlign="left".

---

`.MuiDataGrid-aggregationColumnHeader--alignCenter` **aggregationColumnHeader--alignCenter**

Styles applied to the root element of the header when aggregation if headerAlign="center".

---

`.MuiDataGrid-aggregationColumnHeader--alignRight` **aggregationColumnHeader--alignRight**

Styles applied to the root element of the header when aggregation if headerAlign="right".

---

`.MuiDataGrid-aggregationColumnHeaderLabel` **aggregationColumnHeaderLabel**

Styles applied to the aggregation label in the column header when aggregated.

---

`.MuiDataGrid-autoHeight` **autoHeight**

Styles applied to the root element if `autoHeight={true}`.

---

`.MuiDataGrid-booleanCell` **booleanCell**

Styles applied to the icon of the boolean cell.

---

`.MuiDataGrid-cell--editable` **cell--editable**

Styles applied to the cell element if the cell is editable.

---

`.MuiDataGrid-cell--editing` **cell--editing**

Styles applied to the cell element if the cell is in edit mode.

---

`.MuiDataGrid-cell--textCenter` **cell--textCenter**

Styles applied to the cell element if align="center".

---

`.MuiDataGrid-cell--textLeft` **cell--textLeft**

Styles applied to the cell element if align="left".

---

`.MuiDataGrid-cell--textRight` **cell--textRight**

Styles applied to the cell element if align="right".

---

`.MuiDataGrid-cell--withRenderer` **cell--withRenderer**

Styles applied to the cell element if the cell has a custom renderer.

---

`.MuiDataGrid-cell--rangeTop` **cell--rangeTop**

Styles applied to the cell element if it is at the top edge of a cell selection range.

---

`.MuiDataGrid-cell--rangeBottom` **cell--rangeBottom**

Styles applied to the cell element if it is at the bottom edge of a cell selection range.

---

`.MuiDataGrid-cell--rangeLeft` **cell--rangeLeft**

Styles applied to the cell element if it is at the left edge of a cell selection range.

---

`.MuiDataGrid-cell--rangeRight` **cell--rangeRight**

Styles applied to the cell element if it is at the right edge of a cell selection range.

---

`.MuiDataGrid-cell` **cell**

Styles applied to the cell element.

---

`.MuiDataGrid-cellContent` **cellContent**

Styles applied to the element that wraps the cell content.

---

`.MuiDataGrid-cellCheckbox` **cellCheckbox**

Styles applied to the cell checkbox element.

---

`.MuiDataGrid-cellSkeleton` **cellSkeleton**

Styles applied to the skeleton cell element.

---

`.MuiDataGrid-checkboxInput` **checkboxInput**

Styles applied to the selection checkbox element.

---

`.MuiDataGrid-columnHeader--alignCenter` **columnHeader--alignCenter**

Styles applied to the column header if headerAlign="center".

---

`.MuiDataGrid-columnHeader--alignLeft` **columnHeader--alignLeft**

Styles applied to the column header if headerAlign="left".

---

`.MuiDataGrid-columnHeader--alignRight` **columnHeader--alignRight**

Styles applied to the column header if headerAlign="right".

---

`.MuiDataGrid-columnHeader--dragging` **columnHeader--dragging**

Styles applied to the floating column header element when it is dragged.

---

`.MuiDataGrid-columnHeader--moving` **columnHeader--moving**

Styles applied to the column header if it is being dragged.

---

`.MuiDataGrid-columnHeader--numeric` **columnHeader--numeric**

Styles applied to the column header if the type of the column is number.

---

`.MuiDataGrid-columnHeader--sortable` **columnHeader--sortable**

Styles applied to the column header if the column is sortable.

---

`.MuiDataGrid-columnHeader--sorted` **columnHeader--sorted**

Styles applied to the column header if the column is sorted.

---

`.MuiDataGrid-columnHeader--filtered` **columnHeader--filtered**

Styles applied to the column header if the column has a filter applied to it.

---

`.MuiDataGrid-columnHeader` **columnHeader**

Styles applied to the column header element.

---

`.MuiDataGrid-columnGroupHeader` **columnGroupHeader**

Styles applied to the column group header element.

---

`.MuiDataGrid-columnHeaderCheckbox` **columnHeaderCheckbox**

Styles applied to the header checkbox cell element.

---

`.MuiDataGrid-columnHeaderDraggableContainer` **columnHeaderDraggableContainer**

Styles applied to the column header's draggable container element.

---

`.MuiDataGrid-rowReorderCellPlaceholder` **rowReorderCellPlaceholder**

Styles applied to the row's draggable placeholder element inside the special row reorder cell.

---

`.MuiDataGrid-columnHeaderDropZone` **columnHeaderDropZone**

Styles applied to the column headers wrapper if a column is being dragged.

---

`.MuiDataGrid-columnHeaderTitle` **columnHeaderTitle**

Styles applied to the column header's title element

---

`.MuiDataGrid-columnHeaderTitleContainer` **columnHeaderTitleContainer**

Styles applied to the column header's title container element.

---

`.MuiDataGrid-columnHeaderTitleContainerContent` **columnHeaderTitleContainerContent**

Styles applied to the column header's title excepted buttons.

---

`.MuiDataGrid-columnHeader--filledGroup` **columnHeader--filledGroup**

Styles applied to the column group header cell if not empty.

---

`.MuiDataGrid-columnHeader--emptyGroup` **columnHeader--emptyGroup**

Styles applied to the empty column group header cell.

---

`.MuiDataGrid-columnHeader--showColumnBorder` **columnHeader--showColumnBorder**

Styles applied to the column group header cell when show column border.

---

`.MuiDataGrid-columnHeaders` **columnHeaders**

Styles applied to the column headers.

---

`.MuiDataGrid-columnHeadersInner` **columnHeadersInner**

Styles applied to the column headers's inner element.

---

`.MuiDataGrid-columnHeadersInner--scrollable` **columnHeadersInner--scrollable**

Styles applied to the column headers's inner element if there is a horizontal scrollbar.

---

`.MuiDataGrid-columnSeparator--resizable` **columnSeparator--resizable**

Styles applied to the column header separator if the column is resizable.

---

`.MuiDataGrid-columnSeparator--resizing` **columnSeparator--resizing**

Styles applied to the column header separator if the column is being resized.

---

`.MuiDataGrid-columnSeparator--sideLeft` **columnSeparator--sideLeft**

Styles applied to the column header separator if the side is "left".

---

`.MuiDataGrid-columnSeparator--sideRight` **columnSeparator--sideRight**

Styles applied to the column header separator if the side is "right".

---

`.MuiDataGrid-columnSeparator` **columnSeparator**

Styles applied to the column header separator element.

---

`.MuiDataGrid-columnsPanel` **columnsPanel**

Styles applied to the columns panel element.

---

`.MuiDataGrid-columnsPanelRow` **columnsPanelRow**

Styles applied to the columns panel row element.

---

`.MuiDataGrid-detailPanel` **detailPanel**

Styles applied to the detail panel element.

---

`.MuiDataGrid-detailPanels` **detailPanels**

Styles applied to the detail panels wrapper element.

---

`.MuiDataGrid-detailPanelToggleCell` **detailPanelToggleCell**

Styles applied to the detail panel toggle cell element.

---

`.MuiDataGrid-detailPanelToggleCell--expanded` **detailPanelToggleCell--expanded**

Styles applied to the detail panel toggle cell element if expanded.

---

`.MuiDataGrid-footerCell` **footerCell**

Styles applied to the root element of the cell inside a footer row.

---

`.MuiDataGrid-panel` **panel**

Styles applied to the panel element.

---

`.MuiDataGrid-panelHeader` **panelHeader**

Styles applied to the panel header element.

---

`.MuiDataGrid-panelWrapper` **panelWrapper**

Styles applied to the panel wrapper element.

---

`.MuiDataGrid-panelContent` **panelContent**

Styles applied to the panel content element.

---

`.MuiDataGrid-panelFooter` **panelFooter**

Styles applied to the panel footer element.

---

`.MuiDataGrid-paper` **paper**

Styles applied to the paper element.

---

`.MuiDataGrid-editBooleanCell` **editBooleanCell**

Styles applied to root of the boolean edit component.

---

`.MuiDataGrid-filterForm` **filterForm**

Styles applied to the root of the filter form component.

---

`.MuiDataGrid-filterFormDeleteIcon` **filterFormDeleteIcon**

Styles applied to the delete icon of the filter form component.

---

`.MuiDataGrid-filterFormLogicOperatorInput` **filterFormLogicOperatorInput**

Styles applied to the link operator input of the filter form component.

---

`.MuiDataGrid-filterFormColumnInput` **filterFormColumnInput**

Styles applied to the column input of the filter form component.

---

`.MuiDataGrid-filterFormOperatorInput` **filterFormOperatorInput**

Styles applied to the operator input of the filter form component.

---

`.MuiDataGrid-filterFormValueInput` **filterFormValueInput**

Styles applied to the value input of the filter form component.

---

`.MuiDataGrid-editInputCell` **editInputCell**

Styles applied to the root of the input component.

---

`.MuiDataGrid-filterIcon` **filterIcon**

Styles applied to the filter icon element.

---

`.MuiDataGrid-footerContainer` **footerContainer**

Styles applied to the footer container element.

---

`.MuiDataGrid-iconButtonContainer` **iconButtonContainer**

Styles applied to the column header icon's container.

---

`.MuiDataGrid-iconSeparator` **iconSeparator**

Styles applied to the column header separator icon element.

---

`.MuiDataGrid-headerFilterRow` **headerFilterRow**

Styles applied to the column header filter row.

---

`.MuiDataGrid-main` **main**

Styles applied to the main container element.

---

`.MuiDataGrid-menu` **menu**

Styles applied to the menu element.

---

`.MuiDataGrid-menuIcon` **menuIcon**

Styles applied to the menu icon element.

---

`.MuiDataGrid-menuIconButton` **menuIconButton**

Styles applied to the menu icon button element.

---

`.MuiDataGrid-menuOpen` **menuOpen**

Styles applied to the menu icon element if the menu is open.

---

`.MuiDataGrid-menuList` **menuList**

Styles applied to the menu list element.

---

`.MuiDataGrid-overlayWrapper` **overlayWrapper**

Styles applied to the overlay wrapper element.

---

`.MuiDataGrid-overlayWrapperInner` **overlayWrapperInner**

Styles applied to the overlay wrapper inner element.

---

`.MuiDataGrid-overlay` **overlay**

Styles applied to the overlay element.

---

`.MuiDataGrid-virtualScroller` **virtualScroller**

Styles applied to the virtualization container.

---

`.MuiDataGrid-virtualScrollerContent` **virtualScrollerContent**

Styles applied to the virtualization content.

---

`.MuiDataGrid-virtualScrollerContent--overflowed` **virtualScrollerContent--overflowed**

Styles applied to the virtualization content when its height is bigger than the virtualization container.

---

`.MuiDataGrid-virtualScrollerRenderZone` **virtualScrollerRenderZone**

Styles applied to the virtualization render zone.

---

`.MuiDataGrid-pinnedColumns` **pinnedColumns**

Styles applied to the pinned columns.

---

`.MuiDataGrid-pinnedColumns--left` **pinnedColumns--left**

Styles applied to the left pinned columns.

---

`.MuiDataGrid-pinnedColumns--right` **pinnedColumns--right**

Styles applied to the right pinned columns.

---

`.MuiDataGrid-pinnedColumnHeaders` **pinnedColumnHeaders**

Styles applied to the pinned column headers.

---

`.MuiDataGrid-pinnedColumnHeaders--left` **pinnedColumnHeaders--left**

Styles applied to the left pinned column headers.

---

`.MuiDataGrid-pinnedColumnHeaders--right` **pinnedColumnHeaders--right**

Styles applied to the right pinned column headers.

---

`.MuiDataGrid-root` **root**

Styles applied to the root element.

---

`.MuiDataGrid-root--densityStandard` **root--densityStandard**

Styles applied to the root element if density is "standard" (default).

---

`.MuiDataGrid-root--densityComfortable` **root--densityComfortable**

Styles applied to the root element if density is "comfortable".

---

`.MuiDataGrid-root--densityCompact` **root--densityCompact**

Styles applied to the root element if density is "compact".

---

`.MuiDataGrid-root--disableUserSelection` **root--disableUserSelection**

Styles applied to the root element when user selection is disabled.

---

`.MuiDataGrid-row--editable` **row--editable**

Styles applied to the row element if the row is editable.

---

`.MuiDataGrid-row--editing` **row--editing**

Styles applied to the row element if the row is in edit mode.

---

`.MuiDataGrid-row--dragging` **row--dragging**

Styles applied to the floating special row reorder cell element when it is dragged.

---

`.MuiDataGrid-row--lastVisible` **row--lastVisible**

Styles applied to the last visible row element on every page of the grid.

---

`.MuiDataGrid-row--dynamicHeight` **row--dynamicHeight**

Styles applied to the row if it has dynamic row height.

---

`.MuiDataGrid-row--detailPanelExpanded` **row--detailPanelExpanded**

Styles applied to the row if its detail panel is open.

---

`.MuiDataGrid-row` **row**

Styles applied to the row element.

---

`.MuiDataGrid-rowCount` **rowCount**

Styles applied to the footer row count element to show the total number of rows. Only works when pagination is disabled.

---

`.MuiDataGrid-rowReorderCellContainer` **rowReorderCellContainer**

Styles applied to the row reorder cell container element.

---

`.MuiDataGrid-rowReorderCell` **rowReorderCell**

Styles applied to the root element of the row reorder cell

---

`.MuiDataGrid-rowReorderCell--draggable` **rowReorderCell--draggable**

Styles applied to the root element of the row reorder cell when dragging is allowed

---

`.MuiDataGrid-scrollArea` **scrollArea**

Styles applied to both scroll area elements.

---

`.MuiDataGrid-scrollArea--left` **scrollArea--left**

Styles applied to the left scroll area element.

---

`.MuiDataGrid-scrollArea--right` **scrollArea--right**

Styles applied to the right scroll area element.

---

`.MuiDataGrid-selectedRowCount` **selectedRowCount**

Styles applied to the footer selected row count element.

---

`.MuiDataGrid-sortIcon` **sortIcon**

Styles applied to the sort icon element.

---

`.MuiDataGrid-toolbarContainer` **toolbarContainer**

Styles applied to the toolbar container element.

---

`.MuiDataGrid-toolbarFilterList` **toolbarFilterList**

Styles applied to the toolbar filter list element.

---

`.MuiDataGrid-withBorderColor` **withBorderColor**

Styles applied to cells, column header and other elements that have border. Sets border color only.

---

`.MuiDataGrid-cell--withRightBorder` **cell--withRightBorder**

Styles applied the cell if `showColumnVerticalBorder={true}`.

---

`.MuiDataGrid-columnHeader--withRightBorder` **columnHeader--withRightBorder**

Styles applied the column header if `showColumnVerticalBorder={true}`.

---

`.MuiDataGrid-treeDataGroupingCell` **treeDataGroupingCell**

Styles applied to the root of the grouping column of the tree data.

---

`.MuiDataGrid-treeDataGroupingCellToggle` **treeDataGroupingCellToggle**

Styles applied to the toggle of the grouping cell of the tree data.

---

`.MuiDataGrid-groupingCriteriaCell` **groupingCriteriaCell**

Styles applied to the root element of the grouping criteria cell

---

`.MuiDataGrid-groupingCriteriaCellToggle` **groupingCriteriaCellToggle**

Styles applied to the toggle of the grouping criteria cell

---

`.MuiDataGrid-pinnedRows` **pinnedRows**

Styles applied to the pinned rows container.

---

`.MuiDataGrid-pinnedRows--top` **pinnedRows--top**

Styles applied to the top pinned rows container.

---

`.MuiDataGrid-pinnedRows--bottom` **pinnedRows--bottom**

Styles applied to the bottom pinned rows container.

---

`.MuiDataGrid-pinnedRowsRenderZone` **pinnedRowsRenderZone**

Styles applied to pinned rows render zones.

---

[![Buy me a coffee](https://img.buymeacoffee.com/button-api/?url=https%3A%2F%2Fwww.buymeacoffee.com%2Fxantos008&text=Buy%20me%20a%20coffee&emoji=&slug=xantos008&button_colour=FFDD00&font_colour=000000&font_family=Lato&outline_colour=000000&coffee_colour=ffffff)](https://www.buymeacoffee.com/xantos008)
