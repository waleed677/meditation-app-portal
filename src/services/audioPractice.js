import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const audioPracticeApi = createApi({
  reducerPath: "audioPracticeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
  }),
  endpoints: (builder) => ({
    getAudioPractice: builder.query({
      query: () => `audio_practice.php`,
    }),
    addAudioPractice: builder.mutation({
      query: (body) => ({
        url: `audio_practice.php`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetAudioPracticeQuery, useAddAudioPracticeMutation } =
  audioPracticeApi;
