import { useState } from "react";
import type { ColumnDef } from "@tanstack/react-table";

import CommonTable from "../../components/common/Table/CommonTable";
import TablePagination from "../../components/common/Table/TablePagination";

import {
    useGetUsersQuery,
    type User,
} from "../../store/api/userApi";

const Users = () => {
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    const { data, isLoading, isFetching, isError } = useGetUsersQuery({
        page,
        pageSize,
    });

    const [search, setSearch] = useState("");

    console.log("DATA:", data);
    console.log("IS ARRAY:", Array.isArray(data));
    console.log("DATA USERS:", data?.users);

    console.log("FULL API RESPONSE:", data);

    const columns: ColumnDef<User>[] = [
        {
            accessorKey: "id",
            header: "ID",
        },
        {
            accessorKey: "firstName",
            header: "First Name",
        },
        {
            accessorKey: "username",
            header: "UserName",
        },
        {
            accessorKey: "email",
            header: "Email",
        },
        {
            accessorKey: "phone",
            header: "Phone",
        },
        {
            accessorKey: "role",
            header: "Role",
        },
        {
            accessorKey: "gender",
            header: "Gender",
        },
    ];


    if (isError) {
        return (
            <div className="container-fluid">
                <div className="alert alert-danger">
                    Failed to load users.
                </div>
            </div>
        );
    }

    return (
        <div className="container-fluid">

            <div className="d-flex justify-content-between align-items-center mb-4">
                <h4 className="mb-0">Users</h4>

                {isFetching && (
                    <span className="text-muted">
                        Loading...
                    </span>
                )}
            </div>

            <CommonTable
                columns={columns}
                data={data?.users ?? []}
                loading={isLoading}
                search={search}
                onSearch={setSearch}
                searchPlaceholder="Search users..."
            />

            <TablePagination
                page={page}
                pageSize={pageSize}
                total={data?.total ?? 0}

                onPageChange={setPage}
                onPageSizeChange={(newPageSize) => {
                    setPageSize(newPageSize);
                    setPage(1);
                }}
            />

        </div>
    );
};

export default Users;