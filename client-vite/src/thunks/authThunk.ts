import {createAsyncThunk} from "@reduxjs/toolkit";
import api from "@/services/api.ts";

interface payload {
  email: string;
  password: string;
}

export const login = createAsyncThunk('auth/login', async ({email, password} : payload)  => {
  api.defaults.headers.Authorization = null
  const response = await api.post('/login', {
    user: {
      email,
      password
    }
  })

  api.defaults.headers.Authorization = response.headers.authorization

  return { ...response.data.data, accessToken: response.headers.authorization }
})
