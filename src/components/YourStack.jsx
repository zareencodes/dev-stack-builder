
function YourStack({ stack, onRemove, onRemoveAll }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm h-fit">

      {/* Heading */}
      <div className="flex justify-between items-center mb-6">

        <h2 className="text-xl font-bold text-gray-900">
          Your Stack
        </h2>

        <span className="bg-violet-100 text-violet-700 px-3 py-1 rounded-full text-sm font-semibold">
          {stack.length} Selected
        </span>

      </div>

      {/* Empty Message */}
      {stack.length === 0 ? (

        <div className="text-center py-10">

          <div className="text-5xl mb-4">🧰</div>

          <h3 className="font-semibold text-gray-700 mb-2">
            Your stack is empty
          </h3>

          <p className="text-gray-400 text-sm">
            Add technologies to build your perfect stack.
          </p>

        </div>

      ) : (

        <div className="space-y-3">

          {stack.map((technology) => (

            <div
              key={technology.id}
              className="flex items-center gap-3 border border-gray-100 rounded-xl p-3"
            >

              <img
                src={technology.icon}
                alt={technology.name}
                className="w-10 h-10 object-contain"
              />

              <div className="flex-1 min-w-0">

                <h3 className="font-semibold text-gray-800 text-sm">
                  {technology.name}
                </h3>

                <p className="text-gray-400 text-xs">
                  {technology.category}
                </p>

              </div>

              <button
                onClick={() => onRemove(technology.id)}
                className="text-red-500 hover:bg-red-50 rounded-lg px-2 py-1"
                title="Remove technology"
              >
                ✕
              </button>

            </div>

          ))}

          {/* Remove All Button */}
          <button
            onClick={onRemoveAll}
            className="w-full mt-4 border border-red-200 text-red-500 py-2 rounded-xl font-semibold hover:bg-red-50 transition"
          >
            Remove All
          </button>

        </div>

      )}

    </div>
  )
}

export default YourStack
