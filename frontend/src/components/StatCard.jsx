const StatCard = ({ title, number }) => {
  return (
    <div
      className="
      bg-white
      rounded-[32px]
      p-7
      shadow-sm
      border border-gray-100
      hover:shadow-xl
      hover:-translate-y-2
      transition-all
      duration-300
      relative
      overflow-hidden
    "
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-12 -mt-12" />

      <p className="text-gray-500 text-sm relative z-10">
        {title}
      </p>

      <h1 className="text-5xl font-extrabold mt-4 relative z-10">
        {number}
      </h1>
    </div>
  );
};

export default StatCard;