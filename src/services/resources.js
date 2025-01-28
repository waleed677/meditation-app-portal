import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const resourcesApi = createApi({
  reducerPath: "resourcesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
  }),
  tagTypes: ['Resources'],
  endpoints: (builder) => ({
    getResources: builder.query({
      query: () => `resources.php`,
      providesTags: (result) =>
        result ? [{ type: 'Resources', id: 'LIST' }] : [],
    }),
    addResources: builder.mutation({
      query: (body) => ({
        url: `resources.php`,
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: 'Resources', id: 'LIST' }],
    }),
  }),
});

export const { useGetResourcesQuery, useAddResourcesMutation } = resourcesApi;
