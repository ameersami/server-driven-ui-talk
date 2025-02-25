'use client';

import { DataTable } from "lib";
import { DataTableProps } from "lib/dist/interfaces/DataTable";

export default (props: DataTableProps) => (
  <DataTable
    {...props}
    onSelection={() => {}}
    onTableChange={() => {}}
  />
);