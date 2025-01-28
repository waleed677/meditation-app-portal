import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const practicesApi = createApi({
  reducerPath: "practicesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
  }),
  tagTypes: ['Practices'],
  endpoints: (builder) => ({
    getPractices: builder.query({
      query: () => `practices.php`,
      providesTags: (result) =>
        result ? [{ type: 'Practices', id: 'LIST' }] : [],
    }),
    addPractices: builder.mutation({
      query: (body) => ({
        url: `practices.php`,
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: 'Practices', id: 'LIST' }],
    }),
  }),
});

export const { useGetPracticesQuery, useAddPracticesMutation } = practicesApi;
