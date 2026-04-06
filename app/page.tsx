import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AIChatBot from './components/AIChatBot'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white pt-16 md:pt-20">
        
        {/* HERO Section */}
        <section id="hero" className="container mx-auto px-4 py-12 md:py-16 text-center">
          <div className="max-w-3xl mx-auto">
            
            <div className="flex justify-center mb-8">
              <div className="bg-white/10 backdrop-blur-lg px-6 py-3 rounded-xl">
                <span className="text-2xl font-bold">NEWBOTIC</span>
                <span className="text-blue-400 text-sm ml-2">digital</span>
              </div>
            </div>

            <div className="inline-block bg-red-600/80 text-white px-4 py-2 rounded-full text-sm font-bold mb-4 animate-pulse">
              🔥 LIMITED TIME OFFER - 50% OFF 🔥
            </div>

            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Website Audit + Web Page Creation
              <br />
              <span className="text-blue-400 text-2xl md:text-4xl">Starting from <span className="line-through text-gray-400 text-xl">£250</span> £125</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Professional websites and detailed audits for local businesses
              <br />
              <span className="text-blue-300">Ready in 7 days. Limited spots available!</span>
            </p>

            <div className="bg-white/10 rounded-lg p-3 mb-8 inline-block">
              <p className="text-sm">⏰ Offer ends in: <span className="font-bold text-yellow-400">7 days</span></p>
            </div>

            {/* CTA Buttons - Calendly și WhatsApp */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a href="https://calendly.com/hello-newbotic/30min" target="_blank" className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-lg font-bold text-lg transition-all min-w-[220px]">
                📅 Book Free Call
              </a>
              <a href="https://wa.me/447891897558" target="_blank" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-bold text-lg transition-all min-w-[220px]">
                💬 WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* SERVICES Section */}
        <section id="services" className="container mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">What I offer <span className="text-red-400 text-xl">(50% OFF)</span></h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* SERVICE 1 - Website Audit */}
              <div className="bg-white/5 rounded-xl p-6 border border-slate-700 relative">
                <div className="absolute -top-3 -right-3 bg-red-600 text-white text-xs px-2 py-1 rounded-full">-50%</div>
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold mb-3">Website Audit</h3>
                <p className="text-gray-300 mb-4">Complete analysis of your current website</p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-400">✓ Speed performance test</div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">✓ Security check</div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">✓ SEO analysis</div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">✓ Mobile responsiveness</div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">✓ Detailed PDF report</div>
                </div>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-blue-400">£75</span>
                  <span className="text-sm text-gray-400 line-through ml-2">£150</span>
                </div>
                <a 
                  href="https://calendly.com/hello-newbotic/30min" 
                  target="_blank" 
                  className="block w-full bg-blue-600/30 hover:bg-blue-600/50 border border-blue-500/50 py-2 rounded-lg transition text-center"
                >
                  Get Audit →
                </a>
              </div>

              {/* SERVICE 2 - Web Page Creation */}
              <div className="bg-white/5 rounded-xl p-6 border border-slate-700 relative">
                <div className="absolute -top-3 -right-3 bg-red-600 text-white text-xs px-2 py-1 rounded-full">-50%</div>
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="text-2xl font-bold mb-3">Web Page Creation</h3>
                <p className="text-gray-300 mb-4">Professional website for your business</p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-400">✓ Custom design</div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">✓ Mobile friendly</div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">✓ SEO optimized</div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">✓ Contact form</div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">✓ Google Analytics setup</div>
                </div>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-purple-400">£175</span>
                  <span className="text-sm text-gray-400 line-through ml-2">£350</span>
                </div>
                <a 
                  href="https://calendly.com/hello-newbotic/30min" 
                  target="_blank" 
                  className="block w-full bg-purple-600/30 hover:bg-purple-600/50 border border-purple-500/50 py-2 rounded-lg transition text-center"
                >
                  Create Website →
                </a>
              </div>
            </div>

            {/* COMBO PACKAGE */}
            <div className="mt-10 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-6 border border-white/20 text-center relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-red-600 text-white text-xs px-3 py-1 rounded-full">BEST DEAL -50%</div>
              <h3 className="text-xl font-bold mb-2 mt-2">🎯 Combo Package: Audit + Website</h3>
              <p className="text-gray-300 mb-3">Get both services at a discounted price</p>
              <div className="mb-3">
                <span className="text-3xl font-bold text-white">£225</span>
                <span className="text-sm text-gray-400 line-through ml-2">£500</span>
                <span className="text-green-400 text-sm ml-2">Save £275!</span>
              </div>
              <a 
                href="https://calendly.com/hello-newbotic/30min" 
                target="_blank" 
                className="inline-block bg-white text-slate-900 hover:bg-gray-200 px-6 py-2 rounded-lg font-semibold transition"
              >
                Book Combo Now →
              </a>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS Section */}
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

        {/* CONTACT Section */}
        <section id="contact" className="container mx-auto px-4 py-16">
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

            <form action="https://formspree.io/f/mlgoapje" method="POST" className="space-y-3">
              <input type="text" name="name" placeholder="Your name" className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-gray-500" />
              <input type="email" name="email" placeholder="Your email" required className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-gray-500" />
              <textarea name="message" placeholder="Which service are you interested in? (Audit / Website / Combo)" rows={3} className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-gray-500"></textarea>
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded-lg font-semibold transition">
                Send → I'll reply within 24h
              </button>
            </form>
          </div>
        </section>

        {/* GET STARTED Section */}
        <section id="get-started" className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-gray-300 mb-6">Get 50% OFF on your first service - Limited time offer!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://calendly.com/hello-newbotic/30min" target="_blank" className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-bold">
                📅 Book Free Call
              </a>
              <a href="https://wa.me/447891897558" target="_blank" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-bold">
                💬 WhatsApp
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