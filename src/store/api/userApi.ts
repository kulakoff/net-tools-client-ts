import { createApi } from '@reduxjs/toolkit/query/react';
import { setUser } from '../reducers/userSlice';
import customFetchBase from './customFetchBase';
import { IUser } from './types';

export const userAPI = createApi({
  reducerPath: 'userAPI',
  baseQuery: customFetchBase,
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getMe: builder.query<IUser, null>({
      query() {
        return {
          url: '/auth/me',
          credentials: 'include',
        };
      },

      transformResponse: (result: { data: { user: IUser } }) =>
        result.data.user,
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log("userApi data: >>> ",data);
          dispatch(setUser(data));
        } catch (error) {}
      },
    }),
  }),
});
