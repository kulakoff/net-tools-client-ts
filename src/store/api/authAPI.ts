import { createApi } from "@reduxjs/toolkit/query/react";
import { IApiResponse } from "../../types/response/IAuthResponse";
import { IAuthResponse, ISignInForm, ISignUpForm } from "../../types/user";
import customFetchBase from "./customFetchBase";
import { userAPI } from "./userApi";
import { logout } from "../reducers/userSlice";

export const authAPI = createApi({
  reducerPath: "authAPI",
  baseQuery: customFetchBase,
  endpoints: (build) => ({
    userLogin: build.mutation<IAuthResponse, ISignInForm>({
      query: (user) => ({
        url: "/auth/login",
        method: "POST",
        body: user,
        // credentials: "include",
      }),
      //Получаем данные пользователя в state
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          await dispatch(userAPI.endpoints.getMe.initiate(null));
        } catch (error) {}
      },
    }),
    userLogout: build.mutation<IApiResponse, any>({
      query: () => ({
        method: "POST",
        url: "/auth/logout",
        // credentials: "include",
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
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
