import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "User",
  initialState: {
    username: "",
    email: "",
    loading: false,
  },
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setUsername, setEmail, setLoading } = userSlice.actions;
export default userSlice.reducer;
