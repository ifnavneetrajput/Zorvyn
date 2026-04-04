const Card = ({ title, value }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="text-gray-500 text-sm">{title}</h2>
      <p className="text-xl font-semibold mt-2">₹ {value}</p>
    </div>
  );
};

export default Card;