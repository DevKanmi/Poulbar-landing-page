'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const provisions = [
  'Day-old chicks — sourced from certified hatcheries',
  'Premium feed — delivered on schedule throughout the cycle',
  'Veterinary support — proactive health management',
  'Tools & equipment — everything needed to operate',
  'Insurance coverage — protecting your cycle investment',
]

export default function ZeroCapex() {
  return (
    <section
      id="zero-capex"
      className="bg-white overflow-hidden"
      aria-label="Zero capital expenditure model"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[560px]">

          {/* Left — image with navy overlay + text */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
            className="relative flex flex-col justify-end px-8 sm:px-12 lg:px-16 py-16 lg:py-20 overflow-hidden min-h-[420px] lg:min-h-0"
          >
            {/* Background image */}
            <Image
              src="/zero_capex_img.jpg"
              alt="Chickens inside a poultry facility"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-poulber-navy/75" aria-hidden="true" />

            {/* Text over image */}
            <div className="relative z-10">
              <p className="text-poulber-green text-xs font-bold uppercase tracking-widest mb-4">
                Zero Capital Model
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                Farmers start with{' '}
                <span className="text-poulber-green">₦0</span> in capital
                investment.
              </h2>
              <p className="text-white/60 mt-5 text-base leading-relaxed max-w-sm">
                We remove every financial barrier between youth and productive
                farming. You bring the work ethic — we bring everything else.
              </p>
            </div>
          </motion.div>

          {/* Right — checklist */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
            className="flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-16 lg:py-24 bg-poulber-offwhite"
          >
            <p className="text-poulber-navy text-sm font-bold uppercase tracking-widest mb-8">
              What Poulber Provides
            </p>
            <ul className="space-y-5">
              {provisions.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: 'easeOut' }}
                  className="flex items-start gap-3.5"
                >
                  <CheckCircle2
                    size={22}
                    className="text-poulber-green flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-poulber-navy font-medium text-sm sm:text-base leading-snug">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
