/**aplication state */
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/auth';  /**puede terner cualquier nomnbre*/

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});