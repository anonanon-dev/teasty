import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../Authentication/userSlice';

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
