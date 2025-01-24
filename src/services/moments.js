import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const momentApi = createApi({
  reducerPath: "momentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
  }),
  endpoints: (builder) => ({
    getMoment: builder.query({
      query: () => `moments.php`,
    }),
    addMoment: builder.mutation({
      query: (body) => ({
        url: `moments.php`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetMomentQuery, useAddMomentMutation } = momentApi;
