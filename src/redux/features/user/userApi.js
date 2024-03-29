const { api } = require("@/redux/api/apiSlice");

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (data) => ({
        url: `/users/sign-up`,
        method: "POST",
        body: data,
      }),
    }),
    signIn: builder.mutation({
      query: (data) => ({
        url: `/users/sign-in`,
        method: "POST",
        body: data,
      }),
    }),
    getUserInfo: builder.query({
      query: () => `/users/get-user-info`,
    }),
  }),
});

export const { useSignUpMutation, useSignInMutation, useGetUserInfoQuery } =
  userApi;
