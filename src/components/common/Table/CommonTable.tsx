import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    useReactTable,
    type ColumnDef,
} from "@tanstack/react-table";

interface CommonTableProps<T> {
    data: T[];
    columns: ColumnDef<T, any>[];
    loading?: boolean;

    // Search
    search?: string;
    onSearch?: (value: string) => void;
    searchPlaceholder?: string;
}

const CommonTable = <T,>({
    data,
    columns,
    loading = false,

    search = "",
    onSearch,
    searchPlaceholder = "Search...",

}: CommonTableProps<T>) => {
    const table = useReactTable({
        data,
        columns,

        state: {
            globalFilter: search,
        },

        onGlobalFilterChange: onSearch,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
    });

    return (
        <div>

            {/* Search + Filters */}
            <div className="d-flex justify-content-end align-items-center gap-2 flex-wrap mb-3">

                {/* Search */}
                <div>
                    <input
                        type="text"
                        className="form-control"
                        placeholder={searchPlaceholder}
                        value={search}
                        onChange={(e) =>
                            onSearch?.(e.target.value)
                        }
                    />
                </div>


            </div>

            {/* Table */}
            <div className="table-responsive">
                <table className="table align-middle mb-0">

                    <thead>
                        {table.getHeaderGroups().map(
                            (headerGroup) => (
                                <tr key={headerGroup.id}>
                                    {headerGroup.headers.map(
                                        (header) => (
                                            <th key={header.id}>
                                                {header.isPlaceholder
                                                    ? null
                                                    : flexRender(
                                                        header.column
                                                            .columnDef
                                                            .header,
                                                        header.getContext()
                                                    )}
                                            </th>
                                        )
                                    )}
                                </tr>
                            )
                        )}
                    </thead>

                    <tbody>
                        {loading ? (
                            <tr>
                                <td
                                    colSpan={columns.length}
                                    className="text-center py-5"
                                >
                                    Loading...
                                </td>
                            </tr>
                        ) : table.getRowModel().rows.length > 0 ? (
                            table.getRowModel().rows.map((row) => (
                                <tr key={row.id}>
                                    {row
                                        .getVisibleCells()
                                        .map((cell) => (
                                            <td key={cell.id}>
                                                {flexRender(
                                                    cell.column
                                                        .columnDef.cell,
                                                    cell.getContext()
                                                )}
                                            </td>
                                        ))}
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan={columns.length}
                                    className="text-center py-5"
                                >
                                    No data found
                                </td>
                            </tr>
                        )}
                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default CommonTable;