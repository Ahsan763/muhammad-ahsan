"use client";
import Contact from "@/components/Contact";
import ContactSection from "@/components/ContactSec";
import FeedbackSlider from "@/components/FeedbackSlider";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MovingBar from "@/components/MovingBar";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ahsan Iqbal — Frontend Developer</title>
        <meta name="description" content="Modern portfolio of Muhammad Ahsan Iqbal — frontend developer" />
      </Head>


      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 text-gray-900 dark:text-gray-100">
        <main>
          <div className="hero">
            <Header />
            <Hero />
          </div>

          <Projects />
          <Services />
          <div className="relative overflow-hidden py-20">
            {/* <div className="transform rotate-[7deg] absolute top-2 left-0 right-0 z-10">
              <MovingBar text="FRONTEND • BACKEND • DEVELOPER • JAVASCRIPT" />
            </div> */}
            <FeedbackSlider />
          </div>
          <ContactSection />
          <Contact />
        </main>
      </div>
    </>
  );
}
