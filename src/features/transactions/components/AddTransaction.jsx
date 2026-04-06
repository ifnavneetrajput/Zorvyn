import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTransaction } from "../transactionsSlice";

const AddTransaction = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    date: "",
    category: "",
    amount: "",
    type: "expense",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!form.date || !form.category.trim() || !form.amount || Number(form.amount) <= 0) {
      return;
    }

    dispatch(
      addTransaction({
        ...form,
        category: form.category.trim(),
        amount: Number(form.amount),
      }),
    );

    setForm({
      date: "",
      category: "",
      amount: "",
      type: "expense",
    });
  };

  return (
    <form onSubmit={onSubmit} className="grid sm:grid-cols-5 gap-2">
      <input
        type="date"
        name="date"
        value={form.date}
        onChange={onChange}
        className="border rounded-md px-3 py-2 text-sm"
      />
      <input
        type="text"
        name="category"
        placeholder="Category"
        value={form.category}
        onChange={onChange}
        className="border rounded-md px-3 py-2 text-sm"
      />
      <input
        type="number"
        name="amount"
        min="1"
        placeholder="Amount"
        value={form.amount}
        onChange={onChange}
        className="border rounded-md px-3 py-2 text-sm"
      />
      <select
        name="type"
        value={form.type}
        onChange={onChange}
        className="border rounded-md px-3 py-2 text-sm"
      >
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>
      <button
        type="submit"
        className="bg-black text-white rounded-md px-3 py-2 text-sm"
      >
        Add
      </button>
    </form>
  );
};

export default AddTransaction;
