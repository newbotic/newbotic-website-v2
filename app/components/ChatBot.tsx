// components/ChatBot.tsx
'use client'
import { useState } from 'react'

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Array<{text: string, isUser: boolean}>>([])
  const [input, setInput] = useState('')

  const responses = {
    'hello': "Hello! I'm Newbotic AI Assistant. How can I help you today? 😊",
    'services': "We offer: 🎨 Branding, 🌐 Websites, ⚡ Automation, 📈 Marketing AI, 🤖 Chatbots, 📊 Analytics",
    'pricing': "Our prices start from £299. Want a free AI audit to see exact costs for your business?",
    'contact': "Contact us: 📧 hello@newbotic.co.uk | 📞 +44 0789 189 7558",
    'audit': "Great! I can schedule a free AI audit. What's your email address?",
    'default': "I'd love to help! Could you tell me more about what you need?"
  }

  const handleSend = () => {
    if (!input.trim()) return

    // Add user message
    const userMessage = { text: input, isUser: true }
    setMessages(prev => [...prev, userMessage])

    // Find response
    const lowerInput = input.toLowerCase()
    let response = responses.default
    
    if (lowerInput.includes('hello') || lowerInput.includes('hi')) response = responses.hello
    else if (lowerInput.includes('service') || lowerInput.includes('what do you do')) response = responses.services
    else if (lowerInput.includes('price') || lowerInput.includes('cost')) response = responses.pricing
    else if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('phone')) response = responses.contact
    else if (lowerInput.includes('audit') || lowerInput.includes('free')) response = responses.audit

    // Add bot response after delay
    setTimeout(() => {
      setMessages(prev => [...prev, { text: response, isUser: false }])
    }, 1000)

    setInput('')
  }

  return (
    <>
      {/* Chat Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 z-50"
      >
        <span className="text-2xl">🤖</span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 h-96 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-t-2xl flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-xl">🤖</span>
              <div>
                <div className="font-bold">Newbotic AI</div>
                <div className="text-xs opacity-80">Online • Ready to help</div>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            {messages.length === 0 ? (
              <div className="text-center text-gray-500 text-sm">
                <div className="text-2xl mb-2">👋</div>
                Hello! I'm here to help with AI solutions for your business. Ask me anything!
              </div>
            ) : (
              messages.map((msg, index) => (
                <div key={index} className={`mb-3 ${msg.isUser ? 'text-right' : 'text-left'}`}>
                  <div className={`inline-block p-3 rounded-2xl max-w-[80%] ${
                    msg.isUser 
                      ? 'bg-blue-500 text-white rounded-br-none' 
                      : 'bg-gray-200 text-gray-800 rounded-bl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about our services..."
                className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
              <button 
                onClick={handleSend}
                className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}