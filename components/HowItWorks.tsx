'use client'

import { motion } from 'framer-motion'
import { Building2, Users, Cpu } from 'lucide-react'

interface Layer {
  icon: React.ReactNode
  title: string
  subtitle: string
  bullets: string[]
}

const layers: Layer[] = [
  {
    icon: <Building2 size={28} strokeWidth={1.8} />,
    title: 'Asset Layer',
    subtitle: 'Rehabilitated Infrastructure',
    bullets: [
      'Idle poultry facilities sourced from owners',
      'Structural & biosecurity upgrades',
      'Equipment & utilities restored',
      'Insurance coverage arranged',
      'Facility readiness certification',
    ],
  },
  {
    icon: <Users size={28} strokeWidth={1.8} />,
    title: 'Talent Layer',
    subtitle: 'Vetted & Trained Farmers',
    bullets: [
      'Rigorous farmer screening process',
      'On-boarding training programme',
      'Ongoing mentorship & support',
      'Performance-linked profit share',
      'Career progression pathway',
    ],
  },
  {
    icon: <Cpu size={28} strokeWidth={1.8} />,
    title: 'Technology Layer',
    subtitle: 'Data-Driven Operations',
    bullets: [
      'Real-time farm monitoring dashboard',
      'Automated input delivery tracking',
      'Financial reporting & transparency',
      'Mortality & productivity analytics',
      'Marketplace & off-take connections',
    ],
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: 'easeOut' },
  },
}

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-poulber-offwhite py-20 lg:py-28"
      aria-label="How Poulber works"
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
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-poulber-navy leading-tight">
            One Platform.{' '}
            <span className="text-poulber-green">Three Layers.</span>
          </h2>
        </motion.div>

        {/* Layer cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {layers.map((layer) => (
            <motion.article
              key={layer.title}
              variants={cardVariants}
              whileHover={{
                y: -4,
                boxShadow:
                  '0 20px 40px -8px rgba(5,21,101,0.12), 0 4px 16px -4px rgba(5,21,101,0.08)',
              }}
              className="bg-white rounded-2xl p-8 border border-gray-100 transition-all duration-300 cursor-default"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-poulber-green/10 text-poulber-green mb-5">
                {layer.icon}
              </div>
              <h3 className="text-xl font-bold text-poulber-navy mb-1">
                {layer.title}
              </h3>
              <p className="text-poulber-green text-xs font-semibold uppercase tracking-wider mb-5">
                {layer.subtitle}
              </p>
              <ul className="space-y-2.5">
                {layer.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-2 text-sm text-poulber-muted leading-relaxed"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-poulber-green flex-shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
