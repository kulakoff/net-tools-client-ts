import { createApi } from "@reduxjs/toolkit/query/react";
import { IRequestSendTelemetryReport, IResponseReportItem } from "../../types/counters";
import customFetchBase from "./customFetchBase";

export const reportAPI = createApi({
  reducerPath: "reportAPI",
  baseQuery: customFetchBase,
  tagTypes: ["report"],
  endpoints: (builder) => ({
    getReport: builder.mutation<IResponseReportItem[],IRequestSendTelemetryReport>({
      query: (payload) => ({
        url: "/report",
        method: "POST",
        body: payload,
        credentials: "include",
      }),
    }),
    sendReport: builder.mutation({
      query: (payload) => ({
        url: "/report",
        method: "POST",
        body: payload,
        credentials: "include",
      }),
    }),
  }),
});
