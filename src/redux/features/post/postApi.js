import { api } from "@/redux/api/apiSlice";

const postApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createPost: builder.mutation({
      query: (data) => ({
        url: `/post/create-post`,
        method: "POST",
        body: data,
      }),
    }),
    getAllPost: builder.query({
      query: () => `/post/all-post`,
      providesTags: ['loveReact']
    }),
    getMyPost: builder.query({
      query: () => `/post/my-post`,
      providesTags: ['loveReact']
    }),
    getSinglePost: builder.query({
      query: (id) => `/post/single-post/${id}`,
    }),
    getAllComment: builder.query({
      query: (id) => `/comments/get-post-comment/${id}`,
      providesTags: ['comment'],
    }),
    loveReact: builder.mutation({
      query: (data) => ({
        url: `/react/love-react`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ['loveReact']
    }),
    doComment: builder.mutation({
      query: (data) => ({
        url: `/comments/do-comment`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ['comment'],
    }),
    sharePost: builder.mutation({
      query: (data) => ({
        url: `/share/share-post`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useCreatePostMutation, useGetAllPostQuery, useGetMyPostQuery, useLoveReactMutation, useGetSinglePostQuery, useGetAllCommentQuery, useDoCommentMutation, useSharePostMutation } = postApi;
