import Hero from '@/components/sections/home/Hero'
import Features from '@/components/sections/home/Features'
import Pricing from '@/components/sections/home/Pricing'
import About from '@/components/sections/home/About'
import Contact from '@/components/sections/home/Contact'
import Cta from '@/components/sections/home/Cta'

export default function HomePage() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="cta">
        <Cta />
      </section>
    </>
  )
}