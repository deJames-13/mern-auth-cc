/* eslint-disable no-unused-vars */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

const baseQuery = fetchBaseQuery({ baseUrl: '' });

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery,
  tagTypes: ['User'],
  endpoints: (builder) => ({}),
});
