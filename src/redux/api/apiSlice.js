
import { accessToken } from "@/utils/accessToken";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://share-wave-server-olive.vercel.app/api/v1/share-wave/",
    prepareHeaders: (headers) => {
      const token = accessToken.getAccessToken();
      console.log(token);
      if (token) {
        headers.set("authorization", `${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['comment', 'loveReact', 'post'],
  endpoints: () => ({}),
});
