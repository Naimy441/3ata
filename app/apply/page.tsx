import Link from 'next/link';

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Back Button */}
      <div className="fixed top-4 left-4 z-50">
        <Link href="/">
          <button className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg text-gray-700 hover:bg-white transition-all duration-200">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" 
                clipRule="evenodd" 
              />
            </svg>
            Back to Home
          </button>
        </Link>
      </div>

      {/* Banner Section */}
      <div className="bg-gradient-to-r from-green-900 to-green-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold mb-8 text-center">Join 3ata's Vision</h1>
          
          <p className="text-xl leading-relaxed">
            We are honored to introduce 3ata (pronounced عَطَاء, an Arabic word meaning to give generously). 
            Our vision—sincerely, for the sake of Allah—is to help masjids around the world strengthen their 
            connection with their local communities through beautifully designed, feature-rich, and fully 
            integrated mobile apps and websites.
          </p>

          <p className="text-xl leading-relaxed">
            Over the past year, by Allah's grace, we've partnered with four masjids across Texas and North Carolina, 
            helping them reach over 1,300 app downloads—all in service to the Ummah.
          </p>

          <p className="text-xl leading-relaxed">
            Now, we're looking for 5 more masjids—regardless of size—to receive a fully custom digital solution at no cost. 
            This includes a deeply integrated website and mobile app tailored to your community's needs.
          </p>

          <p className="text-xl leading-relaxed">
            Already have a website or mobile app? No worries. We'll work with you to ensure our integrated solution 
            exceeds your expectations—bringing everything together seamlessly and beautifully.
          </p>

          <p className="text-xl leading-relaxed">
            Spaces are limited and offered on a first-come, first-served basis, so apply soon to be among the first 
            to benefit from this opportunity.
          </p>

          <p className="text-xl leading-relaxed text-center italic">
            May Allah accept from all of us.
          </p>
        </div>
      </div>

      {/* Application Form Section */}
      <div className="max-w-2xl mx-auto py-16 px-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 backdrop-blur-sm bg-opacity-90">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Apply for Your Digital Solution</h2>
          
          <form action="https://formspree.io/f/xvgakyjg" method="POST" className="space-y-8">
            <div className="space-y-2">
              <label htmlFor="mosqueName" className="block text-sm font-medium text-gray-700">
                Mosque Name *
              </label>
              <input
                type="text"
                id="mosqueName"
                name="mosqueName"
                required
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 transition-all duration-200"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Mosque Address *
              </label>
              <textarea
                id="address"
                name="address"
                required
                rows={3}
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 transition-all duration-200"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                Your Role at the Mosque *
              </label>
              <input
                type="text"
                id="role"
                name="role"
                required
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 transition-all duration-200"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Your Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 transition-all duration-200"
                placeholder="We'll use this to get back to you"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Your Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 transition-all duration-200"
                placeholder="We'll use this to get back to you"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="website" className="block text-sm font-medium text-gray-700">
                Current Website (if any)
              </label>
              <input
                type="url"
                id="website"
                name="website"
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 transition-all duration-200"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="app" className="block text-sm font-medium text-gray-700">
                Current Mobile App (if any)
              </label>
              <input
                type="url"
                id="app"
                name="app"
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 transition-all duration-200"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700">
                Additional Information
              </label>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                rows={4}
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 transition-all duration-200"
                placeholder="Please share any additional information about your mosque and community that might help us better serve you."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-6 rounded-lg hover:from-green-700 hover:to-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-[1.02]"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
