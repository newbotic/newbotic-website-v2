'use client'

import { useState, useRef } from 'react'

const businessTypes = [
  { id: 'restaurant', name: 'Restaurant / Cafe', multiplier: 1.0 },
  { id: 'retail', name: 'Retail / Shop', multiplier: 0.9 },
  { id: 'service', name: 'Service / Repairs', multiplier: 0.85 },
  { id: 'beauty', name: 'Beauty / Salon', multiplier: 0.8 },
  { id: 'realestate', name: 'Real Estate', multiplier: 1.1 },
  { id: 'other', name: 'Other', multiplier: 1.0 },
]

const servicesList = [
  { id: 'website', name: 'Website Creation', price: 350, description: '3 pages, custom design, mobile friendly' },
  { id: 'audit', name: 'Website Audit', price: 150, description: 'Speed test, SEO, security, PDF report' },
  { id: 'google', name: 'Google Business Profile', price: 100, description: 'Verification, optimization, photos' },
  { id: 'facebook', name: 'Facebook Business Page', price: 100, description: 'Page setup, CTA, Instagram connect' },
  { id: 'analytics', name: 'Google Analytics Setup', price: 80, description: 'GA4 config, goals, tracking' },
  { id: 'seo', name: 'SEO Optimization', price: 120, description: 'Keywords, meta tags, alt text' },
]

const extraOptions = [
  { id: 'blog', name: 'Blog Integration', price: 100, description: 'Blog with 5 pre-written articles' },
  { id: 'gallery', name: 'Photo Gallery', price: 60, description: 'Unlimited photo gallery' },
  { id: 'chat', name: 'Live Chat', price: 80, description: 'Chat integrated with WhatsApp' },
  { id: 'booking', name: 'Online Booking', price: 120, description: 'Online booking system' },
  { id: 'multilang', name: 'Multi-language', price: 150, description: 'Website in 2 languages' },
  { id: 'maintenance', name: 'Monthly Maintenance', price: 50, description: 'Monthly support + updates' },
]

export default function SimpleConfigurator() {
  const [selectedBusiness, setSelectedBusiness] = useState('restaurant')
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [selectedExtras, setSelectedExtras] = useState<string[]>([])
  const [customerName, setCustomerName] = useState('')
  const [customerEmail, setCustomerEmail] = useState('')
  const [customerPhone, setCustomerPhone] = useState('')
  const [gdprAccepted, setGdprAccepted] = useState(false)
  const [showForm, setShowForm] = useState(false)
  
  const formRef = useRef<HTMLDivElement>(null)

  const business = businessTypes.find(b => b.id === selectedBusiness) || businessTypes[0]
  const multiplier = business.multiplier

  const toggleService = (serviceId: string) => {
    setSelectedServices(prev =>
      prev.includes(serviceId) ? prev.filter(id => id !== serviceId) : [...prev, serviceId]
    )
  }

  const toggleExtra = (extraId: string) => {
    setSelectedExtras(prev =>
      prev.includes(extraId) ? prev.filter(id => id !== extraId) : [...prev, extraId]
    )
  }

  const calculateServicesTotal = () => {
    return selectedServices.reduce((sum, serviceId) => {
      const service = servicesList.find(s => s.id === serviceId)
      const priceWithMultiplier = service ? Math.round(service.price * multiplier) : 0
      return sum + priceWithMultiplier
    }, 0)
  }

  const calculateExtrasTotal = () => {
    return selectedExtras.reduce((sum, extraId) => {
      const extra = extraOptions.find(e => e.id === extraId)
      return sum + (extra ? extra.price : 0)
    }, 0)
  }

  const totalBeforeDiscount = calculateServicesTotal() + calculateExtrasTotal()
  const discountedTotal = Math.round(totalBeforeDiscount * 0.5)
  const savings = totalBeforeDiscount - discountedTotal

  const handleContinueToForm = () => {
    setShowForm(true)
    setTimeout(() => {
      if (formRef.current) {
        formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 100)
  }

  const handleSendWhatsApp = () => {
    const selectedServicesList = selectedServices.map(id => {
      const service = servicesList.find(s => s.id === id)
      const priceWithMultiplier = service ? Math.round(service.price * multiplier) : 0
      const discountedPrice = Math.round(priceWithMultiplier * 0.5)
      return `  - ${service?.name}: ${discountedPrice} GBP (was ${priceWithMultiplier} GBP)`
    }).join('\n')

    const selectedExtrasList = selectedExtras.map(id => {
      const extra = extraOptions.find(e => e.id === id)
      return `  - ${extra?.name}: ${extra?.price} GBP`
    }).join('\n')

    const message = `NEWBOTIC ORDER SUMMARY

Customer Details:
Name: ${customerName || 'Not provided'}
Email: ${customerEmail || 'Not provided'}
Phone: ${customerPhone || 'Not provided'}

Business Type: ${business.name}

Selected Services (50% OFF):
${selectedServicesList || '  - None selected'}

Extra Options:
${selectedExtrasList || '  - None selected'}

Total before discount: ${totalBeforeDiscount} GBP
50% DISCOUNT: -${savings} GBP
FINAL TOTAL: ${discountedTotal} GBP

GDPR Consent: Yes, I agree to the privacy policy.

Next Steps:
1. We will contact you within 24h
2. 50% deposit to start work
3. Delivery in 7 days
4. 30 days free support

From Newbotic - Digital Presence for Local Businesses`

    const whatsappUrl = `https://wa.me/447891897558?text=${encodeURIComponent(message)}`
    
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      window.location.href = whatsappUrl
    } else {
      window.open(whatsappUrl, '_blank')
    }
  }

  const isFormValid = customerName && customerEmail && gdprAccepted

  if (!showForm) {
    return (
      <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
        <h3 className="text-xl font-bold text-white mb-4">Step 1: Your business type</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
          {businessTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setSelectedBusiness(type.id)}
              className={`p-3 rounded-lg text-left transition-all border ${
                selectedBusiness === type.id
                  ? 'bg-blue-600 border-blue-500'
                  : 'bg-slate-800 border-slate-700 hover:bg-slate-700'
              }`}
            >
              <div className="font-semibold text-white">{type.name}</div>
            </button>
          ))}
        </div>

        <h3 className="text-xl font-bold text-white mb-4">Step 2: Select your services</h3>
        
        <div className="space-y-3 mb-8">
          {servicesList.map((service) => {
            const priceWithMultiplier = Math.round(service.price * multiplier)
            const discountedPrice = Math.round(priceWithMultiplier * 0.5)
            return (
              <label
                key={service.id}
                className={`flex items-start p-3 rounded-lg cursor-pointer transition-all border ${
                  selectedServices.includes(service.id)
                    ? 'bg-blue-600/20 border-blue-500'
                    : 'bg-slate-800/50 border-slate-700 hover:border-slate-500'
                }`}
              >
                <input
                  type="checkbox"
                  checked={selectedServices.includes(service.id)}
                  onChange={() => toggleService(service.id)}
                  className="mt-1 mr-3 w-5 h-5 accent-blue-600"
                />
                <div className="flex-1">
                  <div className="font-semibold text-white">{service.name}</div>
                  <div className="text-gray-400 text-sm">{service.description}</div>
                </div>
                <div className="text-right">
                  <div className="text-blue-400 font-bold">{discountedPrice} GBP</div>
                  <div className="text-xs text-gray-500 line-through">{priceWithMultiplier} GBP</div>
                </div>
              </label>
            )
          })}
        </div>

        <h3 className="text-xl font-bold text-white mb-4">Step 3: Extra options (optional)</h3>
        
        <div className="space-y-3 mb-8">
          {extraOptions.map((extra) => (
            <label
              key={extra.id}
              className={`flex items-start p-3 rounded-lg cursor-pointer transition-all border ${
                selectedExtras.includes(extra.id)
                  ? 'bg-blue-600/20 border-blue-500'
                  : 'bg-slate-800/50 border-slate-700 hover:border-slate-500'
              }`}
            >
              <input
                type="checkbox"
                checked={selectedExtras.includes(extra.id)}
                onChange={() => toggleExtra(extra.id)}
                className="mt-1 mr-3 w-5 h-5 accent-blue-600"
              />
              <div className="flex-1">
                <div className="font-semibold text-white">{extra.name}</div>
                <div className="text-gray-400 text-sm">{extra.description}</div>
              </div>
              <div className="text-right">
                <div className="text-purple-400 font-bold">{extra.price} GBP</div>
              </div>
            </label>
          ))}
        </div>

        {selectedServices.length > 0 && (
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg p-4 mb-6">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Services total:</span>
                <span>{calculateServicesTotal()} GBP</span>
              </div>
              {selectedExtras.length > 0 && (
                <div className="flex justify-between">
                  <span>Extras total:</span>
                  <span>{calculateExtrasTotal()} GBP</span>
                </div>
              )}
              <div className="flex justify-between pt-2 border-t border-white/20">
                <span>Total before discount:</span>
                <span className="line-through">{totalBeforeDiscount} GBP</span>
              </div>
              <div className="flex justify-between text-green-400">
                <span>50% OFF:</span>
                <span>-{savings} GBP</span>
              </div>
              <div className="flex justify-between text-xl font-bold pt-2 border-t border-white/20">
                <span>Final Total:</span>
                <span className="text-blue-400">{discountedTotal} GBP</span>
              </div>
            </div>
          </div>
        )}

        <button
          onClick={handleContinueToForm}
          disabled={selectedServices.length === 0}
          className={`w-full py-3 rounded-lg font-semibold transition ${
            selectedServices.length === 0
              ? 'bg-slate-700 cursor-not-allowed'
              : 'bg-green-600 hover:bg-green-700'
          }`}
        >
          Continue to Contact Details →
        </button>
      </div>
    )
  }

  return (
    <div ref={formRef} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
      <h3 className="text-xl font-bold text-white mb-4">Step 4: Your contact details</h3>
      
      <div className="space-y-4 mb-6">
        <input
          type="text"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          placeholder="Your full name *"
          className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
        />
        <input
          type="email"
          value={customerEmail}
          onChange={(e) => setCustomerEmail(e.target.value)}
          placeholder="Your email address *"
          className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
        />
        <input
          type="tel"
          value={customerPhone}
          onChange={(e) => setCustomerPhone(e.target.value)}
          placeholder="Your phone number (optional)"
          className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* GDPR Checkbox */}
      <div className="mb-6">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={gdprAccepted}
            onChange={(e) => setGdprAccepted(e.target.checked)}
            className="mt-1 w-5 h-5 accent-blue-600"
          />
          <div className="text-sm text-gray-300">
            I agree to the processing of my personal data in accordance with the{' '}
            <a 
              href="/privacy-policy" 
              target="_blank" 
              className="text-blue-400 hover:text-blue-300 underline"
            >
              GDPR Privacy Policy
            </a>
            . Your data will only be used to contact you about your inquiry.
          </div>
        </label>
      </div>

      <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg p-4 mb-6">
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Services selected:</span>
            <span>{selectedServices.length}</span>
          </div>
          <div className="flex justify-between">
            <span>Extras selected:</span>
            <span>{selectedExtras.length}</span>
          </div>
          <div className="flex justify-between text-xl font-bold pt-2 border-t border-white/20">
            <span>Final Total:</span>
            <span className="text-blue-400">{discountedTotal} GBP</span>
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={() => setShowForm(false)}
          className="flex-1 bg-slate-700 hover:bg-slate-600 py-3 rounded-lg font-semibold transition"
        >
          Back
        </button>
        <button
          onClick={handleSendWhatsApp}
          disabled={!isFormValid}
          className={`flex-1 py-3 rounded-lg font-semibold transition ${
            !isFormValid
              ? 'bg-slate-700 cursor-not-allowed'
              : 'bg-green-600 hover:bg-green-700'
          }`}
        >
          Send to WhatsApp →
        </button>
      </div>
    </div>
  )
}
