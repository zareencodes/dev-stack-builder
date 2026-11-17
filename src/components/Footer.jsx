
function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 px-6 pt-16 pb-8">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Dev<span className="text-pink-500">Stack</span>
            </h2>

            <p className="text-gray-400 text-sm leading-7">
              Build your perfect technology stack.
              Discover the tools and technologies
              that power modern development.
            </p>

            <div className="flex gap-4 mt-5">
              <a href="https://github.com" target="_blank" rel="noreferrer"
                className="hover:text-pink-400">GitHub</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer"
                className="hover:text-pink-400">LinkedIn</a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#technologies" className="hover:text-white">Technologies</a></li>
              <li><a href="#technologies" className="hover:text-white">Explore Stack</a></li>
              <li><a href="#home" className="hover:text-white">Home</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#about" className="hover:text-white">About Us</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
              <li><a href="#projects" className="hover:text-white">Projects</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#privacy" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © 2026 DevStack. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
