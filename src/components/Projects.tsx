"use client";
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { Button } from './ui/button';

// Main application component
const App: React.FC = () => {
  const projects = [
    {
      title: 'Marhaba Restaurant',
      subtitle: 'Food Website Design',
      image: 'https://placehold.co/1000x800/1e293b/a5b4fc?text=Marhaba+Restaurant',
      altImage: 'https://placehold.co/1000x800/2f534e/f0fdf4?text=Next+Image+1',
    },
    {
      title: 'Logistics Website Design',
      subtitle: 'Modern UI Design',
      image: 'https://placehold.co/1000x800/1e293b/a5b4fc?text=Logistics+Website',
      altImage: 'https://placehold.co/1000x800/51296a/f3e8ff?text=Next+Image+2',
    },
    {
      title: 'AIVault - Modern AI',
      subtitle: 'Services Website',
      image: 'https://placehold.co/1000x800/1e293b/a5b4fc?text=AIVault+Website',
      altImage: 'https://placehold.co/1000x800/7a5223/fffbeb?text=Next+Image+3',
    },
    {
      title: 'iTutor - Online Course',
      subtitle: 'Platform Design',
      image: 'https://placehold.co/1000x800/1e293b/a5b4fc?text=iTutor+Platform',
      altImage: 'https://placehold.co/1000x800/1e3b3b/e0f2f1?text=Next+Image+4',
    },
  ];

  const ProjectCard: React.FC<{ project: typeof projects[0] }> = ({ project }) => {
    const cardRef = useRef(null);
    const imageRef = useRef(null);
    const altImageRef = useRef(null);

    useEffect(() => {
      gsap.set(altImageRef.current, {
        clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
      });
    }, []);

    const handleMouseEnter = () => {
      gsap.fromTo(
        altImageRef.current,
        {
          clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
          filter: "blur(20px) contrast(150%)",
          scale: 1.2,
          skewX: 20,
        },
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          filter: "blur(0px) contrast(100%)",
          scale: 1,
          skewX: 0,
          duration: 1,
          ease: "power3.out",
        }
      );

      gsap.to(cardRef.current, {
        "--border-angle": "360deg",
        duration: 3,
        ease: "linear",
        repeat: -1,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(altImageRef.current, {
        clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
        filter: "blur(20px) contrast(150%)",
        scale: 1.1,
        skewX: -15,
        duration: 0.8,
        ease: "power3.in",
      });

      gsap.to(cardRef.current, {
        "--border-angle": "360deg",
        duration: 0,
        repeat: 0,
      });
    };

    return (
      <div
        ref={cardRef}
        className="group relative flex flex-col overflow-hidden rounded-3xl p-4 shadow-xl backdrop-blur-lg transition-transform duration-300 hover:scale-[1.02]"
        style={{
          background: 'rgb(31, 41, 55)',
          '--border-angle': '0deg',
          '--border-size': '2px',
          '--border-color': 'linear-gradient(270deg, #1d4ed8, #4f46e5, #9333ea, #c084fc, #9333ea, #4f46e5)',
          '--border-radius': '1.5rem',
          border: 'var(--border-size) solid transparent',
          backgroundClip: 'padding-box, border-box',
          backgroundOrigin: 'padding-box, border-box',
          backgroundRepeat: 'no-repeat',
          backgroundImage: 'linear-gradient(rgb(31, 41, 55), rgb(31, 41, 55)), var(--border-color)',
          backgroundPosition: '0% 0%, var(--border-angle)',
          backgroundSize: '100% 100%, 200% 200%',
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Project image placeholder */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
          <img
            ref={imageRef}
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
          />
          <img
            ref={altImageRef}
            src={project.altImage}
            alt={project.title}
            className="absolute inset-0 h-full w-full object-cover will-change-transform"
          />
          {/* External link icon and button */}
          <button
            className="absolute right-4 top-4 rounded-full bg-black/50 p-2 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            onClick={() => { }}
          >
            {/* SVG for the external link icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </button>
        </div>

        {/* Project text details */}
        <div className="mt-4 flex flex-grow flex-col justify-end">
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
          <p className="mt-1 text-sm text-gray-400">{project.subtitle}</p>
        </div>
      </div>
    );
  };

  return (
    <section className="pt-32 pb-10 relative z-[5]" id='projects'>
      <div className="absolute top-0 -z-30  h-[500px] w-[500px]  bg-radial from-[#07284a]  to-[#04203b00] to-70% left-1/2 -translate-x-1/2"></div>
      <div className="container">
        <div className="text-center relative z-10 mb-14">
          <h2 className="absolute select-none font-black opacity-30 -top-[50%] left-1/2 -translate-x-1/2 uppercase text-4xl md:text-[180px] -z-10 tracking-wider bg-gradient-to-t from-[#05050900] to-[#262d49] bg-clip-text text-transparent">
            WORKS
          </h2>
          <h1 className="text-4xl md:text-7xl font-bold leading-[1.2] font-outfit tracking-wide mb-3">
            Recent <span className="font-playfair italic">Projects</span>
          </h1>
          <p className="mx-auto  md:text-[21px] leading-[1.6] bg-gradient-to-r from-[#fff] to-[#799dff] bg-clip-text text-transparent max-w-3xl">
            See How I Transform Concepts into Stunning Websites. A curated
            selection of my latest UI/UX and WordPress projects crafted with
            creativity and precision
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12 mb-16">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        <Button variant={"transparent"} className='mx-auto flex'>
          View More Work
        </Button>
      </div>

    </section>
  );
};

export default App;
