'use client'

import { motion } from 'framer-motion'

interface Phase {
  label: string
  period: string
  status: 'active' | 'upcoming'
  milestones: string[]
}

const phases: Phase[] = [
  {
    label: 'Phase 1',
    period: '0–6 Months',
    status: 'active',
    milestones: [
      'Launch with 3 pilot facilities',
      'MVP app & digital dashboard',
      'First farmer cohort on-boarded',
      'Initial broiler cycle completed',
    ],
  },
  {
    label: 'Phase 2',
    period: '6–12 Months',
    status: 'upcoming',
    milestones: [
      'Model validation & optimisation',
      'Multiple production cycles',
      'Expand to 10 facilities',
      'Build strategic partnerships',
    ],
  },
  {
    label: 'Phase 3',
    period: '12–36 Months',
    status: 'upcoming',
    milestones: [
      'Scale to 25+ facilities',
      'AI-powered analytics rollout',
      'Layer production track launch',
      'Series A fundraising round',
    ],
  },
]

export default function Roadmap() {
  return (
    <section
      id="roadmap"
      className="bg-poulber-offwhite py-20 lg:py-28"
      aria-label="Company roadmap"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-poulber-green text-sm font-bold uppercase tracking-widest mb-3">
            The Journey
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-poulber-navy leading-tight">
            Where We Are <span className="text-poulber-green">Going</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connector line — desktop horizontal, mobile vertical */}
          <div
            className="hidden lg:block absolute top-8 left-[calc(16.66%+16px)] right-[calc(16.66%+16px)] h-0.5"
            aria-hidden="true"
            style={{
              background:
                'linear-gradient(to right, #13B639 33%, #d1d5db 33%)',
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
            {phases.map((phase, i) => (
              <motion.div
                key={phase.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className={`relative flex flex-col ${phase.status === 'active' ? '' : 'opacity-70'}`}
              >
                {/* Phase dot */}
                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <div
                    className={`w-4 h-4 rounded-full flex-shrink-0 ${
                      phase.status === 'active'
                        ? 'bg-poulber-green ring-4 ring-poulber-green/20'
                        : 'bg-gray-300 ring-4 ring-gray-100'
                    }`}
                    aria-hidden="true"
                  />
                  <div>
                    <span
                      className={`text-xs font-bold uppercase tracking-widest ${
                        phase.status === 'active'
                          ? 'text-poulber-green'
                          : 'text-poulber-muted'
                      }`}
                    >
                      {phase.label}
                    </span>
                    <span className="text-poulber-muted text-xs ml-2">
                      · {phase.period}
                    </span>
                  </div>
                </div>

                {/* Card */}
                <div
                  className={`bg-white rounded-2xl p-7 flex-1 border ${
                    phase.status === 'active'
                      ? 'border-poulber-green/30 shadow-md'
                      : 'border-gray-100 border-dashed'
                  }`}
                >
                  {phase.status === 'active' && (
                    <span className="inline-block text-xs font-bold text-poulber-green bg-poulber-green/10 px-3 py-1 rounded-full mb-4">
                      Current Phase
                    </span>
                  )}
                  <ul className="space-y-3">
                    {phase.milestones.map((milestone) => (
                      <li
                        key={milestone}
                        className="flex items-start gap-2.5 text-sm"
                      >
                        <span
                          className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                            phase.status === 'active'
                              ? 'bg-poulber-green'
                              : 'bg-gray-300'
                          }`}
                        />
                        <span
                          className={
                            phase.status === 'active'
                              ? 'text-poulber-navy font-medium'
                              : 'text-poulber-muted'
                          }
                        >
                          {milestone}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
