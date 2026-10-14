interface TablePaginationProps {
    page: number;
    pageSize: number;
    total: number;
    onPageChange: (page: number) => void;
    onPageSizeChange: (pageSize: number) => void;
}

const TablePagination = ({
    page,
    pageSize,
    total,
    onPageChange,
    onPageSizeChange,
}: TablePaginationProps) => {
    const totalPages = Math.ceil(total / pageSize);

    const start = total === 0 ? 0 : (page - 1) * pageSize + 1;

    const end = Math.min(page * pageSize, total);

    return (
        <div className="d-flex justify-content-between align-items-center mt-3 row">

            <div className="d-flex align-items-center justify-content-start gap-2 col-md-4">
                <span className="me-2">Rows per page:</span>

                <select
                    className="form-select form-select-sm w-25"
                    value={pageSize}
                    onChange={(e) => {
                        onPageSizeChange(Number(e.target.value));
                        onPageChange(1);
                    }}
                >
                    <option value={10}>10</option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                </select>
            </div>

            <div className="d-flex align-items-center justify-content-end gap-3 col-md-8">

                <span>
                    Showing {start}–{end} of {total.toLocaleString()}
                </span>

                <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                    disabled={page === 1}
                    onClick={() => onPageChange(page - 1)}
                >
                    Previous
                </button>

                <span>
                    Page {page} of {totalPages}
                </span>

                <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                    disabled={page >= totalPages}
                    onClick={() => onPageChange(page + 1)}
                >
                    Next
                </button>

            </div>
        </div>
    );
};

export default TablePagination;