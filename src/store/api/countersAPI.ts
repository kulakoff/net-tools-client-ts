import { createApi } from "@reduxjs/toolkit/query/react";
import {
  IResponseReportItem,
  IResponseSendTelemetryReport,
  IResponseTelemetryItem,
  ISendMetersDataForm,
  ResponseCounterItem,
} from "../../types/counters";
import { setCounterHistory } from "../reducers/countersSlice";
import customFetchBase from "./customFetchBase";

export const countersAPI = createApi({
  reducerPath: "countersAPI",
  baseQuery: customFetchBase,
  tagTypes: ["counters"],
  endpoints: (builder) => ({
    getCounters: builder.query<ResponseCounterItem[], null>({
      query: () => ({
        url: "/counters",
        credentials: "include",
      }),
    }),
    getCounterItem: builder.query<ResponseCounterItem, number>({
      query: (counterId) => ({
        url: `/counters/${counterId}`,
        credentials: "include",
      }),
    }),
    getCounterItemHistory: builder.query<IResponseReportItem[], number>({
      query: (counterId) => ({
        url: `/counters/${counterId}/data`,
        credentials: "include",
      }),
      // transformResponse: (res: {
      //   data: { counters_data: any };
      // }) => res.data.counters_data,
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log("onQueryStarted >> ", data);
          dispatch(setCounterHistory(data[0].counters_data));
        } catch (error) {
          console.log(error);
        }
      },
    }),
    sentTelemetry: builder.mutation<
      IResponseSendTelemetryReport,
      ISendMetersDataForm
    >({
      query: (payload) => ({
        url: "/counters/data",
        method: "POST",
        body: payload,
        credentials: "include",
      }),
    }),
  }),
});
