import { configureStore } from "@reduxjs/toolkit";
import EczaneSlice from "./EczaneSlice";

const store = configureStore({
  reducer: { EczaneSlice },
});

export default store;
