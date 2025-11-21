import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 text-white pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12 md:py-20 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Logo & Tagline */}
            <div className="flex justify-center mb-8">
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-lg px-6 py-3 rounded-xl border border-white/20">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm">N</span>
                </div>
                <div className="text-left">
                  <div className="text-xl font-bold text-white">NEWBOTIC</div>
                  <div className="text-blue-200 text-xs font-semibold">AI SOLUTIONS</div>
                </div>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Grow Your Business
              <br />
              <span className="text-3xl md:text-5xl text-blue-200">With Smart AI Tools</span>
            </h1>
            
            <p className="text-lg md:text-xl mb-6 text-blue-100 max-w-2xl mx-auto">
              Affordable AI solutions that help small businesses work 
              <span className="font-bold text-white"> 70% faster</span> and save 
              <span className="font-bold text-white"> 50% on costs</span>
            </p>
            
            {/* Simple Promise */}
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20 mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-blue-200 text-sm">Fast • Affordable • Effective</span>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg min-w-[200px]">
                🚀 Get Free AI Audit
              </button>
              <a href="#contact" className="bg-white/10 border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all duration-300 min-w-[200px] text-center">
                📞 Talk To Us
              </a>
            </div>

            {/* Simple Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center bg-white/5 p-4 rounded-xl border border-white/10">
                <div className="text-2xl font-bold text-white mb-1">70%</div>
                <div className="text-blue-200 text-sm">Faster Work</div>
              </div>
              <div className="text-center bg-white/5 p-4 rounded-xl border border-white/10">
                <div className="text-2xl font-bold text-white mb-1">50%</div>
                <div className="text-blue-200 text-sm">Cost Savings</div>
              </div>
              <div className="text-center bg-white/5 p-4 rounded-xl border border-white/10">
                <div className="text-2xl font-bold text-white mb-1">24/7</div>
                <div className="text-blue-200 text-sm">AI Support</div>
              </div>
              <div className="text-center bg-white/5 p-4 rounded-xl border border-white/10">
                <div className="text-2xl font-bold text-white mb-1">100%</div>
                <div className="text-blue-200 text-sm">Client Happy</div>
              </div>
            </div>

            {/* Contact */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm md:text-base">
              <a href="mailto:hello@newbotic.co.uk" className="flex items-center gap-2 hover:text-blue-200 transition-all duration-300 bg-white/10 px-4 py-2 rounded-lg">
                <span>📧</span>
                hello@newbotic.co.uk
              </a>
              <a href="tel:+4407891897558" className="flex items-center gap-2 hover:text-blue-200 transition-all duration-300 bg-white/10 px-4 py-2 rounded-lg">
                <span>📞</span>
                +44 0789 189 7558
              </a>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="container mx-auto px-4 py-16 bg-white/10">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
              Perfect for Small Businesses
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white/5 p-6 rounded-xl border border-white/20">
                <div className="text-3xl mb-4">⚡</div>
                <h3 className="text-xl font-bold mb-3 text-white">Quick Setup</h3>
                <p className="opacity-90">Get your AI tools running in days, not months. Perfect for busy business owners.</p>
              </div>
              <div className="bg-white/5 p-6 rounded-xl border border-white/20">
                <div className="text-3xl mb-4">💰</div>
                <h3 className="text-xl font-bold mb-3 text-white">Budget Friendly</h3>
                <p className="opacity-90">Prices that make sense for growing businesses. No hidden costs.</p>
              </div>
              <div className="bg-white/5 p-6 rounded-xl border border-white/20">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="text-xl font-bold mb-3 text-white">Real Results</h3>
                <p className="opacity-90">Tools that actually work and help you save time and money.</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section - Simplified */}
        <section className="container mx-auto px-4 py-16 bg-black/20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              About Newbotic
            </h2>
            <p className="text-lg mb-8 opacity-90 leading-relaxed">
              We're a friendly AI company that helps small businesses grow smarter. 
              We believe every business should have access to great technology without 
              the big company price tag.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-300 mb-2">50+</div>
                <div className="text-sm opacity-80">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-300 mb-2">70%</div>
                <div className="text-sm opacity-80">Faster Work</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-300 mb-2">50%</div>
                <div className="text-sm opacity-80">Cost Saved</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-300 mb-2">24/7</div>
                <div className="text-sm opacity-80">Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section - Simple */}
        <section id="services" className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Our Services
            </h2>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto">
              Everything you need to grow your business with AI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: "🎨",
                title: "Branding & Design",
                description: "Beautiful logos and brand identity that makes your business stand out",
                features: ["Logo Design", "Brand Colors", "Business Cards"]
              },
              {
                icon: "🌐",
                title: "Website Development",
                description: "Professional websites that work on all devices and bring you customers",
                features: ["Business Websites", "Landing Pages", "Mobile Friendly"]
              },
              {
                icon: "⚡",
                title: "Business Automation",
                description: "Automate repetitive tasks so you can focus on growing your business",
                features: ["Email Automation", "Customer Management", "Process Setup"]
              },
              {
                icon: "📈",
                title: "Marketing AI",
                description: "Smart tools to help you find more customers and grow your sales",
                features: ["Social Media", "Email Marketing", "Customer Outreach"]
              },
              {
                icon: "🤖",
                title: "AI Chatbots",
                description: "24/7 customer service that answers questions and helps your customers",
                features: ["Website Chat", "WhatsApp Bots", "Quick Replies"]
              },
              {
                icon: "📊",
                title: "Business Analytics",
                description: "Understand your business better with simple, clear reports and insights",
                features: ["Sales Reports", "Customer Analytics", "Performance Tracking"]
              }
            ].map((service, index) => (
              <div key={index} className="bg-white/5 p-6 rounded-xl border border-white/20 hover:border-blue-400 transition-all duration-300">
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="opacity-90 mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-blue-200 text-sm">
                      <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Simple Process */}
        <section className="container mx-auto px-4 py-16 bg-white/10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              How We Work
            </h2>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "We Talk",
                description: "You tell us about your business and what you need"
              },
              {
                step: "2",
                title: "We Plan",
                description: "We create a simple plan that works for your budget"
              },
              {
                step: "3",
                title: "We Build",
                description: "We build your solution quickly and efficiently"
              },
              {
                step: "4",
                title: "We Support",
                description: "We help you use it and make it even better over time"
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">{step.title}</h3>
                <p className="text-sm opacity-80">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA - Simple */}
        <section className="container mx-auto px-4 py-16 text-center">
          <div className="max-w-2xl mx-auto bg-white/10 rounded-2xl border border-white/20 p-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Ready to Grow Your Business?
            </h2>
            <p className="text-lg mb-6 text-blue-100">
              Let's talk about how AI can help you work smarter and save money
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300">
                🚀 Get Free AI Audit
              </button>
              <a href="#contact" className="bg-white/10 border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all duration-300 text-center">
                💬 Let's Chat
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section - Simple */}
        <section id="contact" className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Get In Touch
            </h2>
            
            <div className="bg-white/10 rounded-xl border border-white/20 p-6">
              <div className="text-center mb-6">
                <p className="text-lg mb-4 text-blue-200">The easiest way to reach us:</p>
                <a href="mailto:hello@newbotic.co.uk" className="text-xl font-bold text-white hover:text-blue-200 transition-colors">
                  hello@newbotic.co.uk
                </a>
              </div>
              
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:border-blue-400"
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:border-blue-400"
                />
                <textarea 
                  placeholder="Tell us about your business..." 
                  rows={4}
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:border-blue-400"
                ></textarea>
                <button 
                  type="submit" 
                  className="w-full bg-white text-blue-600 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}