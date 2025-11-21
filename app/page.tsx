import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-purple-900 text-white pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 md:py-24 text-center">
          <div className="max-w-6xl mx-auto">
            {/* Logo & Tagline */}
            <div className="flex justify-center mb-8">
              <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-lg px-8 py-4 rounded-2xl border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center shadow-2xl">
                  <span className="text-white font-bold text-lg">N</span>
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">NEWBOTIC</div>
                  <div className="text-blue-200 text-sm font-semibold">AI SOLUTIONS</div>
                </div>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent leading-tight">
              Transform Your Business
              <br />
              <span className="text-4xl md:text-6xl">With Intelligent AI</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Enterprise-grade AI solutions that deliver <span className="font-bold text-white">70% faster results</span> at 
              <span className="font-bold text-white"> 50% lower cost</span>
            </p>
            
            {/* Brand Promise */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-6 py-3 rounded-full border border-white/20 mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-blue-200 font-semibold">Intelligent Automation • Real Results • Measurable ROI</span>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-12 py-5 rounded-xl font-bold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25 min-w-[240px] flex items-center justify-center gap-3">
                <span>🚀</span>
                Get Free AI Audit
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
              <a href="#contact" className="group bg-white/10 backdrop-blur-lg border-2 border-white/30 text-white px-12 py-5 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105 min-w-[240px] text-center flex items-center justify-center gap-3">
                <span>📞</span>
                Book Strategy Call
              </a>
            </div>

            {/* Brand Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="text-center bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">70%</div>
                <div className="text-blue-200 font-semibold">Faster Delivery</div>
              </div>
              <div className="text-center bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">50%</div>
                <div className="text-blue-200 font-semibold">Cost Reduction</div>
              </div>
              <div className="text-center bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">24/7</div>
                <div className="text-blue-200 font-semibold">AI Support</div>
              </div>
              <div className="text-center bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">100%</div>
                <div className="text-blue-200 font-semibold">Client Success</div>
              </div>
            </div>

            {/* Contact with Branding */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-base md:text-lg">
              <a href="mailto:hello@newbotic.co.uk" className="flex items-center gap-3 hover:text-blue-200 transition-all duration-300 bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-8 py-4 rounded-xl border border-white/20 hover:border-white/40 group">
                <span className="text-xl group-hover:scale-110 transition-transform">📧</span>
                <span className="font-semibold">hello@newbotic.co.uk</span>
              </a>
              <a href="tel:+4407891897558" className="flex items-center gap-3 hover:text-blue-200 transition-all duration-300 bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-8 py-4 rounded-xl border border-white/20 hover:border-white/40 group">
                <span className="text-xl group-hover:scale-110 transition-transform">📞</span>
                <span className="font-semibold">+44 0789 189 7558</span>
              </a>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="container mx-auto px-4 py-20 md:py-28 bg-gradient-to-b from-white/10 to-transparent">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-16 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              The Newbotic Advantage
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg p-10 rounded-3xl border border-white/20 hover:border-blue-400/50 transition-all duration-500 group">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">⚡</div>
                <h3 className="text-2xl font-bold mb-4 text-white">Lightning Fast Deployment</h3>
                <p className="text-lg opacity-90 leading-relaxed">AI-powered development that delivers enterprise-grade solutions in weeks, not months. Accelerate your time-to-market dramatically.</p>
              </div>
              <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg p-10 rounded-3xl border border-white/20 hover:border-purple-400/50 transition-all duration-500 group">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">💰</div>
                <h3 className="text-2xl font-bold mb-4 text-white">Maximum Cost Efficiency</h3>
                <p className="text-lg opacity-90 leading-relaxed">Cut development costs by 50% while maintaining exceptional quality. Our AI-driven approach eliminates wasteful spending.</p>
              </div>
              <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg p-10 rounded-3xl border border-white/20 hover:border-blue-400/50 transition-all duration-500 group">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">🎯</div>
                <h3 className="text-2xl font-bold mb-4 text-white">Guaranteed Results</h3>
                <p className="text-lg opacity-90 leading-relaxed">Every solution is engineered to deliver measurable business impact and ROI. We focus on what matters - your success.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Story */}
        <section className="container mx-auto px-4 py-20 md:py-28 bg-gradient-to-br from-blue-800/30 to-purple-800/30">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-lg px-6 py-3 rounded-full border border-white/20 mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
              <span className="text-blue-200 font-semibold">OUR MISSION</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Redefining Business with AI
            </h2>
            <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-5xl mx-auto leading-relaxed">
              At <span className="font-bold text-white">Newbotic</span>, we believe in the transformative power of artificial intelligence. 
              We're not just developers; we're strategic partners in your growth journey. Our mission is to 
              make enterprise-level AI accessible to businesses of all sizes, delivering solutions that are 
              both technologically advanced and commercially viable.
            </p>
            
            {/* Brand Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-2xl">
                  <span className="text-2xl">🚀</span>
                </div>
                <h4 className="text-xl font-bold mb-3">Innovation First</h4>
                <p className="opacity-80">Pushing boundaries with cutting-edge AI technology and creative solutions</p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-2xl">
                  <span className="text-2xl">💎</span>
                </div>
                <h4 className="text-xl font-bold mb-3">Quality Focus</h4>
                <p className="opacity-80">Delivering exceptional quality that exceeds expectations and drives success</p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-2xl">
                  <span className="text-2xl">🤝</span>
                </div>
                <h4 className="text-xl font-bold mb-3">Partnership Driven</h4>
                <p className="opacity-80">Building long-term relationships based on trust, transparency, and results</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="container mx-auto px-4 py-20 md:py-28">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-lg px-6 py-3 rounded-full border border-white/20 mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-400 rounded-full"></div>
              <span className="text-blue-200 font-semibold">OUR SERVICES</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              AI-Powered Solutions
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Comprehensive services to transform your business with intelligent technology and strategic branding
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: "🎨",
                title: "AI Branding & Identity",
                description: "Intelligent branding solutions that create memorable and impactful brand identities",
                features: ["Logo & Visual Identity", "Brand Strategy", "Brand Guidelines", "AI Design Systems"]
              },
              {
                icon: "🌐",
                title: "AI Website Development",
                description: "Intelligent websites built with cutting-edge AI technology for maximum impact",
                features: ["E-commerce Solutions", "Business Platforms", "Landing Pages", "AI Optimization"]
              },
              {
                icon: "⚡",
                title: "Business Automation",
                description: "Streamline operations with intelligent workflow automation and AI integration",
                features: ["Process Optimization", "CRM Integration", "Workflow AI", "API Development"]
              },
              {
                icon: "📈",
                title: "Marketing Intelligence",
                description: "AI-driven marketing campaigns that deliver measurable results and ROI",
                features: ["Social Media AI", "Email Automation", "SEO Optimization", "Analytics Dashboard"]
              },
              {
                icon: "🤖",
                title: "AI Chatbots & Assistants",
                description: "24/7 intelligent customer support and engagement solutions",
                features: ["Custom AI Assistants", "Multilingual Support", "WhatsApp Integration", "Voice Bots"]
              },
              {
                icon: "📊",
                title: "Data Analytics & AI",
                description: "Transform data into actionable business insights with AI-powered analytics",
                features: ["Performance Dashboards", "Predictive Analytics", "KPI Tracking", "AI Reporting"]
              },
              {
                icon: "🔒",
                title: "AI Security Solutions",
                description: "Protect your business with intelligent security and compliance monitoring",
                features: ["Threat Detection", "Data Protection", "Compliance Monitoring", "Security AI"]
              },
              {
                icon: "🛍️",
                title: "E-commerce AI",
                description: "Intelligent online stores with AI-powered personalization and automation",
                features: ["AI Product Recommendations", "Inventory Management", "Payment Solutions", "CRM Integration"]
              },
              {
                icon: "📱",
                title: "Mobile App Development",
                description: "AI-powered mobile applications for iOS and Android platforms",
                features: ["Native Apps", "Cross-Platform", "AI Features", "App Store Optimization"]
              }
            ].map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20 hover:border-blue-400/50 transition-all duration-500 group hover:transform hover:-translate-y-2">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-lg opacity-90 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-blue-200">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="container mx-auto px-4 py-20 md:py-28 bg-gradient-to-br from-blue-800/20 to-purple-800/20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-lg px-6 py-3 rounded-full border border-white/20 mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
              <span className="text-blue-200 font-semibold">OUR PROCESS</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              How We Deliver Excellence
            </h2>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "AI Discovery & Strategy",
                description: "We analyze your business with AI to create a customized strategy",
                color: "from-blue-500 to-cyan-500"
              },
              {
                step: "2",
                title: "Intelligent Design",
                description: "AI-powered design process for optimal user experience and branding",
                color: "from-purple-500 to-pink-500"
              },
              {
                step: "3",
                title: "Rapid Development",
                description: "AI-accelerated development delivering quality solutions faster",
                color: "from-green-500 to-blue-500"
              },
              {
                step: "4",
                title: "Continuous Optimization",
                description: "Ongoing AI monitoring and optimization for peak performance",
                color: "from-orange-500 to-red-500"
              }
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-2xl`}>
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{step.title}</h3>
                <p className="text-lg opacity-80 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="container mx-auto px-4 py-20 md:py-28 text-center">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-lg rounded-3xl border border-white/20 p-12 md:p-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Join the AI revolution and discover how our solutions can help you achieve 
              <span className="font-bold text-white"> 70% faster growth</span> while reducing costs by 
              <span className="font-bold text-white"> 50%</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <button className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-12 py-5 rounded-xl font-bold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25 min-w-[240px] flex items-center justify-center gap-3">
                <span>🎯</span>
                Get Free AI Audit
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
              <a href="#contact" className="group bg-white/10 backdrop-blur-lg border-2 border-white/30 text-white px-12 py-5 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105 min-w-[240px] text-center flex items-center justify-center gap-3">
                <span>💬</span>
                Start Conversation
              </a>
            </div>
            
            <p className="text-blue-200 text-lg">
              <span className="font-semibold">Limited Time:</span> First 10 clients receive 
              <span className="font-bold text-white"> 20% discount</span> on initial project
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container mx-auto px-4 py-20 md:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-lg px-6 py-3 rounded-full border border-white/20 mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-400 rounded-full"></div>
              <span className="text-blue-200 font-semibold">GET IN TOUCH</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Let's Build Something Amazing
            </h2>
            
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-3xl border border-white/20 p-8 md:p-12">
              <div className="text-center mb-8">
                <p className="text-xl mb-6 text-blue-200">Prefer direct contact?</p>
                <a href="mailto:hello@newbotic.co.uk" className="text-2xl font-bold text-white hover:text-blue-200 transition-colors duration-300 inline-block">
                  hello@newbotic.co.uk
                </a>
              </div>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/70 text-lg focus:outline-none focus:border-blue-400 transition-colors"
                  />
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/70 text-lg focus:outline-none focus:border-blue-400 transition-colors"
                  />
                </div>
                <textarea 
                  placeholder="Tell us about your project..." 
                  rows={6}
                  className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/70 text-lg focus:outline-none focus:border-blue-400 transition-colors"
                ></textarea>
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-5 rounded-xl font-bold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl"
                >
                  Send Message 🚀
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