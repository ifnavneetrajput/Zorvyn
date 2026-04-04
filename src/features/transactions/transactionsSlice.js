import { createSlice } from "@reduxjs/toolkit";
import { transactions } from "../../data/transactions";

const initialState = {
  list: transactions,
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {},
});

export default transactionsSlice.reducer;