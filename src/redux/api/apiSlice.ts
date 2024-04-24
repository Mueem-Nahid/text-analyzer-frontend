import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_API_URL,
    prepareHeaders: (headers, {getState}) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const {user} = getState()
      headers.set("authorization", import.meta.env.VITE_KEYCLOAK_ACCESS_TOKEN ? `Bearer ${import.meta.env.VITE_KEYCLOAK_ACCESS_TOKEN}` : "")
      return headers
    }
  }),
  tagTypes: ['addText'],
  endpoints: () => ({}),
});