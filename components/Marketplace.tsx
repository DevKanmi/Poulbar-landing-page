'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const farmerBenefits = [
  'Zero capital required to start farming',
  'Access to fully equipped, ready-to-use facilities',
  'Day-old chicks, feed & vet care provided',
  'Full insurance coverage on every cycle',
  'Profit share: 70% to you on every harvest',
  'Training, mentorship & ongoing support',
  'Built-in off-take market connections',
]

const ownerBenefits = [
  'Convert idle assets into passive income streams',
  'No operational burden — Poulber manages everything',
  'Guaranteed facility maintenance & upkeep',
  'Insurance coverage on your infrastructure',
  'Transparent financial reporting & dashboards',
  'Vetted, trained farmers operate your facility',
  'Flexible partnership structures available',
]

export default function Marketplace() {
  return (
    <section
      id="marketplace"
      className="bg-white py-20 lg:py-28"
      aria-label="Marketplace for farmers and facility owners"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-poulber-green text-sm font-bold uppercase tracking-widest mb-3">
            Join the Platform
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-poulber-navy leading-tight">
            Find Your Place in{' '}
            <span className="text-poulber-green">the Ecosystem</span>
          </h2>
        </motion.div>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Farmers column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="rounded-3xl overflow-hidden border border-gray-100 shadow-sm flex flex-col"
          >
            {/* Image */}
            <div className="relative h-56">
              <Image
                src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=800&q=80&auto=format&fit=crop"
                alt="Young farmer in a poultry facility"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-poulber-green/40" aria-hidden="true" />
              <div className="absolute bottom-4 left-6">
                <span className="text-white text-2xl font-extrabold drop-shadow">For Farmers</span>
              </div>
            </div>

            {/* Content */}
            <div className="bg-poulber-offwhite p-8 flex flex-col flex-1">
              <p className="text-poulber-muted text-sm leading-relaxed mb-7">
                No land. No capital. No problem. Poulber gives you everything
                you need to start earning from poultry farming today.
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {farmerBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2.5 text-sm text-poulber-navy">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-poulber-green flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-flex justify-center items-center px-6 py-3 rounded-full bg-poulber-green text-white font-bold text-sm hover:bg-green-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-poulber-green focus:ring-offset-2"
                aria-label="Apply to join Poulber as a farmer"
              >
                Join as a Farmer
              </a>
            </div>
          </motion.div>

          {/* Facility Owners column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="rounded-3xl overflow-hidden border border-gray-100 shadow-sm flex flex-col"
          >
            {/* Image */}
            <div className="relative h-56">
              <Image
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80&auto=format&fit=crop"
                alt="Poultry farm facility building"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-poulber-navy/50" aria-hidden="true" />
              <div className="absolute bottom-4 left-6">
                <span className="text-white text-2xl font-extrabold drop-shadow">For Facility Owners</span>
              </div>
            </div>

            {/* Content */}
            <div className="bg-white p-8 flex flex-col flex-1">
              <p className="text-poulber-muted text-sm leading-relaxed mb-7">
                Your idle poultry facility is a sleeping asset. Let Poulber
                activate it — we handle operations, you collect returns.
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {ownerBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2.5 text-sm text-poulber-navy">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-poulber-navy flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-flex justify-center items-center px-6 py-3 rounded-full border-2 border-poulber-navy text-poulber-navy font-bold text-sm hover:bg-poulber-navy hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-poulber-navy focus:ring-offset-2"
                aria-label="List your farm facility with Poulber"
              >
                List Your Farm
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
