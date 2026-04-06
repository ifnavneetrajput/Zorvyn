const CategoryExpenseChart = ({ data }) => {
  if (data.length === 0) {
    return (
      <div className="border border-dashed border-gray-300 rounded-lg p-6 text-sm text-gray-500">
        No expense data yet for category chart.
      </div>
    );
  }

  const topCategories = data.slice(0, 6);
  const maxAmount = topCategories[0]?.amount || 1;

  return (
    <div className="space-y-3">
      {topCategories.map((item) => {
        const width = (item.amount / maxAmount) * 100;

        return (
          <div key={item.category} className="space-y-1">
            <div className="flex justify-between text-sm">
              <span>{item.category}</span>
              <span className="font-medium">₹{item.amount}</span>
            </div>
            <div className="h-2 rounded bg-gray-100 overflow-hidden">
              <div className="h-full bg-gray-700" style={{ width: `${width}%` }} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryExpenseChart;
