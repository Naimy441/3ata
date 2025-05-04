export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">3ata</h3>
            <p className="mb-4">Empowering mosques with modern technology to strengthen community connections.</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-purple-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="privacy-policies" className="hover:text-purple-400">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>Email: hello@3ata.org</li>
              <li>Phone: (832) 523-9407</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} 3ata. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
