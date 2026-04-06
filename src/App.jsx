import { useState } from "react";
import "./App.css";
import Layout from "./components/Layout";
import RoleSwitcher from "./features/role/RoleSwitcher";
import TransactionsPage from "./features/transactions/TransactionsPage";
import DashboardPage from "./pages/DashboardPage";

const PAGE_CONFIG = {
  dashboard: {
    label: "Dashboard",
    title: "Dashboard Overview",
  },
  transactions: {
    label: "Transactions",
    title: "Transactions",
  },
};

function App() {
  const [activePage, setActivePage] = useState("dashboard");

  return (
    <Layout
      title={PAGE_CONFIG[activePage].title}
      actions={<RoleSwitcher />}
      activePage={activePage}
      onNavigate={setActivePage}
      navItems={PAGE_CONFIG}
    >
      {activePage === "dashboard" ? <DashboardPage /> : <TransactionsPage />}
    </Layout>
  );
}

export default App;
