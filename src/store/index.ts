import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { veambeReducer } from "./features/veambe/veambeSlice";

export const store = configureStore({
  reducer: { veambeState: veambeReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
