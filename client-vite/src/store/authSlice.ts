import {createSlice} from "@reduxjs/toolkit";
import {login} from "@/thunks/authThunk.ts";

export interface AuthState {
  currentUser: {
    display_name?: string;
    email?: string
  };
  token: string | null;
  loading: boolean;
}

const initialState: AuthState = {
  currentUser: {},
  token: null,
  loading: false,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        const { accessToken, user } = action.payload

        state.currentUser = user
        state.loading = false
        state.token = accessToken
      })
  }
})

export const authActions = authSlice.actions
export default authSlice.reducer
