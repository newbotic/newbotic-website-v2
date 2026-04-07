'use client'

import Logo from './Logo'

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="bg-white/10 backdrop-blur-md border-b border-white/20 fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div onClick={() => scrollToSection('hero')} className="cursor-pointer">
            <Logo />
          </div>
          <div className="flex space-x-4 md:space-x-6">
            <button onClick={() => scrollToSection('services')} className="text-white hover:text-blue-200 transition text-sm md:text-base">
              Services
            </button>
            <button onClick={() => scrollToSection('configurator')} className="text-white hover:text-blue-200 transition text-sm md:text-base">
              Configurator
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-white hover:text-blue-200 transition text-sm md:text-base">
              Contact
            </button>
            <button onClick={() => scrollToSection('contact')} className="bg-white text-blue-600 px-3 py-1 md:px-4 md:py-2 rounded-lg font-semibold hover:bg-gray-100 transition text-sm md:text-base">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
