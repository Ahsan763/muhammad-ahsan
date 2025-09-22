"use client";
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

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

  // Helper component for a project card
  const ProjectCard: React.FC<{ project: typeof projects[0] }> = ({ project }) => {
    const cardRef = useRef(null);
    const imageRef = useRef(null);
    const altImageRef = useRef(null);

    useEffect(() => {
      // Set up initial state for GSAP
      gsap.set(altImageRef.current, {
        clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
      });
    }, []);

    const handleMouseEnter = () => {
      // Animate image "wipe" effect and border glow on hover
      gsap.to(altImageRef.current, {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.to(cardRef.current, {
        '--border-angle': '360deg',
        duration: 3,
        ease: 'linear',
        repeat: -1,
      });
    };

    const handleMouseLeave = () => {
      // Animate image back and stop border glow
      gsap.to(altImageRef.current, {
        clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)',
        duration: 0.8,
        ease: 'power3.in',
      });

      gsap.to(cardRef.current, {
        '--border-angle': '360deg',
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
            className="absolute inset-0 h-full w-full object-cover"
          />
          {/* External link icon and button */}
          <button
            className="absolute right-4 top-4 rounded-full bg-black/50 p-2 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            onClick={() => {}}
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
    <div className="min-h-screen bg-[#070b13] font-sans text-white">
      {/* Faded radial gradient background effect */}
      <div
        className="absolute inset-0 h-full w-full rounded-full blur-3xl opacity-30"
        style={{ background: 'radial-gradient(circle at center, #4169E1 0%, transparent 70%)' }}
      ></div>

      {/* Main content container with subtle gradient overlay */}
      <div className="relative mx-auto flex max-w-7xl flex-col items-center p-8 py-20 md:p-12 lg:p-24">
        {/* Subtle background text "WORKS" */}
        <h2
          className="absolute -top-12 left-1/2 -translate-x-1/2 select-none font-bold text-gray-800 opacity-5"
          style={{ fontSize: '10rem', letterSpacing: '0.2em' }}
        >
          WORKS
        </h2>

        {/* Header section */}
        <div className="text-center">
          <h1
            className="text-4xl font-bold leading-tight md:text-5xl"
            style={{ fontFamily: "'Playfair Display', serif" }} // Using a similar font style
          >
            Recent <span className="font-extralight italic">Projects</span>
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-gray-400 md:text-lg">
            See How I Transform Concepts into Stunning Websites. A curated
            selection of my latest UI/UX and WordPress projects crafted with
            creativity and precision
          </p>
        </div>

        {/* Projects grid */}
        <div className="mt-16 grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        {/* View More Work button */}
        <button className="mt-20 transform rounded-full border border-blue-400 px-8 py-3 text-blue-400 transition-all duration-300 hover:bg-blue-400 hover:text-white hover:shadow-lg">
          View More Work
        </button>
      </div>
    </div>
  );
};

export default App;
