import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice';
import { logMiddleware } from './logMiddleware';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: [logMiddleware, ...getDefaultMiddleware()],
})

