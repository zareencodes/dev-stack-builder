
function TechnologyCard({ technology, isAdded, onAdd }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300">

      {/* Icon and Badge */}
      <div className="flex justify-between items-start mb-5">

        <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center p-2">
          <img
            src={technology.icon}
            alt={technology.name}
            className="w-full h-full object-contain"
          />
        </div>

        <span className="bg-pink-50 text-pink-600 text-xs font-semibold px-3 py-1 rounded-full">
          {technology.badge}
        </span>

      </div>

      {/* Technology Name */}
      <h3 className="text-xl font-bold text-gray-900 mb-2">
        {technology.name}
      </h3>

      {/* Description */}
      <p className="text-gray-500 text-sm leading-relaxed min-h-16 mb-5">
        {technology.description}
      </p>

      {/* Category and Difficulty */}
      <div className="flex flex-wrap gap-2 mb-4">

        <span className="bg-violet-50 text-violet-600 text-xs font-medium px-3 py-1 rounded-full">
          {technology.category}
        </span>

        <span className="bg-blue-50 text-blue-600 text-xs font-medium px-3 py-1 rounded-full">
          {technology.difficulty}
        </span>

      </div>

      {/* Rating */}
      <div className="flex items-center gap-2 mb-5">
        <span className="text-yellow-500">★</span>

        <span className="text-gray-700 font-semibold text-sm">
          {technology.rating}
        </span>

        <span className="text-gray-400 text-sm">
          Rating
        </span>
      </div>

      {/* Add Button */}
      <button
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        className={`w-full py-3 rounded-xl font-semibold transition ${
          isAdded
            ? 'bg-green-100 text-green-700 cursor-not-allowed'
            : 'bg-gray-900 text-white hover:bg-violet-600'
        }`}
      >
        {isAdded ? '✓ Added to Stack' : '+ Add to Stack'}
      </button>

    </div>
  )
}

export default TechnologyCard
