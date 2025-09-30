"use client";
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { Button } from './ui/button';
import ecom from "../../public/ecom.png"
import mbi from "../../public/MBI.jpg"
import pde from "../../public/pde.png"
import dor from "../../public/dor.png"
import Image from 'next/image';
import Link from 'next/link';
const projects = [
  {
    title: 'Ecom Club AI',
    subtitle: 'Warehouse and dropshipping web app',
    image: ecom,
    link: "https://portal.ecomclub.ai/"
  },
  {
    title: 'My Big Idea MBI',
    subtitle: 'Educational web app for building stores',
    image: mbi,
    link: "https://app.mybigidea.club/"
  },
  {
    title: 'DOR',
    subtitle: 'Multimedia Website',
    image: dor,
    link: "https://dor1.vercel.app/"
  },
  {
    title: 'Product Design Experts',
    subtitle: 'Services Website Design',
    image: pde,
    link: "https://www.productdesignexperts.com/"
  },
];
const ProjectCard = ({ project }: any) => {
  // const cardRef = useRef(null);
  // const imageRef = useRef(null);
  // const altImageRef = useRef(null);

  // useEffect(() => {
  //   gsap.set(altImageRef.current, {
  //     clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
  //   });
  // }, []);

  // const handleMouseEnter = () => {
  //   gsap.fromTo(
  //     altImageRef.current,
  //     {
  //       clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
  //       filter: "blur(20px) contrast(150%)",
  //       scale: 1.2,
  //       skewX: 20,
  //     },
  //     {
  //       clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  //       filter: "blur(0px) contrast(100%)",
  //       scale: 1,
  //       skewX: 0,
  //       duration: 1,
  //       ease: "power3.out",
  //     }
  //   );

  //   gsap.to(cardRef.current, {
  //     "--border-angle": "360deg",
  //     duration: 3,
  //     ease: "linear",
  //     repeat: -1,
  //   });
  // };

  // const handleMouseLeave = () => {
  //   gsap.to(altImageRef.current, {
  //     clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
  //     filter: "blur(20px) contrast(150%)",
  //     scale: 1.1,
  //     skewX: -15,
  //     duration: 0.8,
  //     ease: "power3.in",
  //   });

  //   gsap.to(cardRef.current, {
  //     "--border-angle": "360deg",
  //     duration: 0,
  //     repeat: 0,
  //   });
  // };

  return (
    <Link
      href={project?.link}
      target='_blank'
      // ref={cardRef}
      className="group relative flex flex-col rounded-2xl p-5 prjcard bg-gradient-to-b from-[#101828] to-[#101828]"
    // onMouseEnter={handleMouseEnter}
    // onMouseLeave={handleMouseLeave}
    >
      <div className="absolute w-[calc(100%+4px)] h-[calc(100%+4px)] bg-gradient-to-b from-[#1468b6] to-[#101828] rounded-2xl -z-10 top-[-2px] left-[-2px]"></div>


      {/* Project image placeholder */}
      <div className="relative aspect-[1/0.85] w-full overflow-hidden rounded-xl">
        <Image
          // ref={imageRef}
          src={project.image}
          alt={project.title}
          width={400}
          height={400}
          className="h-full w-full object-fill"
        />
        {/* <img
          ref={altImageRef}
          src={project.altImage}
          alt={project.title}
          className="absolute inset-0 h-full w-full object-cover will-change-transform"
        /> */}
        {/* External link icon and button */}

      </div>

      {/* Project text details */}
      <div className="mt-4 flex flex-grow flex-col justify-end">
        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        <p className="mt-1 text-sm text-gray-400">{project.subtitle}</p>
      </div>
    </Link>
  );
};
const Projects = () => {
  const el = useRef<HTMLDivElement | null>(null)


  useEffect(() => {
    if (!el.current) return
    const ctx = gsap.context(() => {
      gsap.from('.heading', { y: 40, opacity: 0, duration: .8 })
      gsap.from('.desc', { y: 20, opacity: 0, delay: .15, duration: .8 })
      gsap.from('.cta', { scale: 0.95, opacity: 0, delay: .3, duration: .8 })


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
    <section className="pt-10 sm:pt-20 lg:pt-32 pb-5 sm:pb-16 md:pb-20 lg:pb-24 relative z-[5]" id='projects'>
      <div className="absolute top-0 -z-30 h-[300px] sm:h-[500px] w-[300px] sm:w-[500px]  bg-radial from-[#07284a]  to-[#04203b00] to-70% left-1/2 -translate-x-1/2"></div>
      <div className="container">
        <div className="text-center relative z-10 mb-10 sm:mb-14 lg:mb-20">
          <h2 className="heading absolute select-none font-black opacity-30 md:-top-[30%] lg:-top-[50%] left-1/2 -translate-x-1/2 uppercase text-7xl md:text-[120px] lg:text-[170px] -z-10 tracking-wider bg-gradient-to-t from-[#05050900] to-[#262d49] bg-clip-text text-transparent">
            WORKS
          </h2>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.2] font-outfit tracking-wide mb-3 bg-gradient-to-r from-[#fff] to-[#abd8fc] bg-clip-text text-transparent">
            Recent <span className="font-playfair italic">Projects</span>
          </h1>
          <p className="desc mx-auto sm:text-lg lg:text-[21px] leading-[1.6] bg-gradient-to-r from-[#fff] to-[#799dff] bg-clip-text text-transparent max-w-3xl">
            See How I Transform Ideas into Pixel-Perfect Web Experiences.
            A curated selection of my latest React.js, Next.js, and UI/UX projects, built with precision, responsiveness, and modern design practices.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12 mb-16">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        {/* <Button variant={"transparent"} className='mx-auto px-14 flex'>
          View More Work
        </Button> */}
      </div>
    </section>
  );
};

export default Projects;
