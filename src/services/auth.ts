import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const authApi = createApi({
  reducerPath: "authApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://mintcream-cod-221842.hostingersite.com",
    mode: "cors",
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
        mode: "cors",
        body,
        headers: {
          "Access-Control-Allow-Origin":
            "https://mintcream-cod-221842.hostingersite.com",
          // "Access-Control-Allow-Credentials": "false",
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
