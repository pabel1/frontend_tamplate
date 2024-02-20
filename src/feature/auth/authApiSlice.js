import { apiSlice } from "../ApiSlice/apiSlice";
import { userLoggedIn } from "./authSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (data) => {
        const { bodyData } = data;
        return {
          url: `/api/login`,
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
          },
          body: bodyData,
        };
      },
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          const { token } = result?.data || {};

          localStorage.setItem(
            "auth",
            JSON.stringify({
              access_token: token,
            })
          );
          dispatch(
            userLoggedIn({
              access_token: token,
            })
          );
        } catch (error) {
          // do nothing
        }
      },
      invalidatesTags: ["user"],
    }),
    signUpUser: builder.mutation({
      query: (data) => {
        const { bodyData } = data;
        return {
          url: `/api/register`,
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
          },
          body: bodyData,
        };
      },
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          const { token, id } = result?.data || {};

          localStorage.setItem(
            "auth",
            JSON.stringify({
              access_token: token,
            })
          );
          dispatch(
            userLoggedIn({
              access_token: token,
              user: id,
            })
          );
        } catch (error) {
          // do nothing
        }
      },
      invalidatesTags: ["user"],
    }),
  }),
});

export const { useLoginUserMutation, useSignUpUserMutation } = authApiSlice;
