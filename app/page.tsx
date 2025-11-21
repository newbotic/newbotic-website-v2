import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AIChatBot from './components/AIChatBot'

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
              Transform Your Business
              <br />
              <span className="text-3xl md:text-5xl text-blue-200">With Intelligent AI</span>
            </h1>

            <p className="text-lg md:text-xl mb-6 text-blue-100 max-w-2xl mx-auto">
              Cutting-edge AI solutions that help businesses work
              <span className="font-bold text-white"> 70% faster</span> and save
              <span className="font-bold text-white"> 50% on operational costs</span>
            </p>

            {/* AI Status Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20 mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-blue-200 text-sm">AI Assistant Online • Ready to Help</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 min-w-[200px]">
                🚀 Get Free AI Audit
              </button>
              <button className="bg-white/10 border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all duration-300 hover:border-blue-300 min-w-[200px]">
                💬 Talk To AI Assistant
              </button>
            </div>

            {/* AI-Powered Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center bg-white/5 p-4 rounded-xl border border-white/10 hover:border-blue-400 transition-all duration-300">
                <div className="text-2xl font-bold text-white mb-1">70%</div>
                <div className="text-blue-200 text-sm">Efficiency Boost</div>
              </div>
              <div className="text-center bg-white/5 p-4 rounded-xl border border-white/10 hover:border-purple-400 transition-all duration-300">
                <div className="text-2xl font-bold text-white mb-1">50%</div>
                <div className="text-blue-200 text-sm">Cost Reduction</div>
              </div>
              <div className="text-center bg-white/5 p-4 rounded-xl border border-white/10 hover:border-green-400 transition-all duration-300">
                <div className="text-2xl font-bold text-white mb-1">24/7</div>
                <div className="text-blue-200 text-sm">AI Support</div>
              </div>
              <div className="text-center bg-white/5 p-4 rounded-xl border border-white/10 hover:border-yellow-400 transition-all duration-300">
                <div className="text-2xl font-bold text-white mb-1">100%</div>
                <div className="text-blue-200 text-sm">Client Satisfaction</div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm md:text-base">
              <a href="mailto:hello@newbotic.co.uk" className="flex items-center gap-2 hover:text-blue-200 transition-all duration-300 bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20">
                <span>📧</span>
                hello@newbotic.co.uk
              </a>
              <a href="tel:+4407891897558" className="flex items-center gap-2 hover:text-blue-200 transition-all duration-300 bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20">
                <span>📞</span>
                +44 0789 189 7558
              </a>
            </div>
          </div>
        </section>

        {/* AI Services Section */}
        <section className="container mx-auto px-4 py-16 bg-white/10">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
              AI-Powered Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white/5 p-6 rounded-xl border border-white/20 hover:border-blue-400 transition-all duration-300 hover:transform hover:-translate-y-2">
                <div className="text-3xl mb-4">⚡</div>
                <h3 className="text-xl font-bold mb-3 text-white">Smart Automation</h3>
                <p className="opacity-90">AI-driven workflows that automate repetitive tasks and boost productivity.</p>
              </div>
              <div className="bg-white/5 p-6 rounded-xl border border-white/20 hover:border-purple-400 transition-all duration-300 hover:transform hover:-translate-y-2">
                <div className="text-3xl mb-4">🤖</div>
                <h3 className="text-xl font-bold mb-3 text-white">AI Chatbots</h3>
                <p className="opacity-90">Intelligent 24/7 customer support that understands and helps your clients.</p>
              </div>
              <div className="bg-white/5 p-6 rounded-xl border border-white/20 hover:border-green-400 transition-all duration-300 hover:transform hover:-translate-y-2">
                <div className="text-3xl mb-4">📊</div>
                <h3 className="text-xl font-bold mb-3 text-white">Data Insights</h3>
                <p className="opacity-90">AI analytics that uncover hidden opportunities in your business data.</p>    
              </div>
            </div>
          </div>
        </section>

        {/* How AI Helps Section */}
        <section className="container mx-auto px-4 py-16 bg-black/20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Why Choose AI Today?
            </h2>
            <p className="text-lg mb-8 opacity-90 leading-relaxed">
              In today's competitive market, AI is no longer a luxury—it's a necessity. 
              Our solutions are designed specifically for small businesses to compete 
              with enterprise-level technology at a fraction of the cost.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center bg-white/5 p-4 rounded-xl border border-white/10">
                <div className="text-2xl font-bold text-blue-300 mb-2">50+</div>
                <div className="text-sm opacity-80">Businesses Transformed</div>
              </div>
              <div className="text-center bg-white/5 p-4 rounded-xl border border-white/10">
                <div className="text-2xl font-bold text-purple-300 mb-2">70%</div>
                <div className="text-sm opacity-80">Time Saved</div>
              </div>
              <div className="text-center bg-white/5 p-4 rounded-xl border border-white/10">
                <div className="text-2xl font-bold text-green-300 mb-2">50%</div>
                <div className="text-sm opacity-80">Cost Reduction</div>
              </div>
              <div className="text-center bg-white/5 p-4 rounded-xl border border-white/10">
                <div className="text-2xl font-bold text-yellow-300 mb-2">24/7</div>
                <div className="text-sm opacity-80">AI Availability</div>
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive Services */}
        <section id="services" className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Complete AI Solutions
            </h2>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto">
              End-to-end AI services tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: "🎨",
                title: "AI Branding & Design",
                description: "Intelligent design solutions that create compelling brand identities",
                features: ["AI Logo Design", "Brand Strategy", "Visual Identity"]
              },
              {
                icon: "🌐",
                title: "Smart Web Development", 
                description: "AI-optimized websites that convert visitors into customers",
                features: ["AI SEO", "Smart Layouts", "Performance Optimized"]
              },
              {
                icon: "⚡",
                title: "Business Automation",
                description: "End-to-end automation of repetitive tasks and workflows",
                features: ["Process AI", "Workflow Automation", "Task Bots"]
              },
              {
                icon: "📈",
                title: "AI Marketing Suite",
                description: "Intelligent marketing tools that predict and optimize campaigns",
                features: ["Predictive Analytics", "Customer AI", "Campaign Optimization"]
              },
              {
                icon: "🤖",
                title: "Advanced Chatbots",
                description: "Conversational AI that provides 24/7 customer support",
                features: ["Natural Language", "Multi-platform", "Smart Routing"]
              },
              {
                icon: "📊",
                title: "Business Intelligence",
                description: "AI-powered analytics for data-driven decision making",
                features: ["Predictive Insights", "Performance AI", "Growth Analytics"]
              }
            ].map((service, index) => (
              <div key={index} className="bg-white/5 p-6 rounded-xl border border-white/20 hover:border-blue-400 transition-all duration-300 hover:transform hover:-translate-y-2 group">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="opacity-90 mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-blue-200 text-sm">
                      <div className="w-1 h-1 bg-blue-400 rounded-full group-hover:bg-green-400 transition-colors duration-300"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* AI Process */}
        <section className="container mx-auto px-4 py-16 bg-white/10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Our AI Implementation Process
            </h2>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "AI Discovery",
                description: "We analyze your business to identify AI opportunities"
              },
              {
                step: "2", 
                title: "Solution Design",
                description: "Custom AI strategy tailored to your specific needs"
              },
              {
                step: "3",
                title: "Smart Implementation", 
                description: "Seamless integration of AI tools into your workflow"
              },
              {
                step: "4",
                title: "Continuous Optimization",
                description: "AI that learns and improves with your business"
              }
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-lg font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">{step.title}</h3>
                <p className="text-sm opacity-80 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* AI CTA Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl border border-white/20 p-8 backdrop-blur-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Ready for AI Transformation?
            </h2>
            <p className="text-lg mb-6 text-blue-100">
              Start with a FREE AI audit and discover how artificial intelligence can revolutionize your business
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                🚀 Get Free AI Audit
              </button>
              <button className="bg-white/10 border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all duration-300 hover:border-blue-300 hover:transform hover:-translate-y-1">
                💬 Chat With Our AI
              </button>
            </div>
            
            <p className="text-sm text-blue-200 mt-4">
              Our AI assistant can answer questions right now! Click the chat button.
            </p>
          </div>
        </section>

        {/* Enhanced Contact Section */}
        <section id="contact" className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Start Your AI Journey
            </h2>

            <div className="bg-white/10 rounded-xl border border-white/20 p-6 backdrop-blur-lg">
              <div className="text-center mb-6">
                <p className="text-lg mb-4 text-blue-200">Prefer to talk to a human?</p>
                <a href="mailto:hello@newbotic.co.uk" className="text-xl font-bold text-white hover:text-blue-200 transition-colors">
                  hello@newbotic.co.uk
                </a>
              </div>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:border-blue-400 transition-colors duration-300"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:border-blue-400 transition-colors duration-300"
                />
                <textarea
                  placeholder="Tell us about your business challenges..."
                  rows={4}
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:border-blue-400 transition-colors duration-300"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-white text-blue-600 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <AIChatBot />
    </>
  )
}