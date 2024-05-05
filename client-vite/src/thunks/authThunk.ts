import {createAsyncThunk} from "@reduxjs/toolkit";
import api from "@/services/api.ts";
import {removeToken, setToken} from "@/utilities/token.ts";

interface loginPayload {
  email: string;
  password: string;
}

export const login = createAsyncThunk('auth/login', async ({email, password} : loginPayload)  => {
  api.defaults.headers.Authorization = null
  const response = await api.post('/login', {
    user: {
      email,
      password
    }
  })

  const token = response.headers.authorization;
  setToken(token);

  api.defaults.headers.Authorization = token

  return { ...response.data.data, accessToken: token }
})

export const getCurrentUser = createAsyncThunk('auth/currentUser', async (token: string, {rejectWithValue}) => {
  api.defaults.headers.Authorization = token

  try {

    const response = await api.get('/current_user')

    if (response.status === 200) {
      return response.data.current_user
    }
  } catch (error) {
    removeToken()
    return rejectWithValue({})
  }
})
