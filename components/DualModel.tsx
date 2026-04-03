'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const models = [
  {
    image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Broiler chickens in a poultry farm',
    title: 'Broiler Production',
    badge: '6–8 Week Cycle',
    badgeBg: 'bg-poulber-navy text-white',
    description:
      'Fast cash-flow cycles built for rapid returns. Each batch runs 6–8 weeks from day-old chick to market-ready bird, enabling multiple income events per year.',
    highlights: [
      'Rapid capital turnover',
      'High market demand year-round',
      'Multiple cycles per facility annually',
      'Clear per-bird profitability metrics',
    ],
    borderColor: 'border-poulber-navy',
    dotColor: 'bg-poulber-navy',
  },
  {
    image: 'https://images.unsplash.com/photo-1518569656558-1f25e69d93d7?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Layer hens producing eggs on a farm',
    title: 'Layer Production',
    badge: 'Daily Eggs',
    badgeBg: 'bg-poulber-green text-white',
    description:
      'Steady, predictable income through daily egg production. Layers provide financial stability and consistent cash flow over an 18–24 month productive lifespan.',
    highlights: [
      'Daily revenue generation',
      'Predictable cash flow planning',
      'Lower mortality risk profile',
      'Premium egg market access',
    ],
    borderColor: 'border-poulber-green',
    dotColor: 'bg-poulber-green',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
}

export default function DualModel() {
  return (
    <section
      id="dual-model"
      className="bg-poulber-offwhite py-20 lg:py-28"
      aria-label="Dual production model"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="text-poulber-green text-sm font-bold uppercase tracking-widest mb-3">
            Production Model
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-poulber-navy leading-tight">
            Two Revenue Tracks.{' '}
            <span className="text-poulber-green">One Ecosystem.</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {models.map((model) => (
            <motion.article
              key={model.title}
              variants={cardVariants}
              whileHover={{
                y: -4,
                boxShadow: '0 20px 40px -8px rgba(9,32,69,0.14)',
              }}
              className={`bg-white rounded-2xl border-t-4 ${model.borderColor} overflow-hidden transition-all duration-300`}
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={model.image}
                  alt={model.imageAlt}
                  fill
                  className="object-cover object-center transition-transform duration-500 hover:scale-105"
                />
                {/* Badge over image */}
                <span
                  className={`absolute top-3 right-3 text-xs font-bold px-3 py-1 rounded-full ${model.badgeBg}`}
                >
                  {model.badge}
                </span>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-xl font-bold text-poulber-navy mb-3">
                  {model.title}
                </h3>
                <p className="text-poulber-muted text-sm leading-relaxed mb-6">
                  {model.description}
                </p>
                <ul className="space-y-2.5">
                  {model.highlights.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-poulber-navy font-medium">
                      <span className={`w-1.5 h-1.5 rounded-full ${model.dotColor} flex-shrink-0`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
