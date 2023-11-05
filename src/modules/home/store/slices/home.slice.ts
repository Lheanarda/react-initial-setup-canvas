import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { HomeSlice } from "@src/modules/home/typings/slice";

const initialState: HomeSlice = {
  loadingHome: false,
};

const homeSlice = createSlice({
  name: "home-slice",
  initialState,
  reducers: {
    setLoadingHome(state, action: PayloadAction<boolean>) {
      state.loadingHome = action.payload;
    },
  },
});

export const { setLoadingHome } = homeSlice.actions;

export default homeSlice;
