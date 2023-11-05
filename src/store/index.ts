import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "@src/modules/home/store/slices/home.slice";

const store = configureStore({
  reducer: {
    home: homeSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
