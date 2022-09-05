import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { useAppDispatch } from "../../hooks/redux";
import { IApiResponse } from "../../types/response/IAuthResponse";
import { IAuthResponse, ISignInForm, ISignUpForm } from "../../types/user";
import userSlice from "../reducers/userSlice";
import customFetchBase from "./customFetchBase";
import { userApi } from "./userApi";
import { logout } from "../reducers/userSlice"

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
      async onQueryStarted(args,{ dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
           dispatch(logout());
        } catch (error) {}
      },
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
