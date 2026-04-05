'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

const steps = [
  {
    step: '1',
    label: 'Money Comes In',
    description: 'Your birds are sold at market. The full sale amount lands in the Poulber platform.',
    color: 'bg-gray-100',
    textColor: 'text-poulber-navy',
    borderColor: 'border-gray-200',
    tag: 'Total Revenue',
    tagColor: 'bg-gray-200 text-gray-700',
  },
  {
    step: '2',
    label: 'Investment Is Recovered',
    description: 'The cost of what Poulber put in — chicks, feed, vet care, tools — is paid back first.',
    color: 'bg-blue-50',
    textColor: 'text-poulber-navy',
    borderColor: 'border-blue-100',
    tag: 'Principal Recovery',
    tagColor: 'bg-blue-100 text-blue-700',
  },
  {
    step: '3',
    label: 'Poulber Platform Fees',
    description: 'Poulber\'s platform management fee is settled.',
    color: 'bg-blue-50',
    textColor: 'text-poulber-navy',
    borderColor: 'border-blue-100',
    tag: 'Platform Fee',
    tagColor: 'bg-blue-100 text-blue-700',
  },
  {
    step: '4',
    label: 'Insurance Is Covered',
    description: 'Your cycle insurance premium is deducted — the policy that protected your birds from day one.',
    color: 'bg-blue-50',
    textColor: 'text-poulber-navy',
    borderColor: 'border-blue-100',
    tag: 'Insurance Premium',
    tagColor: 'bg-blue-100 text-blue-700',
  },
  {
    step: '5',
    label: 'You Get Paid — 70% of Profit',
    description: 'Whatever is left after all the above is pure profit. You keep 70%. Poulber keeps 30%. Simple.',
    color: 'bg-poulber-green',
    textColor: 'text-white',
    borderColor: 'border-poulber-green',
    tag: 'Your Earnings',
    tagColor: 'bg-white/20 text-white',
    highlight: true,
  },
]

export default function Waterfall() {
  return (
    <section
      id="waterfall"
      className="bg-white py-20 lg:py-28"
      aria-label="Revenue waterfall structure"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-center"
        >
          <p className="text-poulber-green text-sm font-bold uppercase tracking-widest mb-3">
            Financial Transparency
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-poulber-navy leading-tight">
            Where Does the Money Go?
          </h2>
          <p className="mt-4 text-poulber-muted text-base max-w-xl mx-auto leading-relaxed">
            When your birds are sold, here is exactly what happens to the money —
            step by step, in plain terms.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="mt-12 flex flex-col items-center gap-0">
          {steps.map((step, i) => (
            <div key={step.label} className="w-full flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.12, duration: 0.55, ease: 'easeOut' }}
                className={`w-full rounded-2xl border ${step.borderColor} ${step.color} px-6 py-5 flex items-start gap-5 ${step.highlight ? 'shadow-lg' : ''}`}
              >
                {/* Step number */}
                <span
                  className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-sm font-extrabold ${
                    step.highlight
                      ? 'bg-white text-poulber-green'
                      : 'bg-poulber-navy text-white'
                  }`}
                >
                  {step.step}
                </span>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className={`text-base font-bold ${step.textColor}`}>
                      {step.label}
                    </h3>
                    <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${step.tagColor}`}>
                      {step.tag}
                    </span>
                  </div>
                  <p className={`text-sm leading-relaxed ${step.highlight ? 'text-white/85' : 'text-poulber-muted'}`}>
                    {step.description}
                  </p>
                </div>
              </motion.div>

              {/* Arrow between steps */}
              {i < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 + 0.1 }}
                  className="my-1 text-gray-300"
                  aria-hidden="true"
                >
                  <ArrowDown size={20} strokeWidth={2} />
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Summary callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-8 bg-poulber-offwhite rounded-2xl p-6 text-center border border-gray-100"
        >
          <p className="text-poulber-navy font-bold text-base">
            Bottom line: You only share profit <span className="text-poulber-green">after</span> all costs are covered.
          </p>
          <p className="text-poulber-muted text-sm mt-1">
            No hidden deductions. No surprises. Every naira is accounted for on your dashboard.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
