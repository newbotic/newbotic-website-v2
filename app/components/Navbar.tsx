import Logo from './Logo'

export default function Navbar() {
  return (
    <nav className="bg-white/10 backdrop-blur-md border-b border-white/20 fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex space-x-4 md:space-x-6">
            <a href="#services" className="text-white hover:text-blue-200 transition text-sm md:text-base">Services</a>
            <a href="#contact" className="text-white hover:text-blue-200 transition text-sm md:text-base">Contact</a>
            <button className="bg-white text-blue-600 px-3 py-1 md:px-4 md:py-2 rounded-lg font-semibold hover:bg-gray-100 transition text-sm md:text-base">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}