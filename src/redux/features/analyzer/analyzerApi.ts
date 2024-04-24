import {api} from "../../api/apiSlice.ts";

const analyzerApi = api.injectEndpoints({
  endpoints: (builder) => ({
    singleText: builder.query({
      query: (id: string) => `/analyzer/${id}`,
    }),
    countWords: builder.query({
      query: (id: string) => `/analyzer/${id}/words`,
    }),
    countCharacters: builder.query({
      query: (id: string) => `/analyzer/${id}/characters`,
    }),
    countParagraphs: builder.query({
      query: (id: string) => `/analyzer/${id}/paragraphs`,
    }),
    countSentences: builder.query({
      query: (id: string) => `/analyzer/${id}/sentences`,
    }),
    getLongestWords: builder.query({
      query: (id: string) => `/analyzer/${id}/longest-words`,
    }),
    allText: builder.query({
      query: () => "/analyzer",
      providesTags: ['addText', 'deleteText'],
    }),
    addText: builder.mutation({
      query: (payload) => ({
        url: '/analyzer',
        method: 'POST',
        body: payload
      }),
      invalidatesTags: ['addText']
    }),
    updateText: builder.mutation({
      query: ({id, updatedData}) => ({
        url: `/analyzer/${id}`,
        method: 'PATCH',
        body: updatedData
      }),
    }),
    deleteText: builder.mutation({
      query: (id) => ({
        url: `/analyzer/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['deleteText']
    }),
  })
})

export const {
  useAddTextMutation,
  useDeleteTextMutation,
  useSingleTextQuery,
  useUpdateTextMutation,
  useAllTextQuery,
  useLazyCountCharactersQuery,
  useLazyCountParagraphsQuery,
  useLazyCountSentencesQuery,
  useLazyGetLongestWordsQuery,
  useLazyCountWordsQuery
} = analyzerApi;