"use client";

import { FaFigma, FaWordpress } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import { HiOutlineShoppingBag, HiOutlineShoppingCart } from "react-icons/hi";
import { TbBrandAdobe } from "react-icons/tb";
import { CgArrowTopRight } from "react-icons/cg";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";
import { FaReact, FaWordpressSimple } from "react-icons/fa6";
import { FiCodesandbox } from "react-icons/fi";

const services = [
  {
    title: "UI/UX Development",
    description: "Crafting intuitive user journeys and pixel-perfect interfaces that boost engagement.",
    tags: [
      "Interactive Designs",
      "Figma to HTML",
      "Pixel-perfect Conversions",
      "Stunning Animations",
    ],
    icon: FiCodesandbox,
  },
  {
    title: "React/Next.js App Development",
    description: "Building fast, scalable, and responsive web applications with modern frameworks.",
    tags: [
      "Frontend Development",
      "Full-Stack",
      "Web Applications",
      "API Integration",
    ],
    icon: FaReact,
  },
  {
    title: "E-Commerce",
    description: "Creating conversion-focused online stores with seamless checkout experiences.",
    tags: [
      "WooCommerce Developer",
      "Store Design",
      "Payment Gateway",
      "Page Optimization",
    ],
    icon: HiOutlineShoppingBag,
  },
  {
    title: "WordPress Development",
    description: "Building fast, secure, and scalable WordPress sites tailored to your brand.",
    tags: [
      "WordPress Developer",
      "Speed Optimization",
      "Custom WordPress Website",
      "Elementor",
    ],
    icon: FaWordpressSimple,
  },
];
const ServicesCard = ({ service, index }: any) => {
  return <div key={service.name} className="p-5 sm:p-10 rounded-2xl  border  relative overflow-hidden">
    <div className="absolute -top-24 -left-24 -z-30 h-[300px] w-[300px] bg-radial from-[#07284a] to-[#04203b00] to-60% opacity-60"></div>
    <div className="flex items-center space-x-4 mb-4">
      <service.icon className="w-9 sm:w-13 h-9 sm:h-13" />
      <h3 className="text-xl sm:text-3xl font-semibold">{service.title}</h3>
    </div>

    <p className="text-gray-400 mb-6 max-w-[390px]">{service.description}</p>

    <div className="flex flex-wrap gap-x-2 gap-y-3">
      {service.tags.map((tag: any, i: any) => (
        <span
          key={i}
          className="bg-gradient-to-r from-[#ffffff0e] to-[#0505091a] border border-gray-800 text-gray-400 px-3 py-1 text-sm rounded-full"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
}
const Services = () => {
  return (
    <section className="pt-10 pb-16 relative z-[4]" id="services">
      <div className="absolute top-[-60px] sm:-top-[100px] -z-30 h-[300px] sm:h-[500px] w-[300px] sm:w-[500px] bg-radial from-[#07284a] to-[#04203b00] to-70% left-1/2 -translate-x-1/2"></div>
      <div className="container">
        <div className="text-center relative z-10 mb-14">
          <h2 className="heading absolute select-none font-black opacity-30 md:-top-[30%] lg:-top-[50%] left-1/2 -translate-x-1/2 uppercase text-4xl md:text-[120px] lg:text-[170px] -z-10 tracking-wider bg-gradient-to-t from-[#05050900] to-[#262d49] bg-clip-text text-transparent">
            services
          </h2>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.2] font-outfit tracking-wide mb-3 bg-gradient-to-r from-[#fff] to-[#abd8fc] bg-clip-text text-transparent">
            Digital Product{" "}
            <span className="font-playfair italic">
              Design <br /> Services
            </span>{" "}
            we Offer
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-8">
          {services.slice(0, 1).map((service, index) => (
            <ServicesCard service={service} index={index} />
          ))}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.slice(1, 3).map((service, index) => (
              <ServicesCard service={service} index={index} />
            ))}
          </div>
          {services.slice(3, 4).map((service, index) => (
            <ServicesCard service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
