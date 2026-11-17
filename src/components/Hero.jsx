
function Hero() {
  return (
    <section
      id="home"
      className="bg-slate-950 text-white py-20 px-6"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Hero Text */}
        <div>
          <p className="text-pink-400 font-semibold mb-4">
            YOUR JOURNEY STARTS HERE
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Build Your Perfect
            <span className="block bg-gradient-to-r from-orange-400 via-pink-500 to-violet-500 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Discover powerful technologies, explore modern tools,
            and create your perfect development stack.
            Everything you need to build amazing digital products
            starts here.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#technologies"
              className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-7 py-3 rounded-full font-semibold hover:opacity-90"
            >
              Explore Technologies →
            </a>

            <a
              href="#about"
              className="border border-gray-500 px-7 py-3 rounded-full hover:bg-white hover:text-slate-950 transition"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800"
            alt="Modern technology circuit board"
            className="rounded-3xl shadow-2xl w-full max-w-lg object-cover"
          />
        </div>

      </div>
    </section>
  )
}

export default Hero
