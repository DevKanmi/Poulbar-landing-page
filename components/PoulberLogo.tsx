import Image from 'next/image'

interface PoulberLogoProps {
  variant?: 'default' | 'white'
  className?: string
}

export default function PoulberLogo({
  variant = 'default',
  className = '',
}: PoulberLogoProps) {
  return (
    <div className={`flex items-center ${className}`} aria-label="Poulber logo">
      <Image
        src="/logo.png"
        alt="Poulber"
        width={140}
        height={48}
        priority
        className={`h-10 w-auto ${variant === 'white' ? 'brightness-0 invert' : ''}`}
      />
    </div>
  )
}
