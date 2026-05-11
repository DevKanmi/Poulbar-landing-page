'use client'

import Image from 'next/image'

const logos = [
  { src: '/Sterling.png', alt: 'Sterling Bank' },
  { src: '/Ecoflux.png', alt: 'Ecoflux' },
  { src: '/Lagos_Seal.png', alt: 'Lagos State Seal' },
]

const tickerLogos = [...logos, ...logos, ...logos, ...logos]

export default function LogoTicker() {
  return (
    <section className="bg-poulber-navy border-t border-white/10 py-5 overflow-hidden">
      <p className="text-center text-xs font-semibold text-white/40 uppercase tracking-widest mb-4">
        Our Partners
      </p>

      <div
        className="relative flex overflow-hidden group"
      >
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #092045, transparent)' }} />
        <div className="absolute right-0 top-0 h-full w-20 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #092045, transparent)' }} />

        <div className="flex animate-ticker whitespace-nowrap group-hover:[animation-play-state:paused]">
          {tickerLogos.map((logo, i) => (
            <div
              key={i}
              className="inline-flex items-center justify-center mx-10 shrink-0"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={90}
                height={40}
                className="object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 max-h-10 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
