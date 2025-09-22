"use client";

import { FaFigma, FaWordpress } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { TbBrandAdobe } from "react-icons/tb";
import { CgArrowTopRight } from "react-icons/cg";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";

const services = [
  {
    title: "UI/UX Design",
    description:
      "Crafting intuitive user journeys and pixel-perfect interfaces that boost engagement.",
    tags: [
      "User Interface Design",
      "Interactive Design",
      "Figma Design",
      "Wireframing & Prototyping",
    ],
    icon: <MdOutlineDesignServices className="w-10 h-10 text-white" />,
  },
  {
    title: "Brand Design",
    description:
      "Designing unique visual identities that reflect your brand's voice and values.",
    tags: [
      "Logo Design",
      "Brand Guidelines",
      "Creative Branding",
      "Typography & Color",
    ],
    icon: <TbBrandAdobe className="w-10 h-10 text-white" />,
  },
  {
    title: "E-Commerce",
    description:
      "Creating conversion-focused online stores with seamless checkout experiences.",
    tags: [
      "WooCommerce Developer",
      "Store Design",
      "Payment Gateway",
      "Page Optimization",
    ],
    icon: <HiOutlineShoppingCart className="w-10 h-10 text-white" />,
  },
  {
    title: "WordPress Development",
    description:
      "Building fast, secure, and scalable WordPress sites tailored to your brand.",
    tags: [
      "WordPress Developer",
      "Speed Optimization",
      "Custom WordPress Website",
      "Elementor",
    ],
    icon: <FaWordpress className="w-10 h-10 text-white" />,
  },
];

const Services = () => {
  return (
    <section className="pt-10 relative z-[4]" id="services">
      <div className="absolute -top-[100px] -z-30 h-[500px] w-[500px] bg-radial from-[#07284a] to-[#04203b00] to-70% left-1/2 -translate-x-1/2"></div>
      <div className="relative z-10 w-full max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center relative z-10 mb-14">
          <h2 className="absolute select-none font-black opacity-30 -top-[50%] left-1/2 -translate-x-1/2 uppercase text-4xl md:text-[180px] -z-10 tracking-wider bg-gradient-to-t from-[#05050900] to-[#262d49] bg-clip-text text-transparent">
            services
          </h2>
          <h1 className="text-4xl md:text-7xl font-bold leading-[1.2] font-outfit mb-3 tracking-wide bg-gradient-to-r from-[#fff] to-[#abd8fc] bg-clip-text text-transparent">
            Digital Product{" "}
            <span className="font-playfair italic">
              Design <br /> Services
            </span>{" "}
            we Offer
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-8 rounded-3xl  border  relative overflow-hidden">
              <div className="absolute -top-24 -left-24 -z-30 h-[300px] w-[300px] bg-radial from-[#07284a] to-[#04203b00] to-60% opacity-60"></div>
              <div className="flex items-center space-x-4">
                {service.icon}
                <h3 className="text-2xl font-semibold">{service.title}</h3>
              </div>

              <p className="text-gray-400 mb-6">{service.description}</p>

              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-gray-700/50 text-gray-400 px-3 py-1 text-sm rounded-full border border-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
