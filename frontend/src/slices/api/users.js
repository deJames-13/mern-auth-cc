import { apiSlice } from '.';

const USERS_URL = '/api/users';

export const usersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: USERS_URL + '/authenticate',
        method: 'POST',
        body: data,
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: USERS_URL,
        method: 'POST',
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: USERS_URL + '/logout',
        method: 'POST',
      }),
    }),
    updateProfile: builder.mutation({
      query: (data) => ({
        url: USERS_URL + '/profile',
        method: 'PUT',
        body: data,
      }),
    }),
  }),
});

// Naming Convention:
// mutation: use{Resource}Mutation
// query: use{Resource}Query
// subscription: use{Resource}Subscription
//
//
// ex: useLoginMutation, useLoginQuery, useLoginSubscription
