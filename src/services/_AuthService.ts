import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IApiResponse } from "../types/response/IAuthResponse";
import { IAuthResponse, ISignInForm, ISignUpForm } from "../types/user";

const BASE_AUTH_URL: string = "http://localhost:5000/api/v1/auth";

export const authAPI = createApi({
  reducerPath: "authAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_AUTH_URL,
  }),
  endpoints: (build) => ({
    userLogin: build.mutation<IAuthResponse, ISignInForm>({
      query: (user) => ({
        url: "/login",
        method: "POST",
        body: user,
      }),
    }),
    userLogout: build.query<IApiResponse, null>({
      query: () => ({
        url: "/logout",
        method: "GET",
      }),
    }),
    userRegistration: build.mutation<IAuthResponse, ISignUpForm>({
      query: (user) => ({
        url: "/registration",
        method: "POST",
        body: user,
      }),
    }),
    userRefreshToken: build.query<IApiResponse, null>({
      query: () => ({
        url: "/refresh",
        credentials: "include",
      }),
    }),
  }),
});
