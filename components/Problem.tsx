'use client'

import { motion } from 'framer-motion'

const problems = [
  {
    title: 'Idle Infrastructure',
    description:
      'Thousands of poultry facilities across Nigeria sit abandoned — under-utilised assets that represent billions of naira in wasted capital, decaying while the nation imports protein.',
  },
  {
    title: 'Youth Exclusion',
    description:
      'Ambitious young Nigerians want to farm but lack collateral, capital, and connections. Traditional agri-finance ignores them, leaving talent on the sideline.',
  },
  {
    title: 'Protein Deficit',
    description:
      'Nigeria consumes 1.5 million metric tonnes of poultry products annually while producing a fraction domestically. The supply gap widens each year, driving up prices.',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export default function Problem() {
  return (
    <section
      id="problem"
      className="bg-white py-20 lg:py-28"
      aria-label="Problem statement"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-poulber-green text-sm font-bold uppercase tracking-widest mb-3">
            The Problem
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-poulber-navy leading-tight max-w-2xl">
            Nigeria&apos;s poultry sector is broken at{' '}
            <span className="text-poulber-green">three points.</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {problems.map((problem) => (
            <motion.article
              key={problem.title}
              variants={cardVariants}
              className="border-l-4 border-poulber-green bg-poulber-offwhite rounded-r-xl p-7 hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold text-poulber-navy mb-3">
                {problem.title}
              </h3>
              <p className="text-poulber-muted text-sm leading-relaxed">
                {problem.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
