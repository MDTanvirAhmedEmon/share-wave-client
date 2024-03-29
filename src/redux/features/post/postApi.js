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
    }),
    getMyPost: builder.query({
      query: () => `/post/my-post`,
    }),
  }),
});

export const { useCreatePostMutation, useGetAllPostQuery, useGetMyPostQuery } = postApi;
