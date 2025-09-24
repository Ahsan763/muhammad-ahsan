"use client"
import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { Button } from './ui/button'
import { FaFileDownload } from 'react-icons/fa'


export default function Header() {
  const { theme, setTheme } = useTheme()





  return (
    <header className="grid grid-cols-3 items-center px-8 pt-4 relative top-0 z-30">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#013880] to-[#0062ff] flex items-center justify-center text-white font-bold">AI</div>
        <div>
          <div className="font-semibold text-white">Muhammad Ahsan Iqbal</div>
          <div className="text-xs bg-gradient-to-r text-[#00f7ff] font-medium">Frontend Developer</div>
        </div>
      </div>

      <nav className="hidden lg:flex gap-x-14  text-lg  justify-between">
        <a href="#home" className="hover:text-blue-400 transition text-white">Home</a>
        <a href="#projects" className="hover:text-blue-400 transition text-white">Projects</a>
        <a href="#services" className="hover:text-blue-400 transition text-white">Services</a>
        <a href="#testimonial" className="hover:text-blue-400 transition text-white">Testimonial</a>
        <a href="#blogs" className="hover:text-blue-400 transition text-white">Blogs</a>
      </nav>

      <a href="/Muhammad Ahsan Iqbal.pdf" download="Muhammad-Ahsan-Iqbal-CV.pdf" className='ml-auto flex w-fit hidden lg:flex'>
        <Button variant="transparent">
          <FaFileDownload className="mr-2 h-4 w-4" />
          Download CV
        </Button>
      </a>
    </header>
  )
}