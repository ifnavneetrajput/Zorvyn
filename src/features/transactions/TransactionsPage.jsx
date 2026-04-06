import { useSelector } from "react-redux";
import AddTransaction from "./components/AddTransaction";
import FilterBar from "./components/FilterBar";
import TransactionList from "./components/TransactionList";
import {
  selectFilteredTransactions,
  selectTransactions,
} from "./selectors";

const TransactionsPage = () => {
  const transactions = useSelector(selectTransactions);
  const filteredTransactions = useSelector(selectFilteredTransactions);
  const role = useSelector((state) => state.role.role);
  const isAdmin = role === "admin";

  return (
    <section className="bg-white p-4 sm:p-6 rounded-lg border space-y-4">
      <div className="flex items-center justify-between gap-2">
        <h2 className="text-lg font-semibold">Transactions</h2>
        <span className="text-xs rounded-full px-2 py-1 bg-gray-100 text-gray-700 capitalize">
          {role} mode
        </span>
      </div>

      {isAdmin ? (
        <AddTransaction />
      ) : (
        <p className="text-sm text-gray-500 bg-gray-50 border rounded-md px-3 py-2">
          Viewer role is read-only. Switch to Admin to add or edit transactions.
        </p>
      )}

      {transactions.length === 0 ? (
        <p className="text-sm text-gray-500">
          No transactions available. Add your first transaction above.
        </p>
      ) : (
        <>
          <FilterBar />
          <TransactionList transactions={filteredTransactions} canEdit={isAdmin} />
        </>
      )}
    </section>
  );
};

export default TransactionsPage;
