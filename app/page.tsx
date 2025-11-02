import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Programs from '@/components/Programs'
import Teachers from '@/components/Teachers'
// import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Programs />
      <Teachers />
      {/* <Testimonials /> */}
      <CTA />
    </>
  )
}

