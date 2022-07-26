import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IAuthResponse, IUserSignIn } from "../types/user";

const BASE_AUTH_URL: string = "http://localhost:5000/api/v1/auth";

export const authAPI = createApi({
  reducerPath: "authAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_AUTH_URL,
  }),
  endpoints: (build) => ({
    userLogin: build.mutation<IUserSignIn, IAuthResponse>({
      query: (user) => ({
        url: "/login",
        method: "POST",
        body: user,
      }),
    }),
    userLogout: build.query({
      query: () => ({}),
    }),
    userRegistration: build.query({
      query: () => ({}),
    }),
    userRefreshToken: build.query({
      query: () => ({}),
    }),
  }),
});
