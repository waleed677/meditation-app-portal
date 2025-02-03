import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://mintcream-cod-221842.hostingersite.com/api",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      const token = localStorage.getItem("authToken");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: `admin_auth.php`,
        method: "POST",
        body,
        headers: {
          "Content-Type": "application/json", // example for a different content type
        },
      }),
    }),
    signup: builder.mutation({
      query: (body) => ({
        url: `admin_auth.php`,
        method: "POST",
        body,
        headers: {
          "Content-Type": "application/json", // example for a different content type
        },
      }),
    }),
    updateUserInfo: builder.mutation({
      query: (body) => ({
        url: `admin_auth.php?action=update`,
        method: "POST",
        body,
        headers: {
          "Content-Type": "application/json", // example for a different content type
        },
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useSignupMutation,
  useUpdateUserInfoMutation,
} = authApi;
