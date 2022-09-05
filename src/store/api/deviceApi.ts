import { createApi } from "@reduxjs/toolkit/query/react";
import { IFormGetDevice } from "../../types/cpe";
import { IDeviceResponse } from "../../types/response/IDeviceResponse";
import customFetchBase from "./customFetchBase";

export const deviceApi = createApi({
  reducerPath: "deviceApi",
  baseQuery: customFetchBase,
  tagTypes: ["device"],
  endpoints: (builder) => ({
    getDevice: builder.query<IDeviceResponse, IFormGetDevice>({
      query: (cpe) => ({
        url: "/device",
        credentials: "include",
        params:  {type: cpe.idType, value: cpe.value} ,
      }),
    }),
  }),
});
