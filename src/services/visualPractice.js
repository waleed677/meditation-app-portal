import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const visualPracticeApi = createApi({
  reducerPath: "visualPracticeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api", // Ensure this is your correct base URL for the API
  }),
  endpoints: (builder) => ({
    getVisualPractice: builder.query({
      query: () => "visual_practice.php", // Note that this is relative to the baseUrl
    }),
    addVisualPractice: builder.mutation({
      query: (body) => ({
        url: "visual_practice.php", // Same for POST request
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetVisualPracticeQuery, useAddVisualPracticeMutation } =
  visualPracticeApi;
