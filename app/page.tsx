import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 text-white pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12 md:py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6">Newbotic</h1>
          <p className="text-lg md:text-2xl mb-3 md:mb-4">AI-Powered Digital Solutions</p>
          <p className="text-base md:text-xl mb-6 md:mb-8 opacity-90">70% Faster, 50% Cheaper</p>
          <button className="bg-white text-blue-600 px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-gray-100 transition">
            Get Free AI Audit
          </button>
        </section>

        {/* Services Section */}
        <section id="services" className="container mx-auto px-4 py-12 md:py-20">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            <div className="bg-white/10 p-4 md:p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Website Development</h3>
              <p className="opacity-90 text-sm md:text-base">AI-powered websites built in days, not weeks</p>
            </div>
            <div className="bg-white/10 p-4 md:p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Business Automation</h3>
              <p className="opacity-90 text-sm md:text-base">Streamline operations with AI workflows</p>
            </div>
            <div className="bg-white/10 p-4 md:p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Marketing AI</h3>
              <p className="opacity-90 text-sm md:text-base">AI-driven campaigns that convert</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container mx-auto px-4 py-12 md:py-20">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12">Get In Touch</h2>
          <div className="max-w-md mx-auto bg-white/10 p-4 md:p-8 rounded-lg backdrop-blur-sm">
            <form className="space-y-3 md:space-y-4">
              <input type="text" placeholder="Your Name" className="w-full p-3 rounded bg-white/20 border border-white/30 text-white placeholder-white/70 text-base" />
              <input type="email" placeholder="Your Email" className="w-full p-3 rounded bg-white/20 border border-white/30 text-white placeholder-white/70 text-base" />
              <textarea placeholder="Your Message" rows={4} className="w-full p-3 rounded bg-white/20 border border-white/30 text-white placeholder-white/70 text-base"></textarea>
              <button type="submit" className="w-full bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition text-base min-h-[48px]">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
