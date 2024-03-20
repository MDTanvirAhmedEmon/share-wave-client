const { api } = require("@/redux/api/apiSlice");


const userApi = api.injectEndpoints({
    endpoints: (builder) => ({
        signUp: builder.mutation({
            query: (data) => ({
                url: `/users/sign-up`,
                method: 'POST',
                body: data
            })
        }),
        signIn: builder.mutation({
            query: (data) => ({
                url: `/users/sign-in`,
                method: 'POST',
                body: data
            })
        })
    })
});

export const { useSignUpMutation, useSignInMutation } = userApi;