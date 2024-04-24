import {api} from "../../api/apiSlice.ts";

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (payload) => ({
        url: '/auth/login',
        method: 'POST',
        body: payload
      }),
      invalidatesTags: ['login'],
    }),
    signupUser: builder.mutation({
      query: (payload) => ({
        url: `${import.meta.env.VITE_KEYCLOAK_URL}/admin/realms/${import.meta.env.VITE_KEYCLOAK_REALM}/users`,
        method: 'POST',
        body: payload
      })
    }),
  })
});

export const {
  useLoginUserMutation,
  useSignupUserMutation
} = userApi;