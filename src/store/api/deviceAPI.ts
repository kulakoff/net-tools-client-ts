import { createApi } from "@reduxjs/toolkit/query/react";
import { IFormGetDevice, IFormSetDevice } from "../../types/cpe";
import { IDeviceResponse } from "../../types/response/IDeviceResponse";
import { setCPE } from "../reducers/deviceSlice";
import customFetchBase from "./customFetchBase";

export const deviceAPI = createApi({
  reducerPath: "deviceAPI",
  baseQuery: customFetchBase,
  tagTypes: ["device"],
  endpoints: (builder) => ({
    getDevice: builder.query<IDeviceResponse, IFormGetDevice>({
      query: (cpe) => ({
        url: "/device",
        // credentials: "include",
        params: { type: cpe.idType, value: cpe.value },
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setCPE(data));
        } catch (error) {
          console.log(error);
        }
      },
    }),
    setDevice: builder.mutation<IDeviceResponse, IFormSetDevice>({
      query: (body) => ({
        url: "/device",
        method: "POST",
        // credentials: "include",
        body,
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setCPE(data));
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});
