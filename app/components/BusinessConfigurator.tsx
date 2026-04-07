'use client'

import { useState } from 'react'

const businessTypes = [
  { id: 'restaurant', name: 'Restaurant / Cafe', multiplier: 1.0 },
  { id: 'retail', name: 'Retail / Shop', multiplier: 0.9 },
  { id: 'service', name: 'Service / Repairs', multiplier: 0.85 },
  { id: 'beauty', name: 'Beauty / Salon', multiplier: 0.8 },
  { id: 'realestate', name: 'Real Estate', multiplier: 1.1 },
  { id: 'other', name: 'Other', multiplier: 1.0 },
]

export default function BusinessConfigurator() {
  const [selectedBusiness, setSelectedBusiness] = useState('restaurant')
  const [step, setStep] = useState(1)

  const business = businessTypes.find(b => b.id === selectedBusiness) || businessTypes[0]

  return (
    <div className="max-w-3xl mx-auto bg-slate-800/50 rounded-xl p-6 border border-slate-700">
      <div className="flex justify-between mb-6">
        {[1, 2, 3, 4].map((s) => (
          <div key={s} className={`flex-1 h-1 rounded-full mx-1 ${step >= s ? 'bg-blue-600' : 'bg-slate-700'}`} />
        ))}
      </div>

      {step === 1 && (
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Step 1: What is your business?</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
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
          <div className="flex justify-end">
            <button onClick={() => setStep(2)} className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-semibold">
              Next
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Step 2: Select services</h3>
          <p className="text-gray-400 mb-4">Coming soon - services selection</p>
          <div className="flex justify-between">
            <button onClick={() => setStep(1)} className="bg-slate-700 hover:bg-slate-600 px-6 py-2 rounded-lg font-semibold">
              Back
            </button>
            <button onClick={() => setStep(3)} className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-semibold">
              Next
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Step 3: Extra options</h3>
          <p className="text-gray-400 mb-4">Coming soon - extra options</p>
          <div className="flex justify-between">
            <button onClick={() => setStep(2)} className="bg-slate-700 hover:bg-slate-600 px-6 py-2 rounded-lg font-semibold">
              Back
            </button>
            <button onClick={() => setStep(4)} className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-semibold">
              Next
            </button>
          </div>
        </div>
      )}

      {step === 4 && (
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Step 4: Your details</h3>
          <p className="text-gray-400 mb-4">Coming soon - customer details</p>
          <div className="flex justify-between">
            <button onClick={() => setStep(3)} className="bg-slate-700 hover:bg-slate-600 px-6 py-2 rounded-lg font-semibold">
              Back
            </button>
            <button className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-lg font-semibold">
              Send to WhatsApp
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
