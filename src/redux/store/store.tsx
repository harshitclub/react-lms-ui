import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "../features/admin/adminSlice";

const store = configureStore({
  reducer: {
    adminAuth: adminReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
