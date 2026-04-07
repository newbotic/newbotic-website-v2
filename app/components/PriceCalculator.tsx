'use client'

import { useState } from 'react'

interface Service {
  id: string
  name: string
  description: string
  price: number
  popular?: boolean
}

const services: Service[] = [
  {
    id: 'audit',
    name: 'Website Audit',
    description: 'Speed test, security check, SEO analysis, PDF report',
    price: 150,
  },
  {
    id: 'website',
    name: 'Web Page Creation',
    description: 'Custom design, mobile friendly, contact form, Google Analytics',
    price: 350,
  },
  {
    id: 'combo',
    name: 'Combo Package',
    description: 'Audit + Website + 30 days support',
    price: 500,
    popular: true,
  },
  {
    id: 'google',
    name: 'Google Business Setup',
    description: 'Profile verification, optimization, photos, categories',
    price: 100,
  },
  {
    id: 'facebook',
    name: 'Facebook Business Setup',
    description: 'Page setup, CTA button, Instagram connection',
    price: 100,
  },
]

export default function PriceCalculator() {
  const [selectedService, setSelectedService] = useState<string>('combo')

  const selected = services.find(s => s.id === selectedService)
  const discountedPrice = selected ? Math.round(selected.price * 0.5) : 0
  const originalPrice = selected?.price || 0
  const savings = originalPrice - discountedPrice

  const handleBookCall = () => {
    const message = `Hi! I'm interested in the ${selected?.name} (50% OFF - ${discountedPrice} GBP). Can we schedule a call?`
    window.open(`https://wa.me/447891897558?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <div className="max-w-2xl mx-auto bg-slate-800/50 rounded-xl p-6 border border-slate-700">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">What do you need?</h3>
        <p className="text-gray-400">Select a service to see your price</p>
        <div className="inline-block bg-red-600/80 text-white px-3 py-1 rounded-full text-xs font-bold mt-2">
          50% OFF Limited Time
        </div>
      </div>

      <div className="space-y-3 mb-6">
        {services.map((service) => (
          <label
            key={service.id}
            className={`flex items-start p-4 rounded-lg cursor-pointer transition-all border ${
              selectedService === service.id
                ? 'bg-blue-600/20 border-blue-500'
                : 'bg-slate-800/50 border-slate-700 hover:border-slate-500'
            }`}
          >
            <input
              type="radio"
              name="service"
              value={service.id}
              checked={selectedService === service.id}
              onChange={(e) => setSelectedService(e.target.value)}
              className="mt-1 mr-4 w-5 h-5 accent-blue-600"
            />
            <div className="flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-bold text-white text-lg">{service.name}</span>
                {service.popular && (
                  <span className="bg-green-600 text-white text-xs px-2 py-0.5 rounded-full">
                    Best Deal
                  </span>
                )}
              </div>
              <p className="text-gray-400 text-sm mt-1">{service.description}</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-400">{discountedPrice} GBP</div>
              {originalPrice !== discountedPrice && (
                <div className="text-sm text-gray-500 line-through">{originalPrice} GBP</div>
              )}
            </div>
          </label>
        ))}
      </div>

      <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg p-4 mb-6">
        <div className="flex justify-between items-center flex-wrap gap-2">
          <div>
            <p className="text-gray-300 text-sm">Total with 50% OFF</p>
            <p className="text-3xl font-bold text-white">{discountedPrice} GBP</p>
          </div>
          <div className="text-right">
            <p className="text-gray-400 text-sm line-through">Regular: {originalPrice} GBP</p>
            <p className="text-green-400 text-sm">You save {savings} GBP!</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href="https://calendly.com/hello-newbotic/30min"
          target="_blank"
          className="flex-1 bg-green-600 hover:bg-green-700 py-3 rounded-lg font-semibold text-center transition"
        >
          Schedule Free Call
        </a>
        <button
          onClick={handleBookCall}
          className="flex-1 bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold transition"
        >
          Book on WhatsApp
        </button>
      </div>
    </div>
  )
}
