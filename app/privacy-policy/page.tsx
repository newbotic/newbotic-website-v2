import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white pt-24 md:pt-28">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-gray-400 mb-8">Last updated: April 2026</p>

          <div className="space-y-6 text-gray-300">
            <section>
              <h2 className="text-2xl font-bold text-white mb-3">1. Information We Collect</h2>
              <p>When you use our configurator or contact form, we may collect:</p>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                <li>Your name and email address</li>
                <li>Your phone number (optional)</li>
                <li>Your business type and service preferences</li>
                <li>Any other information you voluntarily provide</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">2. How We Use Your Information</h2>
              <p>We use your information to:</p>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                <li>Respond to your inquiries and provide quotes</li>
                <li>Communicate with you about our services</li>
                <li>Improve our website and services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">3. Data Sharing</h2>
              <p>We do not sell or share your personal data with third parties, except:</p>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                <li>When required by law</li>
                <li>With your explicit consent</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">4. Data Security</h2>
              <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, loss, or alteration.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">5. Your Rights</h2>
              <p>Under GDPR, you have the right to:</p>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                <li>Access your personal data</li>
                <li>Rectify inaccurate data</li>
                <li>Request erasure of your data</li>
                <li>Restrict or object to processing</li>
                <li>Data portability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">6. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at:</p>
              <p className="mt-2">
                Email: <a href="mailto:hello@newbotic.co.uk" className="text-blue-400 hover:underline">hello@newbotic.co.uk</a><br />
                Phone: <a href="tel:+4407891897558" className="text-blue-400 hover:underline">+44 0789 189 7558</a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
