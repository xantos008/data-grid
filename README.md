# data-grid-extra

This package is a full customized data grid component base on mui data grid library.

## Installation

Install the package in your project directory with:

```sh
npm install data-grid-extra
```

## Usage

```sh
import { DataGridExtra } from 'data-grid-extra';

export default function DataGridUltraDemo() {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100000,
    editable: true,
  });

  return (
      <DataGridExtra
        {...data}
        loading={data.rows.length === 0}
        rowHeight={38}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
  );
}
```
