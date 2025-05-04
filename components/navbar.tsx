"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import ContactModal from "./contact-us"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center space-x-2">
            <img src="/logo.png" width="40" height="40" alt="3ata Logo" />
            <span className="text-2xl font-bold text-purple-900">3ata</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-purple-600">
              Home
            </a>
            <a href="#features" className="text-gray-700 hover:text-purple-600">
              Features
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-purple-600">
              Pricing
            </a>
            <a href="#statistics" className="text-gray-700 hover:text-purple-600">
              About
            </a>
            <ContactModal
              trigger={
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                  Contact Us
                </Button>
              }
            />
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-purple-600 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <a href="#" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-purple-600 py-2">
                Home
              </a>
              <a href="#features" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-purple-600 py-2">
                Features
              </a>
              <a href="#pricing" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-purple-600 py-2">
                Pricing
              </a>
              <a href="#statistics" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-purple-600 py-2">
                About
              </a>
              <ContactModal
                trigger={
                  <Button
                    className="bg-purple-600 hover:bg-purple-700 text-white"

                  >
                    Contact Us
                  </Button>
                }
              />
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
