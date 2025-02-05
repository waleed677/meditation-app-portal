import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = import.meta.env.PROD
  ? 'https://mintcream-cod-221842.hostingersite.com/api'
  : '/api'

export const authApi = createApi({
  reducerPath: "authApi",

  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
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
        headers: {
          "Content-Type": "application/json", // example for a different content type
        },
      }),
    }),
    forgotPassword: builder.mutation({
      query: (body) => ({
        url: `admin_auth.php?action=forgot-password`,
        method: "POST",
        body,
      }),
    }),
    verifyOtp: builder.mutation({
      query: (body) => ({
        url: `admin_auth.php?action=verify-otp`,
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
  useVerifyOtpMutation,
  useResetPasswordMutation,
} = authApi;
