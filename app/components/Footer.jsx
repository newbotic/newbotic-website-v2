export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8">
      <div className="container mx-auto px-4">
        
        {/* Link-uri sociale și contact */}
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          <a 
            href="https://wa.me/447891897558" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-400 transition duration-300 flex items-center gap-2"
          >
            <span>💬</span> WhatsApp
          </a>
          <a 
            href="https://instagram.com/newbotic" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-pink-400 transition duration-300 flex items-center gap-2"
          >
            <span>📷</span> Instagram
          </a>
          <a 
            href="mailto:hello@newbotic.co.uk" 
            className="text-gray-400 hover:text-blue-400 transition duration-300 flex items-center gap-2"
          >
            <span>✉️</span> Email
          </a>
          <a 
            href="tel:+4407891897558" 
            className="text-gray-400 hover:text-blue-400 transition duration-300 flex items-center gap-2"
          >
            <span>📞</span> Telefon
          </a>
        </div>

        {/* Copyright și an */}
        <div className="text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} NEWBOTIC. All rights reserved.</p>
          <p className="text-xs mt-1">Digital Presence Setup for Local Businesses</p>
        </div>
      </div>
    </footer>
  )
}