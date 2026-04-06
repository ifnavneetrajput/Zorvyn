import { createSelector } from "@reduxjs/toolkit";
import {
  calculateExpenseByCategory,
  calculateHighestSpendingCategory,
  calculateMonthlyComparison,
  calculateSummary,
  calculateTrendData,
} from "../../utils/calculations";

export const selectTransactionsState = (state) => state.transactions;

export const selectTransactions = createSelector(
  [selectTransactionsState],
  (transactionsState) => transactionsState.list,
);

export const selectTransactionFilters = createSelector(
  [selectTransactionsState],
  (transactionsState) => transactionsState.filters,
);

const sortTransactions = (transactions, sortBy) => {
  const sorted = [...transactions];

  switch (sortBy) {
    case "date_asc":
      return sorted.sort((a, b) => new Date(a.date) - new Date(b.date));
    case "amount_desc":
      return sorted.sort((a, b) => b.amount - a.amount);
    case "amount_asc":
      return sorted.sort((a, b) => a.amount - b.amount);
    case "date_desc":
    default:
      return sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
  }
};

export const selectFilteredTransactions = createSelector(
  [selectTransactions, selectTransactionFilters],
  (transactions, filters) => {
    const filtered = transactions.filter((transaction) => {
      const matchesType =
        filters.type === "all" || transaction.type === filters.type;
      const matchesSearch =
        filters.search.trim() === "" ||
        transaction.category
          .toLowerCase()
          .includes(filters.search.trim().toLowerCase());

      return matchesType && matchesSearch;
    });

    return sortTransactions(filtered, filters.sortBy);
  },
);

export const selectSummary = createSelector([selectTransactions], (transactions) =>
  calculateSummary(transactions),
);

export const selectTrendData = createSelector([selectTransactions], (transactions) =>
  calculateTrendData(transactions),
);

export const selectExpenseByCategory = createSelector(
  [selectTransactions],
  (transactions) => calculateExpenseByCategory(transactions),
);

export const selectHighestSpendingCategory = createSelector(
  [selectExpenseByCategory],
  (expenseByCategory) => calculateHighestSpendingCategory(expenseByCategory),
);

export const selectMonthlyComparison = createSelector(
  [selectTransactions],
  (transactions) => calculateMonthlyComparison(transactions),
);

export const selectAverageExpenseTransaction = createSelector(
  [selectTransactions],
  (transactions) => {
    const expenseTransactions = transactions.filter((item) => item.type === "expense");

    if (expenseTransactions.length === 0) {
      return 0;
    }

    const totalExpenses = expenseTransactions.reduce(
      (sum, item) => sum + item.amount,
      0,
    );

    return Math.round(totalExpenses / expenseTransactions.length);
  },
);
