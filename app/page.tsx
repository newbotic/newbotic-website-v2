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
          
          <p className="text-blue-200 text-lg md:text-xl mb-2 font-semibold">
            Intelligent Automation, Real Results
          </p>
          
          <p className="text-base md:text-xl mb-6 md:mb-8 opacity-90">70% Faster, 50% Cheaper</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition min-w-[200px]">
              Get Free AI Audit
            </button>
            <a href="#contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition min-w-[200px] text-center">
              Contact Us
            </a>
          </div>

          <div className="mt-8 text-center">
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 text-sm md:text-base">
              <a href="mailto:hello@newbotic.co.uk" className="flex items-center gap-2 hover:text-blue-200 transition">
                📧 hello@newbotic.co.uk
              </a>
              <a href="tel:+4407891897558" className="flex items-center gap-2 hover:text-blue-200 transition">
                📞 +4407891897558
              </a>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="container mx-auto px-4 py-12 md:py-20 bg-white/5">
          <div className="text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-8">Why Choose Newbotic?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="p-6">
                <div className="text-3xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold mb-2">70% Faster</h3>
                <p className="opacity-90">AI-powered development delivers results in days, not weeks</p>
              </div>
              <div className="p-6">
                <div className="text-3xl mb-4">💰</div>
                <h3 className="text-xl font-semibold mb-2">50% Cheaper</h3>
                <p className="opacity-90">Automation reduces costs without compromising quality</p>
              </div>
              <div className="p-6">
                <div className="text-3xl mb-4">🤖</div>
                <h3 className="text-xl font-semibold mb-2">AI-Powered</h3>
                <p className="opacity-90">Latest AI technology for superior results</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="container mx-auto px-4 py-12 md:py-20 bg-black/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">About Newbotic</h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              We're a London-based AI solutions agency helping businesses leverage artificial intelligence 
              to achieve unprecedented growth. Our Romanian-British team combines technical excellence 
              with creative innovation.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-300 mb-2">50+</div>
                <div className="text-sm opacity-80">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-300 mb-2">70%</div>
                <div className="text-sm opacity-80">Faster Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-300 mb-2">50%</div>
                <div className="text-sm opacity-80">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-300 mb-2">24/7</div>
                <div className="text-sm opacity-80">AI Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="container mx-auto px-4 py-12 md:py-20">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">Our AI-Powered Process</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">1</div>
              <h3 className="font-semibold mb-2">AI Analysis</h3>
              <p className="text-sm opacity-80">We analyze your business needs with AI</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">2</div>
              <h3 className="font-semibold mb-2">Smart Solution</h3>
              <p className="text-sm opacity-80">AI designs the optimal solution</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">3</div>
              <h3 className="font-semibold mb-2">Rapid Development</h3>
              <p className="text-sm opacity-80">AI accelerates implementation</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">4</div>
              <h3 className="font-semibold mb-2">Continuous Optimization</h3>
              <p className="text-sm opacity-80">AI improves performance over time</p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="container mx-auto px-4 py-12 md:py-20">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-white/20">
              <div className="text-2xl mb-3">🌐</div>
              <h3 className="text-xl font-semibold mb-3">Website Development</h3>
              <p className="opacity-90 mb-4">AI-powered websites built in days, not weeks</p>
              <ul className="text-sm opacity-80 space-y-1">
                <li>• E-commerce Solutions</li>
                <li>• Business Websites</li>
                <li>• Landing Pages</li>
              </ul>
            </div>

            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-white/20">
              <div className="text-2xl mb-3">⚡</div>
              <h3 className="text-xl font-semibold mb-3">Business Automation</h3>
              <p className="opacity-90 mb-4">Streamline operations with AI workflows</p>
              <ul className="text-sm opacity-80 space-y-1">
                <li>• Process Automation</li>
                <li>• CRM Integration</li>
                <li>• Workflow Optimization</li>
              </ul>
            </div>

            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-white/20">
              <div className="text-2xl mb-3">📈</div>
              <h3 className="text-xl font-semibold mb-3">Marketing AI</h3>
              <p className="opacity-90 mb-4">AI-driven campaigns that convert</p>
              <ul className="text-sm opacity-80 space-y-1">
                <li>• Social Media Management</li>
                <li>• Email Marketing</li>
                <li>• SEO Optimization</li>
              </ul>
            </div>

            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-white/20">
              <div className="text-2xl mb-3">🤖</div>
              <h3 className="text-xl font-semibold mb-3">AI Chatbots</h3>
              <p className="opacity-90 mb-4">24/7 customer support automation</p>
              <ul className="text-sm opacity-80 space-y-1">
                <li>• Custom AI Assistants</li>
                <li>• Multilingual Support</li>
                <li>• WhatsApp Integration</li>
              </ul>
            </div>

            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-white/20">
              <div className="text-2xl mb-3">📊</div>
              <h3 className="text-xl font-semibold mb-3">Data Analytics</h3>
              <p className="opacity-90 mb-4">AI-powered business insights</p>
              <ul className="text-sm opacity-80 space-y-1">
                <li>• Performance Dashboards</li>
                <li>• Predictive Analytics</li>
                <li>• KPI Tracking</li>
              </ul>
            </div>

            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-white/20">
              <div className="text-2xl mb-3">🔒</div>
              <h3 className="text-xl font-semibold mb-3">AI Security</h3>
              <p className="opacity-90 mb-4">Protect your business with AI</p>
              <ul className="text-sm opacity-80 space-y-1">
                <li>• Threat Detection</li>
                <li>• Data Protection</li>
                <li>• Compliance Monitoring</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Get your FREE AI Business Audit and discover how we can help you save 50% on costs 
            while delivering results 70% faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition">
              🚀 Get Free AI Audit
            </button>
            <a href="#contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition">
              📞 Book a Call
            </a>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container mx-auto px-4 py-12 md:py-20">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12">Get In Touch</h2>
          <div className="max-w-md mx-auto bg-white/10 p-4 md:p-8 rounded-lg backdrop-blur-sm">
            <div className="text-center mb-6">
              <p className="text-lg mb-4">📧 Contact us directly:</p>
              <a href="mailto:hello@newbotic.co.uk" className="text-xl font-semibold text-white hover:text-blue-200 transition">
                hello@newbotic.co.uk
              </a>
            </div>
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