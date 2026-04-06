import { useSelector } from "react-redux";
import Card from "../components/Card";
import CategoryExpenseChart from "../components/CategoryExpenseChart";
import SimpleTrendChart from "../components/SimpleTrendChart";
import {
  selectAverageExpenseTransaction,
  selectExpenseByCategory,
  selectHighestSpendingCategory,
  selectMonthlyComparison,
  selectSummary,
  selectTrendData,
  selectTransactions,
} from "../features/transactions/selectors";

const DashboardPage = () => {
  const transactions = useSelector(selectTransactions);
  const { income, expense, balance } = useSelector(selectSummary);
  const trendData = useSelector(selectTrendData);
  const expenseByCategory = useSelector(selectExpenseByCategory);
  const highestSpendingCategory = useSelector(selectHighestSpendingCategory);
  const monthlyComparison = useSelector(selectMonthlyComparison);
  const averageExpenseTransaction = useSelector(selectAverageExpenseTransaction);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        <Card title="Total Balance" value={balance} />
        <Card title="Income" value={income} />
        <Card title="Expenses" value={expense} />
      </div>

      {transactions.length === 0 ? (
        <section className="bg-white rounded-lg border p-6 text-center text-gray-600">
          No transactions yet. Add one to see charts and insights.
        </section>
      ) : (
        <>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
            <section className="bg-white p-4 sm:p-6 rounded-lg border space-y-4 dashboard-panel">
              <h3 className="text-base font-semibold">Time-Based Trend</h3>
              <SimpleTrendChart data={trendData} />
            </section>

            <section className="bg-white p-4 sm:p-6 rounded-lg border space-y-4 dashboard-panel">
              <h3 className="text-base font-semibold">Category-Based Spending</h3>
              <CategoryExpenseChart data={expenseByCategory} />
            </section>
          </div>

          <section className="bg-white p-4 sm:p-6 rounded-lg border dashboard-panel">
            <h3 className="text-base font-semibold mb-3">Insights</h3>
            <div className="space-y-2 text-sm text-gray-700">
              {highestSpendingCategory ? (
                <p>
                  Highest spending category: <span className="font-medium">{highestSpendingCategory.category}</span> (₹{highestSpendingCategory.amount})
                </p>
              ) : (
                <p className="text-gray-500">
                  Add expense transactions to generate category insights.
                </p>
              )}

              <p>
                Month-on-month expense change: <span className="font-medium">₹{Math.abs(monthlyComparison.expenseDelta)}</span> {monthlyComparison.expenseDelta > 0 ? "higher" : monthlyComparison.expenseDelta < 0 ? "lower" : "unchanged"} than last month.
              </p>

              <p>
                Average expense transaction: <span className="font-medium">₹{averageExpenseTransaction}</span>
              </p>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default DashboardPage;
