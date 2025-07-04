type Column = {
  header: string;
  accessor: string;
  className?: string;
};

type TableProps<T> = {
  col: Column[];
  data: T[];
  renderRow: (row: T, index: number) => React.ReactNode;
};

const Table = <T,>({ col, data, renderRow }: TableProps<T>) => {
  return (
    <div className="w-full overflow-x-auto rounded-lg shadow-sm border border-gray-200">
      <table className="min-w-full text-sm text-left text-gray-700">
        <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
          <tr>
            {col.map((column) => (
              <th
                key={column.accessor}
                className={`px-4 py-3 font-medium whitespace-nowrap ${column.className || ''}`}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((row, index) => renderRow(row, index))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
