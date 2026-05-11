import Hero from '@/components/Hero'
import LogoTicker from '@/components/LogoTicker'
import Problem from '@/components/Problem'
import HowItWorks from '@/components/HowItWorks'
import ZeroCapex from '@/components/ZeroCapex'
import Waterfall from '@/components/Waterfall'
import DualModel from '@/components/DualModel'
import ImpactMetrics from '@/components/ImpactMetrics'
import Marketplace from '@/components/Marketplace'
import Story from '@/components/Story'
import Roadmap from '@/components/Roadmap'
import NYSCApply from '@/components/NYSCApply'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <LogoTicker />
      <Problem />
      <HowItWorks />
      <ZeroCapex />
      <Waterfall />
      <DualModel />
      <ImpactMetrics />
      <Marketplace />
      <Story />
      <Roadmap />
      <NYSCApply />
      <Footer />
    </main>
  )
}
