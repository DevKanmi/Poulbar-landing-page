'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function NYSCApply() {
  return (
    <section
      id="apply"
      className="bg-poulber-navy py-20 lg:py-28"
      aria-label="NYSC Poultry Accelerator Program application"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-poulber-green/40 text-poulber-green text-xs font-semibold tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-poulber-green inline-block" />
            Ogun State Pilot — Limited Spots
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
            NYSC Poultry{' '}
            <span className="text-poulber-green">Accelerator Program</span>
          </h2>

          <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8">
            A highly selective 6-week intensive training and deployment
            initiative designed to transform committed NYSC members into earning
            poultry entrepreneurs. This program requires discipline, consistency,
            and a strong willingness to learn and execute.
          </p>

          <p className="text-white/50 text-sm mb-10">
            Please answer all questions honestly and thoughtfully in the application form.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center"
        >
          <a
            href="https://forms.gle/Yb7CjK4xCHJe1AnK9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-poulber-green text-white font-bold text-base hover:bg-green-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-poulber-green focus:ring-offset-2 focus:ring-offset-poulber-navy shadow-lg hover:shadow-xl"
            aria-label="Apply to NYSC Poultry Accelerator Program"
          >
            Apply Now
            <ArrowRight size={20} />
          </a>
        </motion.div>

        {/* Footnote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-white/30 text-xs mt-8"
        >
          Applications are reviewed on a rolling basis. Only shortlisted
          candidates will be contacted.
        </motion.p>
      </div>
    </section>
  )
}

