'use client'

import { motion } from 'framer-motion'

const values = [
  'Efficiency',
  'Accountability',
  'Access',
  'Resilience',
  'Sustainability',
]

export default function Story() {
  return (
    <section
      id="story"
      className="bg-poulber-green py-24 lg:py-32 overflow-hidden relative"
      aria-label="Our story and values"
    >
      {/* Decorative leaf shape top-right */}
      <div
        className="absolute top-0 right-0 w-64 h-64 opacity-10"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse at top right, #ffffff 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-48 h-48 opacity-10"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse at bottom left, #051565 0%, transparent 70%)',
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-white/70 text-sm font-bold uppercase tracking-widest mb-8"
        >
          Our Purpose
        </motion.p>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold italic text-white leading-relaxed mb-12"
          cite="Poulber"
        >
          &ldquo;A country with unused poultry infrastructure and unemployed
          youth, yet a growing protein shortage. Poulber engineers the
          bridge.&rdquo;
        </motion.blockquote>

        {/* Value pills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3"
          aria-label="Core values"
        >
          {values.map((value, i) => (
            <motion.span
              key={value}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
              className="px-5 py-2 rounded-full border-2 border-white/60 text-white text-sm font-semibold hover:bg-white/10 transition-colors duration-200 cursor-default"
            >
              {value}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
