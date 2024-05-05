import {createSlice} from "@reduxjs/toolkit";
import {getCurrentUser, login} from "@/thunks/authThunk.ts";

export interface AuthState {
  currentUser: {
    display_name?: string;
    email?: string
  };
  loading: boolean;
}

const initialState: AuthState = {
  currentUser: {},
  loading: false,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        const { user } = action.payload

        state.currentUser = user
        state.loading = false
      })
      .addCase(login.pending, (state) => {
        state.loading = true
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.currentUser = action.payload

        state.loading = false
      })
      .addCase(getCurrentUser.pending, (state) => {
        state.loading = true
      })
      .addCase(getCurrentUser.rejected, (state) => {
        state.currentUser = {}
        state.loading = false
      })
  }
})

export const authActions = authSlice.actions
export default authSlice.reducer
