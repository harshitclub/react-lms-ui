import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "../../../types/authType";

const initialState: AuthState = {
  user: {
    id: "",
    fullName: "",
    email: "",
    phone: "",
    accountType: "",
    role: "",
    status: "",
    isVerified: true,
    createdAt: "",
    token: "",
  },
  isAuthenticated: !!localStorage.getItem("user"),
  loading: false,
  error: null,
  role: "",
};

const adminSlice = createSlice({
  name: "adminAuth",
  initialState,
  reducers: {},
});

export default adminSlice.reducer;
