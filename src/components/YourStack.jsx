
function YourStack({ stack, onRemove, onRemoveAll }) {
  return (
    <div
      className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm h-fit"
      aria-label="Your selected technology stack"
    >

      {/* Heading */}
      <div className="flex justify-between items-center mb-6">

        <h2 className="text-xl font-bold text-gray-900">
          Your Stack
        </h2>

        <span
          aria-live="polite"
          className="bg-violet-100 text-violet-700 px-3 py-1 rounded-full text-sm font-semibold"
        >
          {stack.length} Selected
        </span>

      </div>

      {/* Empty Message */}
      {stack.length === 0 ? (

        <div
          className="text-center py-10"
          role="status"
        >

          <div className="text-5xl mb-4" aria-hidden="true">
            🧰
          </div>

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
                alt={`${technology.name} logo`}
                loading="lazy"
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
                type="button"
                onClick={() => onRemove(technology.id)}
                aria-label={`Remove ${technology.name} from your stack`}
                className="text-red-500 hover:bg-red-50 rounded-lg px-2 py-1 focus-visible:outline-2 focus-visible:outline-red-500"
                title="Remove technology"
              >
                ✕
              </button>

            </div>

          ))}

          {/* Remove All Button */}
          <button
            type="button"
            onClick={onRemoveAll}
            className="w-full mt-4 border border-red-200 text-red-500 py-2 rounded-xl font-semibold hover:bg-red-50 transition focus-visible:outline-2 focus-visible:outline-red-500"
          >
            Remove All
          </button>

        </div>

      )}

    </div>
  )
}

export default YourStack
