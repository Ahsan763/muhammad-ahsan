"use client"
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { Button } from './ui/button'
import Image from 'next/image'
import { FaFacebookF, FaGoogle, FaLinkedinIn } from 'react-icons/fa6'
import { BsStars } from 'react-icons/bs'


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
    <section className="pt-16 relative z-10">
      <div className="container">
        <div className='flex flex-col items-center justify-center text-center mb-4'>
          <div className="px-6 py-2.5 rounded-full border border-[#243179] text-sm font-medium uppercase tracking-wider bg-gradient-to-l from-[#24317925] to-[#0e78f133]">
            <h1 className='bg-gradient-to-l from-[#00f7ff] to-[#799dff] bg-clip-text text-transparent'>React/Next.js & Figma to HTML Expert</h1>
          </div>

          <h2 className="text-4xl md:text-[80px] font-bold leading-[1.16] text-white mb-7 tracking-wide">
            Developer <span className="italic font-playfair">Experiences</span> <br />
            Building Brands
          </h2>

          <div className="flex items-start gap-4">
            <Button >
              View Recent Work
            </Button>
            <Button variant="transparent">
              Book a Call
            </Button>
          </div>
        </div>

        <div className='grid grid-cols-3 items-end justify-center'>
          <div className='max-w-[320px] text-balance pb-12'>
            <p className="text-xl leading-relaxed bg-gradient-to-r from-white to-[#799dff] bg-clip-text text-transparent mb-5">
              Expert crafting modern, user-friendly websites that elevate brands and drive results.
            </p>
            <div className="flex space-x-4">
              {[FaFacebookF, FaLinkedinIn, FaGoogle,].map((IconName, i) => {
                return (
                  <a key={i} href="#" className="h-12 w-12 flex items-center justify-center rounded-full bg-gradient-to-t from-[#ffffff20] to-[#050509] text-white hover:bg-blue-600 transition-colors ">
                    <IconName className='text- ' />
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
            className="rounded-lg grayscale mx-auto"
          />
          <div className="pb-12 ml-auto">
            <div className='ml-auto'>
              <h3 className="text-6xl font-bold font-playfair bg-gradient-to-t from-[#799dff] to-[#fff] bg-clip-text text-transparent leading-[1.3] text-right ">
                5
                <span className='text-4xl font-medium font-outfit text-right'> +</span>
              </h3>
              <p className="bg-gradient-to-r from-[#fff] to-[#799dff] bg-clip-text text-transparent text-right text-lg">Years of <br /> Experience</p>
            </div>
            <div>
              <h3 className="text-6xl font-bold font-playfair bg-gradient-to-t from-[#799dff] to-[#fff] bg-clip-text text-transparent leading-[1.3] text-right ">
                99
                <span className='text-4xl font-medium font-outfit text-right'> %</span>
              </h3>
              <p className="bg-gradient-to-r from-[#fff] to-[#799dff] bg-clip-text text-transparent text-right text-lg">Happy Clients</p>
            </div>
          </div>

        </div>



      </div>


      <div className="w-full bg-gradient-to-r from-[#1a78cc] to-[#016dcc] py-6  gap-4 text-sm font-medium">
        <div className="container">
          <div className='flex flex-wrap justify-between'>
            <span className="px-3 flex items-center gap-x-2 text-lg text-white"><BsStars className='text-2xl text-sky-200' /> React App Development</span>
            <span className="px-3 flex items-center gap-x-2 text-lg text-white"><BsStars className='text-2xl text-sky-200' /> Web Designing</span>
            <span className="px-3 flex items-center gap-x-2 text-lg text-white"><BsStars className='text-2xl text-sky-200' /> Web Development</span>
            <span className="px-3 flex items-center gap-x-2 text-lg text-white"><BsStars className='text-2xl text-sky-200' /> Figma to HTML</span>
            <span className="px-3 flex items-center gap-x-2 text-lg text-white"><BsStars className='text-2xl text-sky-200' /> Pixels Perfect Conversion</span>
          </div>
        </div>
      </div>
    </section>
  )
}