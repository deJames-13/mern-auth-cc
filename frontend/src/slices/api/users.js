import { apiSlice } from '.';

const USERS_URL = '/api/users';

export const usersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: USERS_URL + '/authenticate',
        method: 'POST',
        body: { email, password },
      }),
    }),
  }),
});

export const { useLoginMutation } = usersApi;
