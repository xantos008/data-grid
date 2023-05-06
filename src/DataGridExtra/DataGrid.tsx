/**
 * @deprecated Import DataGridExtra instead.
 */
export function DataGrid() {
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  throw new Error(
    [
      "You try to import `DataGrid` from xantos008/data-grid-extra but this module doesn't exist.",
      '',
      "Instead, you can do `import { DataGridExtra } from 'xantos008/data-grid-extra'`.",
    ].join('\n'),
  );
}

/**
 * @deprecated Import DataGridExtra instead.
 */
export function DataGridUltra() {
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  throw new Error(
    [
      "You try to import `DataGridUltra` from xantos008/data-grid-extra but this module doesn't exist.",
      '',
      "Instead, you can do `import { DataGridExtra } from 'xantos008/data-grid-extra'`.",
    ].join('\n'),
  );
}
