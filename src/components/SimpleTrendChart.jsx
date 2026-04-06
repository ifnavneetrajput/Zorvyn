const formatDateLabel = (dateString) => {
  const [year, month, day] = dateString.split("-");
  return `${day}/${month}/${year.slice(2)}`;
};

const SimpleTrendChart = ({ data }) => {
  if (data.length === 0) {
    return (
      <div className="border border-dashed border-gray-300 rounded-lg p-6 text-sm text-gray-500">
        No data yet for trend chart. Add transactions to see the balance trend.
      </div>
    );
  }

  const minValue = Math.min(...data.map((item) => item.balance));
  const maxValue = Math.max(...data.map((item) => item.balance));
  const range = maxValue - minValue || 1;

  const points = data
    .map((item, index) => {
      const x = (index / Math.max(data.length - 1, 1)) * 100;
      const y = 100 - ((item.balance - minValue) / range) * 100;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <div className="space-y-3">
      <div className="h-48 w-full bg-gray-50 rounded-lg p-3">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
          <polyline
            fill="none"
            stroke="#1f2937"
            strokeWidth="2"
            points={points}
          />
        </svg>
      </div>

      <div className="grid grid-cols-2 gap-2 text-xs text-gray-600 sm:grid-cols-4">
        {data.slice(-4).map((item) => (
          <div key={item.date} className="bg-gray-50 rounded-md px-2 py-1">
            <p>{formatDateLabel(item.date)}</p>
            <p className="font-medium">₹{item.balance}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimpleTrendChart;
