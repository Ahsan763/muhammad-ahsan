"use client"
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { Button } from './ui/button'
import Image from 'next/image'
import { Facebook, Linkedin, Twitter } from 'lucide-react'


gsap.registerPlugin(ScrollTrigger)


export default function Hero() {
  const el = useRef<HTMLDivElement | null>(null)


  useEffect(() => {
    if (!el.current) return
    const ctx = gsap.context(() => {
      gsap.from('.hero-title', { y: 40, opacity: 0, duration: .8 })
      gsap.from('.hero-sub', { y: 20, opacity: 0, delay: .15, duration: .8 })
      gsap.from('.hero-cta', { scale: 0.95, opacity: 0, delay: .3, duration: .6 })


      gsap.utils.toArray('.card').forEach((card: any, i: number) => {
        gsap.from(card, {
          y: 30, opacity: 0, duration: .6, delay: i * 0.12,
          scrollTrigger: { trigger: card, start: 'top 80%' }
        })
      })
    }, el)
    return () => ctx.revert()
  }, [])


  return (
    // <section ref={el} className="py-12">
    //   <div className="grid md:grid-cols-2 gap-8 items-center">
    //     <div>
    //       <h1 className="text-4xl md:text-5xl font-bold hero-title">Hi — I build beautiful, performant frontends.</h1>
    //       <p className="mt-4 hero-sub max-w-xl text-gray-600 dark:text-gray-300">I specialize in React, Next.js, Tailwind CSS and creating animated, user-friendly interfaces that convert.</p>
    //       <div className="mt-6 flex gap-4">
    //         <a href="#contact" className="hero-cta inline-block px-6 py-3 rounded-lg bg-primary text-white shadow-lg">Contact Me</a>
    //         <a href="#projects" className="inline-block px-6 py-3 rounded-lg border border-gray-200 dark:border-gray-700">See Projects</a>
    //       </div>
    //     </div>


    //     <div className="space-y-4">
    //       <div className="card p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 shadow">
    //         <h3 className="font-semibold">Latest Project</h3>
    //         <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">E-commerce dashboard with charts, filters and export features.</p>
    //       </div>


    //       <div className="card p-6 rounded-2xl bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow">
    //         <h3 className="font-semibold">Skills</h3>
    //         <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">React, Next.js, TypeScript, Tailwind, GSAP, Redux, React Query</p>
    //       </div>
    //     </div>
    //   </div>
    // </section>


    <section className="pt-28">
      <div className="container">
        <div className='flex flex-col items-center justify-center text-center'>
          <p className="px-6 py-2 rounded-full border border-gray-500 text-xs uppercase tracking-wider bg-gradient-to-r from-slate-800 to-slate-700 mb-6">
            UI/UX Designer & WordPress Expert
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-snug">
            Designing <span className="italic text-blue-300">Experiences</span> <br />
            Building Brands
          </h2>

          <div className="flex gap-4 mt-8">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 text-lg rounded-lg shadow-md">
              View Recent Work
            </Button>
            <Button className="bg-transparent border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-6 py-3 text-lg rounded-lg">
              Book a Call
            </Button>
          </div>
        </div>

        <div className='grid grid-cols-3 items-end justify-center'>
          <div className="mb-8 md:mb-0 max-w-md">
            <p className="text-sm text-gray-300 leading-relaxed">
              Expert crafting modern, user-friendly websites that elevate brands and drive results.
            </p>
            <div className="mt-4 flex space-x-4">
              {[Facebook, Linkedin, Twitter,].map((IconName,i) => {
                return (
                  <a key={i} href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-blue-600 transition-colors border border-gray-700">
                    <IconName />
                  </a>
                );
              })}
            </div>
          </div>
          <Image
            src="/hero2.png"
            alt="Hero Person"
            width={400}
            height={400}
            className="rounded-lg "
          />
          <div className="mt-10 grid grid-cols-2 gap-12 text-center">
            <div>
              <h3 className="text-4xl font-bold">5+</h3>
              <p className="text-gray-400">Years of Experience</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold">99%</h3>
              <p className="text-gray-400">Happy Clients</p>
            </div>
          </div>

        </div>



      </div>


      <div className="w-full bg-gradient-to-r from-blue-600 to-blue-500 py-8 flex flex-wrap justify-center gap-4 text-sm font-medium">
        <span className="px-3">⭐ The Best Solution</span>
        <span className="px-3">⭐ Web Design</span>
        <span className="px-3">⭐ WordPress Development</span>
        <span className="px-3">⭐ Branding</span>
        <span className="px-3">⭐ Webflow</span>
        <span className="px-3">⭐ Design</span>
      </div>
    </section>
  )
}