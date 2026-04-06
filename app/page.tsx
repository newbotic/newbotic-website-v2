import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AIChatBot from './components/AIChatBot'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white pt-16 md:pt-20">
        
        {/* HERO - Simple & Clear */}
        <section className="container mx-auto px-4 py-12 md:py-16 text-center">
          <div className="max-w-3xl mx-auto">
            
            {/* Simple logo */}
            <div className="flex justify-center mb-8">
              <div className="bg-white/10 backdrop-blur-lg px-6 py-3 rounded-xl">
                <span className="text-2xl font-bold">NEWBOTIC</span>
                <span className="text-blue-400 text-sm ml-2">digital</span>
              </div>
            </div>

            {/* Clear message */}
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Website Audit + Web Page Creation
              <br />
              <span className="text-blue-400 text-2xl md:text-4xl">Starting from £250</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Professional websites and detailed audits for local businesses
              <br />
              <span className="text-blue-300">Ready in 7 days.</span>
            </p>

            {/* One big button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-bold text-lg transition-all min-w-[220px]">
                📞 Book Free Call
              </button>
            </div>
          </div>
        </section>

        {/* TWO SERVICES SECTION */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">What I offer</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* SERVICE 1 - Website Audit */}
              <div className="bg-white/5 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold mb-3">Website Audit</h3>
                <p className="text-gray-300 mb-4">Complete analysis of your current website</p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <span className="text-green-400">✓</span> Speed performance test
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <span className="text-green-400">✓</span> Security check
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <span className="text-green-400">✓</span> SEO analysis
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <span className="text-green-400">✓</span> Mobile responsiveness
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <span className="text-green-400">✓</span> Detailed PDF report
                  </div>
                </div>
                
                <div className="text-2xl font-bold text-blue-400 mb-4">£150</div>
                <button className="w-full bg-blue-600/30 hover:bg-blue-600/50 border border-blue-500/50 py-2 rounded-lg transition">
                  Get Audit →
                </button>
              </div>

              {/* SERVICE 2 - Web Page Creation */}
              <div className="bg-white/5 rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300">
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="text-2xl font-bold mb-3">Web Page Creation</h3>
                <p className="text-gray-300 mb-4">Professional website for your business</p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <span className="text-green-400">✓</span> Custom design
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <span className="text-green-400">✓</span> Mobile friendly
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <span className="text-green-400">✓</span> SEO optimized
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <span className="text-green-400">✓</span> Contact form
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <span className="text-green-400">✓</span> Google Analytics setup
                  </div>
                </div>
                
                <div className="text-2xl font-bold text-purple-400 mb-4">From £350</div>
                <button className="w-full bg-purple-600/30 hover:bg-purple-600/50 border border-purple-500/50 py-2 rounded-lg transition">
                  Create Website →
                </button>
              </div>
            </div>

            {/* COMBO PACKAGE */}
            <div className="mt-10 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-6 border border-white/20 text-center">
              <h3 className="text-xl font-bold mb-2">🎯 Combo Package: Audit + Website</h3>
              <p className="text-gray-300 mb-3">Get both services at a discounted price</p>
              <div className="text-3xl font-bold text-white mb-3">£450 <span className="text-sm text-gray-400 line-through ml-2">£500</span></div>
              <button className="bg-white text-slate-900 hover:bg-gray-200 px-6 py-2 rounded-lg font-semibold transition">
                Save £50 → Book Combo
              </button>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS - Simple process */}
        <section className="container mx-auto px-4 py-16 bg-white/5">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">How we work together</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">1</div>
                <h3 className="font-bold mb-2">15min Call</h3>
                <p className="text-sm text-gray-400">Tell me what you need</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">2</div>
                <h3 className="font-bold mb-2">50% Deposit</h3>
                <p className="text-sm text-gray-400">I start work after confirmation</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">3</div>
                <h3 className="font-bold mb-2">Delivery in 7 days</h3>
                <p className="text-sm text-gray-400">You get everything + support</p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT - with WhatsApp & Instagram */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Start today</h2>
            <p className="text-gray-300 mb-6">Call, WhatsApp, follow or fill out the form</p>
            
            <div className="space-y-3 mb-6">
              <a href="tel:+4407891897558" className="flex items-center justify-center gap-2 bg-slate-800 p-3 rounded-lg hover:bg-slate-700 transition">
                📞 +44 0789 189 7558
              </a>
              <a href="https://wa.me/447891897558" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600/20 hover:bg-green-600/30 p-3 rounded-lg transition border border-green-500/30">
                💬 WhatsApp
              </a>
              <a href="https://instagram.com/newbotic" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-pink-600/20 hover:bg-pink-600/30 p-3 rounded-lg transition border border-pink-500/30">
                📷 Instagram @newbotic
              </a>
              <a href="mailto:hello@newbotic.co.uk" className="flex items-center justify-center gap-2 bg-slate-800 p-3 rounded-lg hover:bg-slate-700 transition">
                ✉️ hello@newbotic.co.uk
              </a>
            </div>

            {/* Form with correct mlgoapje ID */}
            <form action="https://formspree.io/f/mlgoapje" method="POST" className="space-y-3">
              <input type="text" name="name" placeholder="Your name" className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-gray-500" />
              <input type="email" name="email" placeholder="Your email" required className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-gray-500" />
              <textarea name="message" placeholder="Which service are you interested in? (Audit / Website / Combo)" rows={3} className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-gray-500"></textarea>
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded-lg font-semibold transition">
                Send → I'll reply within 24h
              </button>
            </form>

            <div className="mt-4 text-sm text-gray-500">
              <a href="https://instagram.com/newbotic" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition">
                🔗 instagram.com/newbotic
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <AIChatBot />
    </>
  )
}