import { Admin } from "./userTypes";

export interface AuthState {
  user: Admin | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  role: string | null;
}
