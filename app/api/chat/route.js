import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const { message } = await request.json()
    
    console.log('🤖 Chat received:', message)

    let response = "👋 Hello! I'm Newbotic AI Assistant. How can I help you today?"

    const lowerMessage = message.toLowerCase()
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      response = "👋 Hello! I'm Newbotic AI Assistant. I can help with AI solutions for your business. What would you like to know?"
    }
    else if (lowerMessage.includes('service') || lowerMessage.includes('what do you do')) {
      response = `We offer 6 main AI services:

🎨 **Branding & Design** - Beautiful logos and websites
🌐 **Website Development** - Fast, professional sites  
⚡ **Business Automation** - Automate repetitive tasks
📈 **Marketing AI** - Find more customers
🤖 **AI Chatbots** - 24/7 customer service
📊 **Business Analytics** - Understand your business

Which service interests you most?`
    }
    else if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('how much')) {
      response = `Our pricing for small businesses:

• Basic website: £299-£599
• Business automation: £499-£999  
• Full AI solution: £799-£1,999

**FREE AI Audit** - I can give you exact pricing for your needs!`
    }
    else if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('phone')) {
      response = `You can reach us:

📧 **Email:** hello@newbotic.co.uk
📞 **Phone:** +44 0789 189 7558
📍 **London, UK**

We respond within 2 hours!`
    }
    else if (lowerMessage.includes('audit') || lowerMessage.includes('free') || lowerMessage.includes('consult')) {
      response = `🎯 **FREE AI Business Audit** - Perfect!

I'll analyze your business and show you:
• Where AI can save you time/money
• Exact costs for solutions you need  
• 3-month growth plan

What's your email address to get started?`
    }

    await new Promise(resolve => setTimeout(resolve, 500))
    
    return NextResponse.json({ reply: response })

  } catch (error) {
    return NextResponse.json({ 
      reply: "👋 Hello! I'm Newbotic AI Assistant. Ask me about AI services, pricing, or book a free audit! 🚀" 
    })
  }
}