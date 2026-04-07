import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AIChatBot from './components/AIChatBot'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white pt-16 md:pt-20">
        
        <section className="container mx-auto px-4 py-12 md:py-16 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="bg-white/10 backdrop-blur-lg px-6 py-3 rounded-xl">
                <span className="text-2xl font-bold">NEWBOTIC</span>
                <span className="text-blue-400 text-sm ml-2">digital</span>
              </div>
            </div>
            <div className="inline-block bg-red-600/80 text-white px-4 py-2 rounded-full text-sm font-bold mb-4 animate-pulse">
              LIMITED TIME OFFER - 50% OFF
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Website Audit + Web Page Creation
              <br />
              <span className="text-blue-400 text-2xl md:text-4xl">Starting from 125 GBP</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Professional websites and detailed audits for local businesses
              <br />
              <span className="text-blue-300">Ready in 7 days. Limited spots available!</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a href="https://calendly.com/hello-newbotic/30min" target="_blank" className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-lg font-bold text-lg transition-all">
                Book Free Call
              </a>
              <a href="https://wa.me/447891897558" target="_blank" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-bold text-lg transition-all">
                WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 bg-white/5">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">How we work together</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div><div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">1</div><h3 className="font-bold mb-2">15min Call</h3><p className="text-sm text-gray-400">Tell me what you need</p></div>
              <div><div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">2</div><h3 className="font-bold mb-2">50% Deposit</h3><p className="text-sm text-gray-400">I start work after confirmation</p></div>
              <div><div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">3</div><h3 className="font-bold mb-2">Delivery in 7 days</h3><p className="text-sm text-gray-400">You get everything + support</p></div>
            </div>
          </div>
        </section>

        <section id="contact" className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Start today</h2>
            <div className="space-y-3 mb-6">
              <a href="tel:+4407891897558" className="flex items-center justify-center gap-2 bg-slate-800 p-3 rounded-lg">+44 0789 189 7558</a>
              <a href="https://wa.me/447891897558" target="_blank" className="flex items-center justify-center gap-2 bg-green-600/20 p-3 rounded-lg">WhatsApp</a>
              <a href="mailto:hello@newbotic.co.uk" className="flex items-center justify-center gap-2 bg-slate-800 p-3 rounded-lg">hello@newbotic.co.uk</a>
            </div>
            <form action="https://formspree.io/f/mlgoapje" method="POST" className="space-y-3">
              <input type="text" name="name" placeholder="Your name" className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white" />
              <input type="email" name="email" placeholder="Your email" required className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white" />
              <textarea name="message" placeholder="Tell me about your business" rows={3} className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white"></textarea>
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded-lg font-semibold">Send</button>
            </form>
          </div>
        </section>

      </main>
      <Footer />
      <AIChatBot />
    </>
  )
}
