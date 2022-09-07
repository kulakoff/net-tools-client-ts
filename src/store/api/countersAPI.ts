import { createApi } from "@reduxjs/toolkit/query/react";
import { IResponseReportItem, ResponseCounterItem } from "../../types/counters";
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
    getCounterItemHistory: builder.query<IResponseReportItem, number>({
      query: (counterId) => ({
        url: `/counters/${counterId}/data`,
        credentials: "include",
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setCounterHistory(data));
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});
