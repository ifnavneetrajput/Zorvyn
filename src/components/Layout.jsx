const Layout = ({ title, actions, children, navItems, activePage, onNavigate }) => {
  const navKeys = Object.keys(navItems || {});

  return (
    <div className="min-h-screen app-shell md:grid md:grid-cols-[240px_1fr]">
      <aside className="hidden md:block sidebar-panel border-r p-5">
        <h1 className="text-lg font-semibold text-slate-900">Finance Dashboard</h1>
        <p className="text-xs text-slate-500 mt-1">Track your income, expenses, and patterns</p>

        <nav className="mt-5 space-y-2">
          {navKeys.map((key) => {
            const item = navItems[key];
            const isActive = activePage === key;

            return (
              <button
                key={key}
                type="button"
                onClick={() => onNavigate(key)}
                className={`sidebar-nav-item w-full text-left ${isActive ? "active" : ""}`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>
      </aside>

      <main>
        <header className="header-panel border-b px-4 py-3 sm:px-6 sm:py-4 flex items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
            <div className="mt-2 flex gap-2 md:hidden">
              {navKeys.map((key) => {
                const item = navItems[key];
                const isActive = activePage === key;

                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => onNavigate(key)}
                    className={`sidebar-nav-item ${isActive ? "active" : ""}`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
          {actions}
        </header>

        <section className="p-4 sm:p-6 space-y-6">{children}</section>
      </main>
    </div>
  );
};

export default Layout;
