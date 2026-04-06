import { useDispatch, useSelector } from "react-redux";
import {
  setTransactionSearchFilter,
  setTransactionSort,
  setTransactionTypeFilter,
} from "../transactionsSlice";

const FilterBar = () => {
  const dispatch = useDispatch();
  const { type, search, sortBy } = useSelector((state) => state.transactions.filters);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      <select
        value={type}
        onChange={(e) => dispatch(setTransactionTypeFilter(e.target.value))}
        className="border rounded-md px-3 py-2 text-sm"
      >
        <option value="all">All Types</option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      <input
        type="text"
        placeholder="Search category"
        value={search}
        onChange={(e) => dispatch(setTransactionSearchFilter(e.target.value))}
        className="border rounded-md px-3 py-2 text-sm w-full"
      />

      <select
        value={sortBy}
        onChange={(e) => dispatch(setTransactionSort(e.target.value))}
        className="border rounded-md px-3 py-2 text-sm"
      >
        <option value="date_desc">Sort: Newest</option>
        <option value="date_asc">Sort: Oldest</option>
        <option value="amount_desc">Sort: Amount High-Low</option>
        <option value="amount_asc">Sort: Amount Low-High</option>
      </select>
    </div>
  );
};

export default FilterBar;
