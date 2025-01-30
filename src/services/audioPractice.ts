import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const audioPracticeApi = createApi({
  reducerPath: "audioPracticeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
  }),
  tagTypes: ["AudioPractice"],
  endpoints: (builder) => ({
    getAudioPractice: builder.query({
      query: () => `audio_practice.php`,
      providesTags: (result) =>
        result ? [{ type: "AudioPractice", id: "LIST" }] : [],
    }),
    addAudioPractice: builder.mutation({
      query: (body) => ({
        url: `audio_practice.php`,
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "AudioPractice", id: "LIST" }],
    }),
  }),
});

export const { useGetAudioPracticeQuery, useAddAudioPracticeMutation } =
  audioPracticeApi;
