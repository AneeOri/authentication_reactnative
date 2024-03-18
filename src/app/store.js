/**aplication state */
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/auth';  /**puede terner cualquier nomnbre*/
import userReducer from '../features/user/user';
export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
});