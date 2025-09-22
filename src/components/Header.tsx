"use client"
import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { Button } from './ui/button'


export default function Header() {
  const { theme, setTheme } = useTheme()





  return (
    // <header className="flex items-center justify-between py-6 container mx-auto px-6">
    //   <div className="flex items-center gap-3">
    //     <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">AI</div>
    //     <div>
    //       <div className="font-semibold">Muhammad Ahsan</div>
    //       <div className="text-xs text-gray-500 dark:text-gray-400">Frontend Developer</div>
    //     </div>
    //   </div>


    //   <div className="flex items-center gap-4">
    //     <nav className="hidden md:flex gap-6 text-sm">
    //       <a href="#projects" className="hover:underline">Projects</a>
    //       <a href="#contact" className="hover:underline">Contact</a>
    //     </nav>


    //     <button
    //       aria-label="Toggle theme"
    //       onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    //       className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
    //     >
    //       {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    //     </button>
    //   </div>
    // </header>
    <header className="flex justify-between items-center px-8 py-6">
      <h1 className="text-xl font-bold tracking-wide">Amatat Khan <span className="text-sm font-light">UI/UX Designer</span></h1>

      <nav className="hidden md:flex gap-8 text-sm font-medium">
        <a href="#home" className="hover:text-blue-400 transition">Home</a>
        <a href="#work" className="hover:text-blue-400 transition">Work</a>
        <a href="#services" className="hover:text-blue-400 transition">Services</a>
        <a href="#testimonial" className="hover:text-blue-400 transition">Testimonial</a>
        <a href="#blogs" className="hover:text-blue-400 transition">Blogs</a>
      </nav>

      <Button className="bg-transparent border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-6 py-2">
        Contact
      </Button>
    </header>
  )
}