import {api} from "../../api/apiSlice.ts";

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
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
  useSignupUserMutation
} = userApi;