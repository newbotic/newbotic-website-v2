import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import AIChatBot from "./components/AIChatBot"

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
              50% OFF LIMITED OFFER
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Website Audit + Web Creation
              <br />
              <span className="text-blue-400 text-2xl md:text-4xl">Starting from 125 GBP</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Professional websites and audits for local businesses
              <br />
              <span className="text-blue-300">Ready in 7 days</span>
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
      </main>
      <Footer />
      <AIChatBot />
    </>
  )
}
