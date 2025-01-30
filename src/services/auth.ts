import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
    prepareHeaders: (headers) => {
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
        url: `admin_auth.php?action=login`,
        method: "POST",
        body,
      }),
    }),
    signup: builder.mutation({
      query: (body) => ({
        url: `admin_auth.php?action=register`,
        method: "POST",
        body,
      }),
    }),
    updateUserInfo: builder.mutation({
      query: (body) => ({
        url: `admin_auth.php?action=update`,
        method: "POST",
        body,
      }),
    }),
    forgotPassword: builder.mutation({
      query: (body) => ({
        url: `admin_auth.php?action=forgot-password`,
        method: "POST",
        body,
      }),
    }),
    resetPassword: builder.mutation({
      query: (body) => ({
        url: `admin_auth.php?action=reset-password`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useSignupMutation,
  useUpdateUserInfoMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
} = authApi;
