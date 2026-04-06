'use client'

import { useState } from 'react'

export default function AIChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { text: "Hi! 👋 I'm Newbotic AI. Want to know about our 50% OFF offer?", sender: 'bot' }
  ])
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (!input.trim()) return

    // Add user message
    setMessages(prev => [...prev, { text: input, sender: 'user' }])

    // Simple bot responses based on keywords
    const lowerInput = input.toLowerCase()
    let botReply = ""

    if (lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('pret')) {
      botReply = "🔥 Special 50% OFF limited offer! Website Audit: £75 (was £150) | Web Page: £175 (was £350) | Combo: £225 (was £500). Offer ends in 7 days!"
    } 
    else if (lowerInput.includes('audit')) {
      botReply = "🔍 Website Audit includes: speed test, security check, SEO analysis, mobile test, and PDF report. Only £75 with 50% OFF!"
    }
    else if (lowerInput.includes('website') || lowerInput.includes('web') || lowerInput.includes('site')) {
      botReply = "🌐 Web Page Creation: custom design, mobile friendly, SEO optimized, contact form, Google Analytics. Starting at £175 with 50% OFF!"
    }
    else if (lowerInput.includes('combo')) {
      botReply = "🎯 Best deal! Audit + Website for only £225 (save £275). Limited spots available!"
    }
    else if (lowerInput.includes('how long') || lowerInput.includes('7 days')) {
      botReply = "⏱️ Delivery in 7 days. Plus 30 days of free support after delivery!"
    }
    else if (lowerInput.includes('call') || lowerInput.includes('book')) {
      botReply = "📅 Book a free 15min call here: https://cal.com/username/15min (replace with your Cal.com link)"
    }
    else {
      botReply = "Thanks for your message! 👋 I can tell you about: prices (50% OFF), website audit, web page creation, combo package, or delivery time. What would you like to know?"
    }

    setTimeout(() => {
      setMessages(prev => [...prev, { text: botReply, sender: 'bot' }])
    }, 500)

    setInput('')
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg transition-all z-50"
      >
        💬
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 bg-slate-800 rounded-xl shadow-2xl border border-slate-700 z-50 flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b border-slate-700 bg-blue-600/20 rounded-t-xl">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="font-bold text-white">Newbotic AI Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="h-96 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-lg ${msg.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-slate-700 text-gray-200'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-slate-700 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about prices, services..."
              className="flex-1 p-2 rounded-lg bg-slate-700 text-white placeholder-gray-400 border border-slate-600 focus:outline-none focus:border-blue-500"
            />
            <button onClick={handleSend} className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition">
              Send
            </button>
          </div>
        </div>
      )}
    </>
  )
}