'use client'
import { useState, useRef, useEffect } from 'react'

export default function AIChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Array<{text: string, isUser: boolean}>>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

 
  const handleSend = async () => {
  if (!input.trim() || isLoading) return

  const userMessage = { text: input, isUser: true }
  setMessages(prev => [...prev, userMessage])
  setInput('')
  setIsLoading(true)

  try {
    console.log('Sending message to API:', input) // 👈 ADAUGĂ ASTA
    
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify({ message: input })
    })
    
    console.log('API Response status:', response.status) // 👈 ADAUGĂ ASTA
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`)
    }
    
    const data = await response.json()
    console.log('API Response data:', data) // 👈 ADAUGĂ ASTA
    
    setMessages(prev => [...prev, { text: data.reply, isUser: false }])
  } catch (error) {
    console.error('Chat error:', error) // 👈 ADAUGĂ ASTA
    setMessages(prev => [...prev, { 
      text: "Sorry, I'm having connection issues. Please email us at hello@newbotic.co.uk", 
      isUser: false 
    }])
  } finally {
    setIsLoading(false)
  }
}
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const quickQuestions = [
    "What services do you offer?",
    "How much does it cost?",
    "Book free AI audit",
    "Contact information"
  ]

  return (
    <>
      {/* Chat Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 z-50 group"
      >
        <span className="text-2xl">🤖</span>
        <div className="absolute -top-2 -right-2 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
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
              className="text-white hover:text-gray-200 text-lg"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            {messages.length === 0 ? (
              <div className="text-center text-gray-500 text-sm">
                <div className="text-2xl mb-2">👋</div>
                <p className="mb-4">Hello! I'm here to help with AI solutions for your business.</p>
                
                {/* Quick Questions */}
                <div className="space-y-2">
                  <p className="text-xs text-gray-400 mb-2">Try asking:</p>
                  {quickQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => setInput(question)}
                      className="block w-full text-left p-2 bg-white border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-200 transition-colors text-xs text-gray-700"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              messages.map((msg, index) => (
                <div key={index} className={`mb-3 ${msg.isUser ? 'text-right' : 'text-left'}`}>
                  <div className={`inline-block p-3 rounded-2xl max-w-[85%] ${
                    msg.isUser 
                      ? 'bg-blue-500 text-white rounded-br-none' 
                      : 'bg-gray-200 text-gray-800 rounded-bl-none'
                  }`}>
                    {msg.text.split('\n').map((line, i) => (
                      <p key={i} className={i > 0 ? 'mt-2' : ''}>{line}</p>
                    ))}
                  </div>
                </div>
              ))
            )}
            {isLoading && (
              <div className="text-left mb-3">
                <div className="inline-block p-3 rounded-2xl rounded-bl-none bg-gray-200 text-gray-800">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about AI solutions..."
                className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-sm"
                disabled={isLoading}
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isLoading ? '...' : 'Send'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}