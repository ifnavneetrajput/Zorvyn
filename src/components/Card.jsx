const formatCurrency = (value) => `₹${new Intl.NumberFormat("en-IN").format(value)}`;

const Card = ({ title, value }) => {
  const tone =
    title.toLowerCase().includes("expense") || title.toLowerCase().includes("balance") && value < 0
      ? "text-red-600"
      : "text-gray-900";

  return (
    <div className="bg-white p-4 rounded-lg border">
      <h2 className="text-sm text-gray-500">{title}</h2>
      <p className={`text-2xl font-semibold mt-1 ${tone}`}>{formatCurrency(value)}</p>
    </div>
  );
};

export default Card;
