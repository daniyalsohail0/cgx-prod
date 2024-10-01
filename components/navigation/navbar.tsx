'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/common/button"
import { ChevronDown } from 'lucide-react'
import { navigation } from '@/lib/shared/navigation-links'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null)

  const toggleDropdown = (id: number) => {
    setActiveDropdown(activeDropdown === id ? null : id)
  }

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-800">
              Logo
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center justify-center flex-1">
            {navigation.map((item) => (
              <div key={item.id} className="relative group px-3">
                <button
                  className="flex items-center text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
                  onClick={() => toggleDropdown(item.id)}
                >
                  {item.section}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === item.id && (
                  <div className="absolute z-10 left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                      {item.list.map((subItem) => (
                        <Link
                          key={subItem.url}
                          href={subItem.url}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          role="menuitem"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Us Button */}
          <div className="hidden md:block">
            <Button variant="default">
              Contact Us
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <div key={item.id} className="space-y-1">
                <button
                  className="w-full text-left text-gray-600 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => toggleDropdown(item.id)}
                >
                  {item.section}
                </button>
                {activeDropdown === item.id && (
                  <div className="pl-4 space-y-1">
                    {item.list.map((subItem) => (
                      <Link
                        key={subItem.url}
                        href={subItem.url}
                        className="block px-3 py-2 rounded-md text-sm text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="px-2">
              <Button variant="default" className="w-full">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}