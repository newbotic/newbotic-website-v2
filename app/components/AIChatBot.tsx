'use client'

import { useState } from 'react'

export default function AIChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { 
      text: "👋 Hi! I'm NEWBOTIC AI Assistant. 🇬🇧\n\nI have a special offer for you - 50% OFF on my services!\n\nWhat are you interested in?", 
      sender: 'bot' 
    }
  ])
  const [input, setInput] = useState('')
  const [showSuggestions, setShowSuggestions] = useState(true)

  const suggestions = [
    { text: "💰 Prices", reply: "prices" },
    { text: "🔍 Website Audit", reply: "audit" },
    { text: "🌐 Web Creation", reply: "website" },
    { text: "🎯 Combo Package", reply: "combo" },
    { text: "📅 Book a Call", reply: "call" },
    { text: "⏱️ Delivery Time", reply: "how long" }
  ]

  const handleSuggestion = (reply: string) => {
    setInput(reply)
    setTimeout(() => handleSend(reply), 100)
  }

  const handleSend = (forcedInput?: string) => {
    const messageToSend = forcedInput !== undefined ? forcedInput : input
    if (!messageToSend.trim()) return

    setMessages(prev => [...prev, { text: messageToSend, sender: 'user' }])
    setShowSuggestions(false)

    const lowerInput = messageToSend.toLowerCase()
    let botReply = ""

    if (lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('how much')) {
      botReply = "🔥 LIMITED TIME OFFER - 50% OFF 🔥\n\n📊 Website Audit: £75 (was £150)\n🌐 Web Page Creation: £175 (was £350)\n🎯 Combo Package (Audit + Website): £225 (was £500)\n\n✅ All include 30 days free support!\n⏰ Offer expires in 7 days.\n\nWould you like a personalized quote?"
    }
    else if (lowerInput.includes('audit')) {
      botReply = "🔍 WEBSITE AUDIT SERVICE - £75 (50% OFF)\n\nWhat's included:\n✅ Speed performance test\n✅ Security check\n✅ SEO analysis\n✅ Mobile responsiveness test\n✅ Detailed PDF report with recommendations\n\n⏱️ Delivery: 7 days\n📞 30 days free support included\n\nAre you interested in starting an audit?"
    }
    else if (lowerInput.includes('website') || lowerInput.includes('web') || lowerInput.includes('create')) {
      botReply = "🌐 PROFESSIONAL WEBSITE CREATION - £175 (50% OFF)\n\nWhat you get:\n✅ Custom design\n✅ Mobile friendly\n✅ SEO optimized (appears on Google)\n✅ Contact form\n✅ Google Analytics setup\n✅ 3 pages included\n\n⏱️ Delivery: 7 days\n📞 30 days free support included\n\nTell me about your business and I'll give you a simulation!"
    }
    else if (lowerInput.includes('combo') || lowerInput.includes('both')) {
      botReply = "🎯 BEST DEAL - COMBO PACKAGE: £225\n\nYou save £275 off the regular price!\n\nIncludes:\n✅ Complete Website Audit\n✅ Professional Website (3 pages)\n✅ 30 days free support\n✅ SEO optimization included\n✅ Google Analytics setup\n\n⏱️ Everything ready in 7 days!\n\nWould you like a personalized quote for your business?"
    }
    else if (lowerInput.includes('book') || lowerInput.includes('call') || lowerInput.includes('meeting')) {
      botReply = "📅 FREE 15min DISCOVERY CALL\n\nDirect link: https://cal.com/newbotic/15min\n\nWhat we'll discuss in 15 minutes:\n1️⃣ You tell me about your business\n2️⃣ I show you what you need\n3️⃣ I give you a personalized quote\n4️⃣ I answer all your questions\n\nYou can also message me on WhatsApp: https://wa.me/447891897558\n\nI'm looking forward to talking with you! 🚀"
    }
    else if (lowerInput.includes('how long') || lowerInput.includes('delivery') || lowerInput.includes('7 days')) {
      botReply = "⏱️ DELIVERY TIME: 7 days\n\n📅 Day 1-2: Analysis and planning\n📅 Day 3-5: Implementation\n📅 Day 6-7: Testing and delivery\n\n✅ After delivery, you get 30 days of free support for small adjustments.\n\nHurry up, the 50% OFF offer expires in 7 days!"
    }
    else if (lowerInput.includes('whatsapp') || lowerInput.includes('contact')) {
      botReply = "💬 CONTACT DIRECT:\n\n📞 WhatsApp: https://wa.me/447891897558\n📧 Email: hello@newbotic.co.uk\n📷 Instagram: @newbotic\n\nI reply within 24 hours!\n\nYou can also ask me anything here in this chat."
    }
    else if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('hey')) {
      botReply = "Hello! 👋 Glad you stopped by NEWBOTIC.\n\nI have a special offer for you: 50% OFF on website audit or website creation services.\n\nWhat interests you? I'll give you all the details!\n\n📌 You can choose one of the options below or ask me anything."
    }
    else {
      botReply = "Sorry, I didn't quite understand that. 🤔\n\nI can help you with:\n\n💰 How much do services cost?\n🔍 What does the audit include?\n🌐 How do you create a website?\n🎯 What is the combo package?\n📅 How do I book a call?\n⏱️ How long does it take?\n💬 How can I contact you?\n\nChoose one of the questions above or ask me anything! 😊"
    }

    setTimeout(() => {
      setMessages(prev => [...prev, { text: botReply, sender: 'bot' }])
      setShowSuggestions(true)
    }, 500)

    if (forcedInput === undefined) {
      setInput('')
    }
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full p-4 shadow-lg transition-all z-50 animate-bounce"
      >
        💬
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 bg-slate-900 rounded-xl shadow-2xl border border-slate-700 z-50 flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b border-slate-700 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-t-xl">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="font-bold text-white">NEWBOTIC AI</span>
              <span className="bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">50% OFF</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white text-xl">
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="h-96 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-lg whitespace-pre-line ${msg.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-gray-200 border border-slate-700'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            
            {/* Suggestions Buttons */}
            {showSuggestions && messages[messages.length - 1]?.sender === 'bot' && (
              <div className="flex flex-wrap gap-2 mt-2">
                {suggestions.map((sug, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSuggestion(sug.reply)}
                    className="bg-slate-700 hover:bg-slate-600 text-white text-xs px-3 py-1.5 rounded-full transition"
                  >
                    {sug.text}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-slate-700 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your question here..."
              className="flex-1 p-2 rounded-lg bg-slate-800 text-white placeholder-gray-400 border border-slate-600 focus:outline-none focus:border-blue-500"
            />
            <button onClick={() => handleSend()} className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition">
              Send
            </button>
          </div>
        </div>
      )}
    </>
  )
}