import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const momentApi = createApi({
  reducerPath: "momentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
  }),
  tagTypes: ['Moments'],
  endpoints: (builder) => ({
    getMoment: builder.query({
      query: () => `moments.php`,
      providesTags: (result) =>
        result ? [{ type: 'Moments', id: 'LIST' }] : [],
    }),
    addMoment: builder.mutation({
      query: (body) => ({
        url: `moments.php`,
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: 'Moments', id: 'LIST' }],
    }),
  }),
});

export const { useGetMomentQuery, useAddMomentMutation } = momentApi;
