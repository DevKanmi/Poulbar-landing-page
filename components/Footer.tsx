import { Twitter, Linkedin, Instagram } from 'lucide-react'
import PoulberLogo from './PoulberLogo'

const footerLinks = {
  Company: [
    { label: 'About Us', href: '#story' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Roadmap', href: '#roadmap' },
    { label: 'Impact', href: '#impact' },
  ],
  Farmers: [
    { label: 'Join as a Farmer', href: '#apply' },
    { label: 'Zero Capex Model', href: '#zero-capex' },
    { label: 'Profit Structure', href: '#waterfall' },
    { label: 'Training Programme', href: '#apply' },
  ],
  'Facility Owners': [
    { label: 'List Your Farm', href: '#marketplace' },
    { label: 'Partnership Model', href: '#dual-model' },
    { label: 'Facility Standards', href: '#how-it-works' },
    { label: 'Contact Us', href: '#' },
  ],
}

const socialLinks = [
  { icon: <Twitter size={18} />, label: 'Follow Poulber on Twitter', href: '#' },
  { icon: <Linkedin size={18} />, label: 'Connect with Poulber on LinkedIn', href: '#' },
  { icon: <Instagram size={18} />, label: 'Follow Poulber on Instagram', href: '#' },
]

export default function Footer() {
  return (
    <footer
      className="bg-poulber-navy text-white"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        {/* Top row: logo + links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 mb-14">
          {/* Logo + tagline */}
          <div className="col-span-2 sm:col-span-1">
            <PoulberLogo variant="white" />
            <p className="mt-4 text-white/50 text-sm leading-relaxed max-w-[200px]">
              Farm-as-a-Service for Nigeria&apos;s poultry sector.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 transition-colors duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-5">
                {heading}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © 2026 Poulber. All rights reserved.
          </p>
          <p className="text-white/40 text-xs">Built for Nigeria&apos;s future.</p>
        </div>
      </div>
    </footer>
  )
}
