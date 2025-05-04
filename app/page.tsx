import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Contact } from "lucide-react"
import FreeDialog from "../components/free-pricing-dialog"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import ClientsMarquee from "@/components/marquee"
import Stats from "@/components/stats"
import ContactModal from "@/components/contact-us"
import PremiumDialog from "@/components/premium-pricing-dialog"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-purple-50 to-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4">
                Connect Your Mosque Community Through Technology
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Custom mobile apps designed specifically for mosques, making community engagement simpler and more
                effective.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a href="#pricing">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg">
                    Get Started
                  </Button>
                </a>
                <a href="#features">
                  <Button
                    variant="outline"
                    className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-6 text-lg"
                  >
                    Learn More
                  </Button>
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              <video
                src="/demo.mp4"
                width={600}
                height={600}
                className="rounded-xl shadow-xl"
                autoPlay
                muted
                playsInline
              />
            </div>
          </div>
        </div>
      </section >

      {/* Statistics  */}
      < section id="statistics" className="py-20 px-4 bg-purple-50" >
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-10 text-center">Tried & Trusted</h2>
          <Stats />
          <ClientsMarquee />
        </div>
      </section >

      {/* Features Section */}
      < section id="features" className="py-20 px-4 bg-white" >
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-12 text-center">
            Features Designed for Your Mosque
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-purple-900 mb-2">Personalized</h3>
              <p className="text-gray-600">Tailored to meet your mosque's unique needs and community requirements.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-purple-900 mb-2">Affordable</h3>
              <p className="text-gray-600">Ensuring accessibility for all mosques, regardless of budget constraints.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-purple-900 mb-2">Modern</h3>
              <p className="text-gray-600">
                Feature-rich tools like donation flows, event management, and prayer time notifications.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-purple-900 mb-2">User-friendly</h3>
              <p className="text-gray-600">Simple and intuitive for community members of all ages to engage with.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-purple-900 mb-2">Easy to maintain</h3>
              <p className="text-gray-600">
                Simple administration so you can focus on what matters most - your community.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-purple-900 mb-2">Community-focused</h3>
              <p className="text-gray-600">Designed to strengthen bonds between community members and the mosque.</p>
            </div>
          </div>
        </div>
      </section >

      {/* Pricing Section */}
      < section id="pricing" className="py-20 px-4 bg-purple-50" >
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4 text-center">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
            Choose the plan that works best for your mosque. No contracts, cancel anytime.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Plan */}
            <Card className="border-2 border-gray-200 relative overflow-hidden">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-purple-900">Free Plan</CardTitle>
                <CardDescription className="text-gray-600">For mosques with limited budgets</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-purple-900">$0</span>
                  <span className="text-gray-600 ml-1">/month</span>
                </div>
              </CardHeader>
              <CardContent className="pb-4">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2 mt-0.5" />
                    <span>Custom branding with your mosque's logo</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2 mt-0.5" />
                    <span>Custom links to your website + donation links</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2 mt-0.5" />
                    <span>Prayer & jummah times + notifications</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2 mt-0.5" />
                    <span>Interactive event calendar & news</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2 mt-0.5" />
                    <span>Admin dashboard and robust configurations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2 mt-0.5" />
                    <span>Qiblah + Ask the imam form + Announcements</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <FreeDialog />
              </CardFooter>
            </Card>

            {/* Premium Plan */}
            <Card className="border-2 border-purple-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-purple-500 text-white px-4 py-1 text-sm font-medium">
                RECOMMENDED
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-purple-900">Premium Plan</CardTitle>
                <CardDescription className="text-gray-600">Full-featured custom solution</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-purple-900">$50</span>
                  <span className="text-gray-600 ml-1">/month</span>
                </div>
                <div className="mt-2">
                  <span className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full">
                    14-day free trial
                  </span>
                </div>
              </CardHeader>
              <CardContent className="pb-4">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2 mt-0.5" />
                    <span>Everything in Free plan</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2 mt-0.5" />
                    <span>Custom feature development</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2 mt-0.5" />
                    <span>Custom & unique user interface</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2 mt-0.5" />
                    <span>Custom donations flow</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2 mt-0.5" />
                    <span>Priority support</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <PremiumDialog />
              </CardFooter>
            </Card>
          </div>

          <div className="text-center mt-8 text-gray-600">
            <p>No contracts. Cancel anytime. We're confident you'll love our service.</p>
          </div>
        </div>
      </section >

      {/* Call to Action */}
      < section className="py-20 px-4 bg-purple-800 text-white" >
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us in Transforming Mosque Communities</h2>
          <p className="text-lg mb-8 text-purple-100">
            With Allah's (SWT) help, we aim to make this vision a reality for every mosque. Join us in transforming the
            way communities connect with their mosques.
          </p>
          <ContactModal
            trigger={
              <Button className="bg-white text-purple-800 hover:bg-purple-100 px-8 py-6 text-lg">
                Contact Us
              </Button>
            }
          />
        </div>
      </section >

      <Footer />
    </div >
  )
}
