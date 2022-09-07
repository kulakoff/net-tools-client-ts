import { createApi } from "@reduxjs/toolkit/query/react";
import { ResponseCounterItem } from "../../types/counters";
import customFetchBase from "./customFetchBase";

export const countersAPI = createApi({
  reducerPath: "countersAPI",
  baseQuery: customFetchBase,
  tagTypes: ["counters"],
  endpoints: (builder) => ({
    getCounters: builder.query<ResponseCounterItem[],null>({
      query: () => ({
        url: "/counters",
        credentials: "include",
      }),
    }),
  }),
});

