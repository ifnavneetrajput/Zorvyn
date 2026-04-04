const Layout = ({ children }) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-60 bg-gray-900 text-white p-4">
        <h1 className="text-lg font-bold mb-4">Finance App</h1>
        <p className="text-sm">Dashboard</p>
        <p className="text-sm mt-2">Transactions</p>
      </div>

      {/* Main */}
      <div className="flex-1 bg-gray-100">
        {/* Navbar */}
        <div className="bg-white p-4 shadow">
          <h1 className="text-lg font-semibold">Dashboard</h1>
        </div>

        {/* Content */}
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default Layout;