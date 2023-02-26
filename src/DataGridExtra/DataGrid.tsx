/**
 * @deprecated Import DataGridExtra instead.
 */
export function DataGrid() {
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  throw new Error(
    [
      "You try to import `DataGrid` from data-grid-extra but this module doesn't exist.",
      '',
      "Instead, you can do `import { DataGridExtra } from 'data-grid-extra'`.",
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
      "You try to import `DataGridUltra` from data-grid-extra but this module doesn't exist.",
      '',
      "Instead, you can do `import { DataGridExtra } from 'data-grid-extra'`.",
    ].join('\n'),
  );
}
