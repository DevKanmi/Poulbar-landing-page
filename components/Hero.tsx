'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

const stats = [
  { value: '10–25', label: 'Facilities' },
  { value: '100–300', label: 'Farmers' },
  { value: '<5%', label: 'Mortality Target' },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden flex items-center"
      aria-label="Hero section"
    >
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1800&q=80&auto=format&fit=crop"
        alt=""
        fill
        priority
        className="object-cover object-center"
        aria-hidden="true"
      />

      {/* Navy overlay */}
      <div
        className="absolute inset-0 bg-poulber-navy/80"
        aria-hidden="true"
      />

      {/* Green diagonal accent */}
      <div
        className="absolute top-0 right-0 w-[40%] h-[55%] opacity-20"
        aria-hidden="true"
        style={{
          background: 'linear-gradient(135deg, #13B639 0%, transparent 65%)',
          clipPath: 'polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-poulber-green/40 text-poulber-green text-xs font-semibold tracking-widest uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-poulber-green inline-block" />
              Nigerian AgriFinTech Platform
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6"
          >
            Turning Idle Farms Into{' '}
            <span className="text-poulber-green">Living Economies</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-white/70 leading-relaxed mb-10 max-w-2xl"
          >
            Poulber provides zero-capital access to rehabilitated poultry
            facilities, connecting ambitious farmers with idle infrastructure —
            backed by insurance, data, and expertise.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-14">
            <a
              href="#marketplace"
              className="inline-flex items-center px-7 py-3.5 rounded-full bg-poulber-green text-white font-bold text-base hover:bg-green-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-poulber-green focus:ring-offset-2 focus:ring-offset-poulber-navy"
              aria-label="Join as a farmer"
            >
              Join as a Farmer
            </a>
            <a
              href="#marketplace"
              className="inline-flex items-center px-7 py-3.5 rounded-full border-2 border-white text-white font-bold text-base hover:bg-white hover:text-poulber-navy transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-poulber-navy"
              aria-label="List your farm facility"
            >
              List Your Farm
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-8 border-t border-white/10 pt-8"
          >
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col gap-0.5">
                <span className="text-2xl font-extrabold text-white">{stat.value}</span>
                <span className="text-xs font-semibold text-white/50 uppercase tracking-widest">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
