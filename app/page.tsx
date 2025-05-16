'use client';

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"
import FreeDialog from "../components/free-pricing-dialog"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import ClientsMarquee from "@/components/client-marquee"
import Stats from "@/components/stats"
import PremiumDialog from "@/components/premium-pricing-dialog"
import Link from 'next/link'
import { MarqueeDemoVerticalPhones } from "@/components/phone-marquee";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 }
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Banner Section */}
      <motion.div 
        className="relative bg-gradient-to-r from-green-900 to-green-800 text-white py-4 px-4 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <p className="text-lg">
            We're offering 5 masjids a free custom mobile app and website. Already have one? We'll upgrade and unify it seamlessly.
          </p>
          <Link href="/apply">
            <button className="bg-white text-green-800 px-6 py-2 rounded-lg text-base font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg">
              Apply Now
            </button>
          </Link>
        </div>
      </motion.div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-purple-50 to-white py-20 px-4 overflow-hidden">
        {/* Top and Bottom Blur Overlays (Desktop only) */}
        <div className="hidden md:block pointer-events-none absolute top-0 left-0 w-full h-32 z-30" style={{background: 'linear-gradient(to bottom, rgba(245,243,255,0.95) 60%, transparent)'}} />
        <div className="hidden md:block pointer-events-none absolute bottom-0 left-0 w-full h-32 z-30" style={{background: 'linear-gradient(to top, rgba(245,243,255,0.95) 60%, transparent)'}} />
        {/* Remove left/right fade effects */}
        {/* <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-purple-50 to-transparent z-10" /> */}
        {/* <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-purple-50 to-transparent z-10" /> */}
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              className="md:w-1/2"
              {...fadeInUp}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4">
                Connect Your Mosque Community Through Technology
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Custom mobile apps designed specifically for mosques, making community engagement simpler and more
                effective.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a href="#pricing">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg transition-all duration-200 hover:shadow-lg">
                    Get Started
                  </Button>
                </a>
                <a href="#features">
                  <Button
                    variant="outline"
                    className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-6 text-lg transition-all duration-200"
                  >
                    Learn More
                  </Button>
                </a>
              </div>
            </motion.div>
            
            {/* Phone Showcase (Desktop only) */}
            <motion.div 
              className="md:w-1/2 hidden md:flex"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <MarqueeDemoVerticalPhones />
            </motion.div>

            {/* Mobile Demo Video (Mobile only) */}
            <motion.div 
              className="w-full flex md:hidden justify-center items-center py-8"
              {...fadeInUp}
            >
              <video
                src="/demo2.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full max-w-xs rounded-xl shadow-lg border border-gray-200"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics  */}
      <motion.section 
        id="statistics" 
        className="py-20 px-4 bg-purple-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-purple-900 mb-10 text-center"
            {...fadeInUp}
          >
            Tried & Trusted
          </motion.h2>
          <Stats />
          <ClientsMarquee />
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        id="features" 
        className="py-20 px-4 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto max-w-6xl">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-purple-900 mb-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Features Designed for Your Mosque
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "M12 6v6m0 0v6m0-6h6m-6 0H6",
                title: "Personalized",
                description: "Tailored to meet your mosque's unique needs and community requirements."
              },
              {
                icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "Affordable",
                description: "Ensuring accessibility for all mosques, regardless of budget constraints."
              },
              {
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
                title: "Modern",
                description: "Feature-rich tools like donation flows, event management, and prayer time notifications."
              },
              {
                icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "User-friendly",
                description: "Simple and intuitive for community members of all ages to engage with."
              },
              {
                icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
                title: "Easy to maintain",
                description: "Simple administration so you can focus on what matters most - your community."
              },
              {
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                title: "Community-focused",
                description: "Designed to strengthen bonds between community members and the mosque."
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-200"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-purple-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-purple-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section 
        id="pricing" 
        className="py-20 px-4 bg-purple-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4 text-center">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
              Choose the plan that works best for your mosque. No contracts, cancel anytime.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Plan */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-2 border-gray-200 relative overflow-hidden hover:shadow-lg transition-all duration-200">
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
                    {[
                      "Custom branding with your mosque's logo",
                      "Custom links to your website + donation links",
                      "Prayer & jummah times + notifications",
                      "Interactive event calendar & news",
                      "Admin dashboard and robust configurations",
                      "Qiblah + Ask the imam form + Announcements"
                    ].map((feature) => (
                      <li key={feature} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <FreeDialog />
                </CardFooter>
              </Card>
            </motion.div>

            {/* Premium Plan */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-2 border-purple-500 relative overflow-hidden hover:shadow-lg transition-all duration-200">
                <div className="absolute top-0 right-0 bg-purple-500 text-white px-4 py-1 text-sm font-medium">
                  RECOMMENDED
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-bold text-purple-900">Premium Plan</CardTitle>
                  <CardDescription className="text-gray-600">Full-featured custom solution</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-purple-900">$30</span>
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
                    {[
                      "Everything in Free plan",
                      "Custom feature development",
                      "Custom & unique user interface",
                      "Custom donations flow",
                      "Priority support"
                    ].map((feature) => (
                      <li key={feature} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <PremiumDialog />
                </CardFooter>
              </Card>
            </motion.div>
          </div>

          <motion.div 
            className="text-center mt-8 text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p>No contracts. Cancel anytime. We're confident you'll love our service.</p>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  )
}
