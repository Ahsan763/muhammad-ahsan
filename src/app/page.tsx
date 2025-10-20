"use client";
import Contact from "@/components/Contact";
import FeedbackSlider from "@/components/FeedbackSlider";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 text-gray-900 dark:text-gray-100">
        <main>
          <div className="hero">
            <Header />
            <Hero />
          </div>
          <Projects />
          <Services />
          <FeedbackSlider />
          <Contact />
        </main>
      </div>
    </>
  );
}
