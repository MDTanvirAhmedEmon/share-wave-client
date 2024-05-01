import { api } from "@/redux/api/apiSlice";

const followApi = api.injectEndpoints({
  endpoints: (builder) => ({
    doFollow: builder.mutation({
      query: (id) => ({
        url: `/followers/${id}`,
        method: "POST",
      }),
    }),
    unFollow: builder.mutation({
      query: (id) => ({
        url: `/followers/unfollow/${id}`,
        method: "DELETE",
      }),
    }),
    getFollower: builder.query({
      query: () => `/followers/get-follower`,
    }),
    getFollowing: builder.query({
      query: () => `/followers/get-following`,
    }),
  }),
});

export const { useDoFollowMutation, useUnFollowMutation, useGetFollowerQuery, useGetFollowingQuery } = followApi;
