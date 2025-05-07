import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "../../../types/authType";
import { Admin } from "../../../types/userTypes";
import axios from "axios";
import { backendUrl } from "../../../constants/backendApis";

// Fetch stored user from localStorage
const storedUser = localStorage.getItem("user");
const parsedUser: Admin | null = storedUser ? JSON.parse(storedUser) : null;

const initialState: AuthState = {
  user: {
    id: "",
    fullName: "",
    email: "",
    phone: "",
    accountType: "",
    role: "",
    status: "",
    isVerified: false,
    createdAt: "",
    token: "",
  },
  isAuthenticated: !!localStorage.getItem("user"),
  loading: false,
  error: null,
  role: parsedUser?.role || "",
};

export const adminLogin = createAsyncThunk(
  "admin/login",
  async (
    { email, password }: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post<Admin>(`${backendUrl.admin.login}`, {
        email,
        password,
      });
      console.log(response.data);

      const userData = response.data;
      localStorage.setItem("user", JSON.stringify(userData));
    } catch (error: any) {
      return rejectWithValue(error.message || "Login failed");
    }
  }
);

const adminSlice = createSlice({
  name: "adminAuth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = {
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
      };
      state.isAuthenticated = false;
      state.role = "";
      state.error = null;
      state.loading = false;
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(adminLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(adminLogin.fulfilled, (state, action: PayloadAction<Admin>) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.role = action.payload.role;
        state.loading = false;
        state.error = null;
      })
      .addCase(adminLogin.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
      });
  },
});

export default adminSlice.reducer;
