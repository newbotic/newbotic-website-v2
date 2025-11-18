export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Newbotic</h3>
            <p className="text-gray-400 mb-4 text-sm md:text-base">
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
              <li>hello@newbotic.co.uk</li>
              <li>London, UK</li>
              <li><a href="#contact" className="hover:text-white transition">Get Quote</a></li>
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
