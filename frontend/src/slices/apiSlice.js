import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://proshop-v2-main-1-70s0.onrender.com/api',
  }),
  tagTypes: ['Product', 'Products'],
  endpoints: (builder) => ({}),
});
