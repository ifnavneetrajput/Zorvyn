import { useSelector } from "react-redux";
import Layout from "../components/Layout";
import Card from "../components/Card";
import { calculateSummary } from "../utils/calculations";

const DashboardPage = () => {
  const transactions = useSelector((state) => state.transactions.list);

  const { income, expense, balance } = calculateSummary(transactions);

  return (
    <Layout>
      {/* Cards */}
      <div className="grid grid-cols-3 gap-4">
        <Card title="Balance" value={balance} />
        <Card title="Income" value={income} />
        <Card title="Expenses" value={expense} />
      </div>

      {/* Placeholder */}
      <div className="bg-white p-4 mt-6 rounded-xl shadow">
        <p className="text-gray-500">Chart will be added later</p>
      </div>
    </Layout>
  );
};

export default DashboardPage;