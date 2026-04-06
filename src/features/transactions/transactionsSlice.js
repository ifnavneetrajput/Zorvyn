import { createSlice } from "@reduxjs/toolkit";
import { transactions } from "../../data/transactions";

const initialState = {
  list: transactions,
  filters: {
    type: "all",
    search: "",
    sortBy: "date_desc",
  },
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    addTransaction: (state, action) => {
      state.list.unshift({
        id: Date.now(),
        ...action.payload,
      });
    },
    updateTransaction: (state, action) => {
      const { id, updates } = action.payload;
      const index = state.list.findIndex((transaction) => transaction.id === id);

      if (index !== -1) {
        state.list[index] = {
          ...state.list[index],
          ...updates,
        };
      }
    },
    setTransactionTypeFilter: (state, action) => {
      state.filters.type = action.payload;
    },
    setTransactionSearchFilter: (state, action) => {
      state.filters.search = action.payload;
    },
    setTransactionSort: (state, action) => {
      state.filters.sortBy = action.payload;
    },
  },
});

export const {
  addTransaction,
  updateTransaction,
  setTransactionTypeFilter,
  setTransactionSearchFilter,
  setTransactionSort,
} = transactionsSlice.actions;

export default transactionsSlice.reducer;
