export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="footer" className="bg-gray-800 border-t border-gray-700 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-3xl font-playfair font-bold text-yellow-400 mb-4">
              Abdullah Hassan
            </div>
            <p className="text-gray-400 mb-6">
              Entrepreneur, AI Specialist, and Venture Builder focused on creating innovative solutions for global challenges.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/abdullah-hassan-635a831b6/"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:bg-yellow-400 hover:text-gray-900 transition-colors cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-yellow-400 transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-yellow-400 transition-colors">About</a></li>
              <li><a href="/projects" className="hover:text-yellow-400 transition-colors">Projects</a></li>
              <li><a href="/ventures" className="hover:text-yellow-400 transition-colors">Ventures</a></li>
              <li><a href="/skills" className="hover:text-yellow-400 transition-colors">Skills</a></li>
              <li><a href="/blog" className="hover:text-yellow-400 transition-colors">Blog</a></li>
              <li><a href="/contact" className="hover:text-yellow-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <div>
                <a
                  href="mailto:abdullah.hassan@globalnext.rocks"
                  className="hover:text-yellow-400 transition-colors"
                >
                  abdullah.hassan@globalnext.rocks
                </a>
              </div>
              <div>+27 82 551 1243</div>
              <div>UAE · South Africa · Global</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Abdullah Hassan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
