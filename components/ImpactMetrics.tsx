'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

interface Metric {
  prefix?: string
  value: number
  suffix: string
  label: string
  description: string
}

const metrics: Metric[] = [
  {
    value: 25,
    suffix: '',
    label: 'Facilities',
    description: 'Rehabilitated poultry facilities nationwide',
  },
  {
    value: 300,
    suffix: '+',
    label: 'Farmers',
    description: 'Young Nigerians accessing productive livelihoods',
  },
  {
    value: 500,
    suffix: 'MT',
    label: 'Production',
    description: 'Metric tonnes of poultry output per annum',
  },
  {
    prefix: '<',
    value: 5,
    suffix: '%',
    label: 'Mortality Target',
    description: 'Industry-leading bird mortality management',
  },
]

function CountUp({
  target,
  started,
  duration = 2000,
}: {
  target: number
  started: boolean
  duration?: number
}) {
  const [count, setCount] = useState(0)
  const frameRef = useRef<number | null>(null)

  useEffect(() => {
    if (!started) return

    const startTime = performance.now()

    const step = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(step)
      }
    }

    frameRef.current = requestAnimationFrame(step)
    return () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current)
    }
  }, [started, target, duration])

  return <>{count}</>
}

export default function ImpactMetrics() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <section
      id="impact"
      ref={ref}
      className="relative bg-poulber-navy py-20 lg:py-28 overflow-hidden"
      aria-label="Impact metrics"
    >
      {/* Background image */}
      <Image
        src="/our_impact_img.jpg"
        alt=""
        fill
        className="object-cover object-center opacity-20"
        sizes="100vw"
        aria-hidden="true"
      />
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
            Our Impact
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Ambitious Targets.{' '}
            <span className="text-poulber-green">Measurable Results.</span>
          </h2>
        </motion.div>

        {/* Metric grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="text-center"
            >
              {/* Number */}
              <div
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-1"
                aria-live="polite"
                aria-atomic="true"
              >
                {metric.prefix && (
                  <span className="text-poulber-green">{metric.prefix}</span>
                )}
                <CountUp target={metric.value} started={inView} />
                <span className="text-poulber-green">{metric.suffix}</span>
              </div>

              {/* Label */}
              <p className="text-base font-bold text-white mb-2">
                {metric.label}
              </p>

              {/* Description */}
              <p className="text-xs text-white/50 leading-relaxed max-w-[180px] mx-auto">
                {metric.description}
              </p>

              {/* Divider (hidden on last) */}
              {i < metrics.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/4 h-1/2 w-px bg-white/10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
