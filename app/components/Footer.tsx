import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          <div className="md:col-span-2">
            <Logo />
            <p className="text-gray-400 mb-4 text-sm md:text-base mt-2">
              AI-powered digital solutions that deliver results 70% faster at 50% lower cost.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition text-sm">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-white transition text-sm">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white transition text-sm">GitHub</a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3 md:mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm md:text-base">
              <li><a href="#services" className="hover:text-white transition">Web Development</a></li>
              <li><a href="#services" className="hover:text-white transition">Business Automation</a></li>
              <li><a href="#services" className="hover:text-white transition">Marketing AI</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3 md:mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm md:text-base">
              <li>
                <a href="mailto:hello@newbotic.co.uk" className="hover:text-white transition">
                  hello@newbotic.co.uk
                </a>
              </li>
              <li>
                <a href="tel:+4407891897558" className="hover:text-white transition">
                  +44 0789 189 7558
                </a>
              </li>
              <li>London, UK</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-gray-400 text-sm md:text-base">
          <p>&copy; 2024 Newbotic Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}