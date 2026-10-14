import { baseApi } from "./baseApi";

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
}

export interface UsersResponse {
    users: User[];
    total: number;
    skip: number;
    limit: number;
}

export const usersApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getUsers: builder.query<
            UsersResponse,
            {
                page: number;
                pageSize: number;
            }
        >({
            query: ({ page, pageSize }) => ({
                url: "/users",
                params: {
                    limit: pageSize,
                    skip: (page - 1) * pageSize,
                },
            }),
        }),
    }),
});

export const { useGetUsersQuery } = usersApi;