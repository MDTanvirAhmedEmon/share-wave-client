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
    updateProfile: builder.mutation({
      query: (data) => ({
        url: `/users/update-profile-picture`,
        method: "PATCH",
        body: data,
      }),
    }),
    updateCover: builder.mutation({
      query: (data) => ({
        url: `/users/update-cover-photo`,
        method: "PATCH",
        body: data,
      }),
    }),
    getUserInfo: builder.query({
      query: () => `/users/get-user-info`,
    }),
    getAllUsers: builder.query({
      query: () => `/users/get-all-users`,
    }),
    getSingleUser: builder.query({
      query: (id) => `/users/get-single-user/${id}`,
    }),
  }),
});

export const {
  useSignUpMutation,
  useSignInMutation,
  useGetUserInfoQuery,
  useUpdateProfileMutation,
  useUpdateCoverMutation,
  useGetAllUsersQuery,
  useGetSingleUserQuery,
} = userApi;
