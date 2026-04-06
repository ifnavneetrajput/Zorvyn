import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTransaction } from "../transactionsSlice";

const TransactionList = ({ transactions, canEdit }) => {
  const dispatch = useDispatch();
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({
    date: "",
    category: "",
    amount: "",
    type: "expense",
  });

  if (transactions.length === 0) {
    return <p className="text-sm text-gray-500">No transactions found.</p>;
  }

  const startEditing = (transaction) => {
    setEditingId(transaction.id);
    setForm({
      date: transaction.date,
      category: transaction.category,
      amount: String(transaction.amount),
      type: transaction.type,
    });
  };

  const cancelEditing = () => {
    setEditingId(null);
    setForm({
      date: "",
      category: "",
      amount: "",
      type: "expense",
    });
  };

  const saveEdit = () => {
    if (!form.date || !form.category || !form.amount) {
      return;
    }

    dispatch(
      updateTransaction({
        id: editingId,
        updates: {
          date: form.date,
          category: form.category.trim(),
          amount: Number(form.amount),
          type: form.type,
        },
      }),
    );

    cancelEditing();
  };

  return (
    <div className="space-y-2">
      {transactions.map((item) => {
        const isEditing = canEdit && item.id === editingId;

        return (
          <div
            key={item.id}
            className="border rounded-lg px-3 py-3 bg-white"
          >
            {isEditing ? (
              <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) => setForm((prev) => ({ ...prev, date: e.target.value }))}
                  className="border rounded-md px-2 py-2 text-sm"
                />
                <input
                  type="text"
                  value={form.category}
                  onChange={(e) => setForm((prev) => ({ ...prev, category: e.target.value }))}
                  className="border rounded-md px-2 py-2 text-sm"
                  placeholder="Category"
                />
                <input
                  type="number"
                  value={form.amount}
                  onChange={(e) => setForm((prev) => ({ ...prev, amount: e.target.value }))}
                  className="border rounded-md px-2 py-2 text-sm"
                  placeholder="Amount"
                />
                <select
                  value={form.type}
                  onChange={(e) => setForm((prev) => ({ ...prev, type: e.target.value }))}
                  className="border rounded-md px-2 py-2 text-sm"
                >
                  <option value="expense">Expense</option>
                  <option value="income">Income</option>
                </select>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={saveEdit}
                    className="bg-black text-white rounded-md px-3 py-2 text-sm"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={cancelEditing}
                    className="border rounded-md px-3 py-2 text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
                  <p className="text-gray-500">Date</p>
                  <p className="font-medium">{item.date}</p>
                  <p className="text-gray-500">Category</p>
                  <p className="font-medium">{item.category}</p>
                  <p className="text-gray-500">Type</p>
                  <p className="font-medium capitalize">{item.type}</p>
                </div>

                <div className="flex items-center gap-3">
                  <p
                    className={`text-base font-semibold ${
                      item.type === "income" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {item.type === "income" ? "+" : "-"}₹{item.amount}
                  </p>

                  {canEdit ? (
                    <button
                      type="button"
                      onClick={() => startEditing(item)}
                      className="border rounded-md px-3 py-1.5 text-sm"
                    >
                      Edit
                    </button>
                  ) : null}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TransactionList;
