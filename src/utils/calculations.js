export const calculateSummary = (transactions) => {
  let income = 0;
  let expense = 0;

  transactions.forEach((transaction) => {
    if (transaction.type === "income") {
      income += transaction.amount;
    } else {
      expense += transaction.amount;
    }
  });

  return {
    income,
    expense,
    balance: income - expense,
  };
};

export const calculateTrendData = (transactions) => {
  const totalsByDate = transactions.reduce((acc, item) => {
    const signedAmount = item.type === "income" ? item.amount : -item.amount;
    acc[item.date] = (acc[item.date] || 0) + signedAmount;
    return acc;
  }, {});

  const orderedDates = Object.keys(totalsByDate).sort(
    (a, b) => new Date(a) - new Date(b),
  );

  let runningBalance = 0;
  return orderedDates.map((date) => {
    runningBalance += totalsByDate[date];
    return {
      date,
      balance: runningBalance,
    };
  });
};

export const calculateExpenseByCategory = (transactions) => {
  const categoryTotals = transactions.reduce((acc, item) => {
    if (item.type !== "expense") {
      return acc;
    }

    acc[item.category] = (acc[item.category] || 0) + item.amount;
    return acc;
  }, {});

  return Object.entries(categoryTotals)
    .map(([category, amount]) => ({ category, amount }))
    .sort((a, b) => b.amount - a.amount);
};

export const calculateHighestSpendingCategory = (expenseByCategory) => {
  if (expenseByCategory.length === 0) {
    return null;
  }

  return expenseByCategory[0];
};

export const calculateMonthlyComparison = (transactions) => {
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();
  const previousMonthDate = new Date(currentYear, currentMonth - 1, 1);
  const previousMonth = previousMonthDate.getMonth();
  const previousMonthYear = previousMonthDate.getFullYear();

  const totals = {
    currentExpense: 0,
    previousExpense: 0,
    currentIncome: 0,
    previousIncome: 0,
  };

  transactions.forEach((transaction) => {
    const date = new Date(`${transaction.date}T00:00:00`);
    const month = date.getMonth();
    const year = date.getFullYear();

    const isCurrentMonth = month === currentMonth && year === currentYear;
    const isPreviousMonth = month === previousMonth && year === previousMonthYear;

    if (isCurrentMonth) {
      if (transaction.type === "expense") {
        totals.currentExpense += transaction.amount;
      } else {
        totals.currentIncome += transaction.amount;
      }
    }

    if (isPreviousMonth) {
      if (transaction.type === "expense") {
        totals.previousExpense += transaction.amount;
      } else {
        totals.previousIncome += transaction.amount;
      }
    }
  });

  const expenseDelta = totals.currentExpense - totals.previousExpense;
  const incomeDelta = totals.currentIncome - totals.previousIncome;

  return {
    ...totals,
    expenseDelta,
    incomeDelta,
  };
};
