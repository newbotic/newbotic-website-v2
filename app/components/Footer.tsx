import Navbar from './components/Navbar'
import Footer from './components/Footer'

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

            {/* FACT #1 - Clear message, no AI vague */}
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Google Business + Facebook + Website Audit
              <br />
              <span className="text-blue-400 text-2xl md:text-4xl">Everything for £250</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Complete package for your online presence
              <br />
              <span className="text-blue-300">Ready in 7 days.</span>
            </p>

            {/* FACT #8 - One big button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-bold text-lg transition-all min-w-[220px]">
                📞 Book Free Call
              </button>
            </div>

            {/* 3 simple benefits - no fake stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="bg-white/5 p-4 rounded-lg">
                <div className="text-2xl mb-2">✅</div>
                <h3 className="font-bold">Google Business</h3>
                <p className="text-sm text-gray-400">Appear on maps and local search</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <div className="text-2xl mb-2">✅</div>
                <h3 className="font-bold">Facebook Setup</h3>
                <p className="text-sm text-gray-400">Page + CTA button + Instagram connection</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <div className="text-2xl mb-2">✅</div>
                <h3 className="font-bold">Website Audit</h3>
                <p className="text-sm text-gray-400">Speed + Security + Google Analytics</p>
              </div>
            </div>
          </div>
        </section>

        {/* THE PACKAGE - What client gets exactly */}
        <section className="container mx-auto px-4 py-16 bg-white/5">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">What exactly do you get?</h2>
            
            <div className="bg-slate-800/50 rounded-xl p-6 md:p-8 border border-slate-700">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <div>
                    <strong>Complete Google Business Profile</strong>
                    <p className="text-gray-400 text-sm">Verification, optimization, photos, categories, hours, description</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <div>
                    <strong>Facebook Business Page</strong>
                    <p className="text-gray-400 text-sm">Page setup, CTA button, Instagram connection</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <div>
                    <strong>Complete Website Audit</strong>
                    <p className="text-gray-400 text-sm">Speed test, security, basic SEO, Google Analytics</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <div>
                    <strong>PDF Report with Recommendations</strong>
                    <p className="text-gray-400 text-sm">What works well and what needs improvement</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <div>
                    <strong>30 Days Support After Delivery</strong>
                    <p className="text-gray-400 text-sm">Questions and small adjustments included</p>
                  </div>
                </div>
              </div>

              {/* FACT #9 - Price visible */}
              <div className="mt-8 pt-6 border-t border-slate-700 text-center">
                <div className="text-3xl font-bold text-blue-400">£250</div>
                <div className="text-gray-400 text-sm mb-4">one-time setup • ready in 7 days</div>
                <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold w-full md:w-auto">
                  I want this package → Book now
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS - Simple process */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">How we work together</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">1</div>
                <h3 className="font-bold mb-2">15min Call</h3>
                <p className="text-sm text-gray-400">Tell me what you need, I explain how I can help</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">2</div>
                <h3 className="font-bold mb-2">50% Deposit</h3>
                <p className="text-sm text-gray-400">I start work after confirmation</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">3</div>
                <h3 className="font-bold mb-2">Delivery in 7 days</h3>
                <p className="text-sm text-gray-400">You get everything + 30 days support</p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT - with WhatsApp & Instagram */}
        <section className="container mx-auto px-4 py-16 bg-white/5">
          <div className="max-w-md mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Start today</h2>
            <p className="text-gray-300 mb-6">Call, WhatsApp, follow or fill out the form</p>
            
            <div className="space-y-3 mb-6">
              {/* FACT #2 - Phone number visible */}
              <a href="tel:+4407891897558" className="flex items-center justify-center gap-2 bg-slate-800 p-3 rounded-lg hover:bg-slate-700 transition">
                📞 +44 0789 189 7558
              </a>
              {/* FACT #3 - WhatsApp link */}
              <a href="https://wa.me/447891897558" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600/20 hover:bg-green-600/30 p-3 rounded-lg transition border border-green-500/30">
                💬 WhatsApp
              </a>
              {/* FACT #4 - Instagram link */}
              <a href="https://instagram.com/newbotic" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-pink-600/20 hover:bg-pink-600/30 p-3 rounded-lg transition border border-pink-500/30">
                📷 Instagram @newbotic
              </a>
              <a href="mailto:hello@newbotic.co.uk" className="flex items-center justify-center gap-2 bg-slate-800 p-3 rounded-lg hover:bg-slate-700 transition">
                ✉️ hello@newbotic.co.uk
              </a>
            </div>

            {/* FACT #5 - Connected form (Formspree) */}
            <form action="https://formspree.io/f/xkgwbqbj" method="POST" className="space-y-3">
              <input type="text" name="name" placeholder="Your name" className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-gray-500" />
              <input type="email" name="email" placeholder="Your email" required className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-gray-500" />
              <textarea name="message" placeholder="Tell me briefly about your business..." rows="3" className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-gray-500"></textarea>
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
    </>
  )
}