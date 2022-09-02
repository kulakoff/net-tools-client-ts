import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IApiResponse } from "../../types/response/IAuthResponse";
import { IAuthResponse, ISignInForm, ISignUpForm } from "../../types/user";
import customFetchBase from "./customFetchBase";
import { userApi } from "./userApi";

const BASE_AUTH_URL: string = "http://localhost:5000/api/v1/";
export const authAPI = createApi({
  reducerPath: "authAPI",
  baseQuery: customFetchBase,
  endpoints: (build) => ({
    userLogin: build.mutation<IAuthResponse, ISignInForm>({
      query: (user) => ({
        url: "/auth/login",
        method: "POST",
        body: user,
        credentials: "include",
      }),
      //Получаем данные пользователя в state
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          await dispatch(userApi.endpoints.getMe.initiate(null));
        } catch (error) {}
      },
    }),
    userLogout: build.mutation<IApiResponse, any>({
      query: () => ({
        method: "POST",
        url: "/auth/logout",
        credentials: "include",
      }),
    }),
    userRegistration: build.mutation<IAuthResponse, ISignUpForm>({
      query: (user) => ({
        url: "/auth/registration",
        method: "POST",
        body: user,
        credentials: "include",
      }),
    }),
    userRefreshToken: build.query<IApiResponse, null>({
      query: () => ({
        url: "/auth/refresh",
        credentials: "include",
      }),
    }),
  }),
});
