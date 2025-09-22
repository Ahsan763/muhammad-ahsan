
const Services = () => {
  return (
    <div className="min-h-screen bg-[#0d0d19] text-gray-200 antialiased font-sans flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background radial gradient and subtle grain effect */}
      <div className="absolute inset-0 z-0 opacity-80" style={{
        backgroundImage: 'radial-gradient(ellipse at center, rgba(14, 165, 233, 0.1) 0%, transparent 70%), url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100%25\' height=\'100%25\' viewBox=\'0 0 100 100\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.1\' /%3E%3C/svg%3E")',
      }}></div>

      {/* "SERVICES" text in the background */}
      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] lg:text-[10vw] font-bold text-transparent" style={{
        WebkitTextStroke: '1px rgba(255, 255, 255, 0.03)',
        WebkitTextFillColor: 'transparent',
        zIndex: 1,
      }}>SERVICES</h1>

      <div className="relative z-10 w-full max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="mb-2 text-2xl lg:text-3xl font-bold" style={{
            backgroundImage: 'linear-gradient(to right, #ffffff, #888888)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Digital Product Design
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold italic text-white leading-tight">
            Services we Offer
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* UI/UX Design Card */}
          <div className="p-8 rounded-3xl bg-gray-800/20 backdrop-filter backdrop-blur-sm border border-gray-700/50 shadow-lg relative overflow-hidden" style={{
            boxShadow: '0 0 20px rgba(128, 90, 213, 0.2)',
          }}>
            <div className="absolute inset-0 -z-10 rounded-3xl" style={{
              background: 'linear-gradient(135deg, rgba(128, 90, 213, 0.2), rgba(165, 243, 252, 0.1))',
              filter: 'blur(30px) brightness(0.8)',
            }}></div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                {/* UI/UX Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-10 h-10 text-white"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <line x1="16" x2="8" y1="3" y2="21" />
                  <path d="M16 3h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2" />
                  <path d="M8 3h-2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2" />
                </svg>
                <h3 className="text-2xl font-semibold">UI/UX Design</h3>
              </div>
              {/* Arrow Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-gray-400 transform -rotate-45"
              >
                <line x1="7" x2="17" y1="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </div>
            <p className="text-gray-400 mb-6">
              Crafting intuitive user journeys and pixel-perfect interfaces that boost engagement.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-700/50 text-gray-400 px-3 py-1 text-sm rounded-full border border-gray-600">User Interface Design</span>
              <span className="bg-gray-700/50 text-gray-400 px-3 py-1 text-sm rounded-full border border-gray-600">Interactive Design</span>
              <span className="bg-gray-700/50 text-gray-400 px-3 py-1 text-sm rounded-full border border-gray-600">Figma Design</span>
              <span className="bg-gray-700/50 text-gray-400 px-3 py-1 text-sm rounded-full border border-gray-600">Wireframing & Prototyping</span>
            </div>
          </div>

          {/* Brand Design Card */}
          <div className="p-8 rounded-3xl bg-gray-800/20 backdrop-filter backdrop-blur-sm border border-gray-700/50 shadow-lg relative overflow-hidden" style={{
            boxShadow: '0 0 20px rgba(128, 90, 213, 0.2)',
          }}>
            <div className="absolute inset-0 -z-10 rounded-3xl" style={{
              background: 'linear-gradient(135deg, rgba(128, 90, 213, 0.2), rgba(165, 243, 252, 0.1))',
              filter: 'blur(30px) brightness(0.8)',
            }}></div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                {/* Brand Design Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-10 h-10 text-white"
                >
                  <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z" />
                  <path d="M12 12a4 4 0 1 1 4 4" />
                  <path d="M12 12a4 4 0 1 0 4-4" />
                </svg>
                <h3 className="text-2xl font-semibold">Brand Design</h3>
              </div>
              {/* Arrow Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-gray-400 transform -rotate-45"
              >
                <line x1="7" x2="17" y1="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </div>
            <p className="text-gray-400 mb-6">
              Designing unique visual identities that reflect your brand's voice and values.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-700/50 text-gray-400 px-3 py-1 text-sm rounded-full border border-gray-600">Logo Design</span>
              <span className="bg-gray-700/50 text-gray-400 px-3 py-1 text-sm rounded-full border border-gray-600">Brand Guidelines</span>
              <span className="bg-gray-700/50 text-gray-400 px-3 py-1 text-sm rounded-full border border-gray-600">Creative Branding</span>
              <span className="bg-gray-700/50 text-gray-400 px-3 py-1 text-sm rounded-full border border-gray-600">Typography & Color</span>
            </div>
          </div>

          {/* E-Commerce Card */}
          <div className="p-8 rounded-3xl bg-gray-800/20 backdrop-filter backdrop-blur-sm border border-gray-700/50 shadow-lg relative overflow-hidden" style={{
            boxShadow: '0 0 20px rgba(128, 90, 213, 0.2)',
          }}>
            <div className="absolute inset-0 -z-10 rounded-3xl" style={{
              background: 'linear-gradient(135deg, rgba(128, 90, 213, 0.2), rgba(165, 243, 252, 0.1))',
              filter: 'blur(30px) brightness(0.8)',
            }}></div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                {/* E-Commerce Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-10 h-10 text-white"
                >
                  <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z" />
                  <path d="M12 12a4 4 0 1 1 4 4" />
                  <path d="M12 12a4 4 0 1 0 4-4" />
                </svg>
                <h3 className="text-2xl font-semibold">E-Commerce</h3>
              </div>
              {/* Arrow Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-gray-400 transform -rotate-45"
              >
                <line x1="7" x2="17" y1="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </div>
            <p className="text-gray-400 mb-6">
              Creating conversion-focused online stores with seamless checkout experiences.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-700/50 text-gray-400 px-3 py-1 text-sm rounded-full border border-gray-600">WooCommerce Developer</span>
              <span className="bg-gray-700/50 text-gray-400 px-3 py-1 text-sm rounded-full border border-gray-600">Store Design</span>
              <span className="bg-gray-700/50 text-gray-400 px-3 py-1 text-sm rounded-full border border-gray-600">Payment Gateway</span>
              <span className="bg-gray-700/50 text-gray-400 px-3 py-1 text-sm rounded-full border border-gray-600">Page Optimization</span>
            </div>
          </div>

          {/* WordPress Development Card */}
          <div className="p-8 rounded-3xl bg-gray-800/20 backdrop-filter backdrop-blur-sm border border-gray-700/50 shadow-lg relative overflow-hidden" style={{
            boxShadow: '0 0 20px rgba(128, 90, 213, 0.2)',
          }}>
            <div className="absolute inset-0 -z-10 rounded-3xl" style={{
              background: 'linear-gradient(135deg, rgba(128, 90, 213, 0.2), rgba(165, 243, 252, 0.1))',
              filter: 'blur(30px) brightness(0.8)',
            }}></div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                {/* WordPress Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-10 h-10 text-white"
                >
                  <path d="M12 2c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10zm0 1.584c4.63 0 8.416 3.786 8.416 8.416s-3.786 8.416-8.416 8.416-8.416-3.786-8.416-8.416 3.786-8.416 8.416-8.416zm-5.32 2.508c.594-.287 1.25-.436 1.942-.436 2.056 0 3.722 1.666 3.722 3.722v.11c0 1.206-.47 2.302-1.258 3.149l1.45 1.528 1.45-1.528c-.788-.847-1.258-1.943-1.258-3.149v-.11c0-2.056 1.666-3.722 3.722-3.722.693 0 1.349.149 1.943.436l-1.45 1.528-.493-.518.493.518c.95-.992 1.522-2.31 1.522-3.791 0-3.097-2.52-5.617-5.617-5.617-1.574 0-3.01.65-4.043 1.691zm.557 1.838c.683-.679 1.58-.987 2.486-.987 2.112 0 3.824 1.712 3.824 3.824v.122c0 1.137-.514 2.17-1.353 2.924l1.463 1.543 1.463-1.543c-.839-.754-1.353-1.787-1.353-2.924v-.122c0-2.112 1.712-3.824 3.824-3.824.906 0 1.803.308 2.486.987l-1.463 1.543zm3.125 4.381c1.17 0 2.117.947 2.117 2.117 0 1.17-.947 2.117-2.117 2.117-1.17 0-2.117-.947-2.117-2.117 0-1.17.947-2.117 2.117-2.117zm-1.874 1.874c-.55.55-.55 1.442 0 1.992.55.55 1.442.55 1.992 0 .55-.55.55-1.442 0-1.992-.55-.55-1.442-.55-1.992 0z" />
                </svg>
                <h3 className="text-2xl font-semibold">WordPress Development</h3>
              </div>
              {/* Arrow Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-gray-400 transform -rotate-45"
              >
                <line x1="7" x2="17" y1="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </div>
            <p className="text-gray-400 mb-6">
              Building fast, secure, and scalable WordPress sites tailored to your brand.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-700/50 text-gray-400 px-3 py-1 text-sm rounded-full border border-gray-600">WordPress Developer</span>
              <span className="bg-gray-700/50 text-gray-400 px-3 py-1 text-sm rounded-full border border-gray-600">Speed Optimization</span>
              <span className="bg-gray-700/50 text-gray-400 px-3 py-1 text-sm rounded-full border border-gray-600">Custom WordPress Website</span>
              <span className="bg-gray-700/50 text-gray-400 px-3 py-1 text-sm rounded-full border border-gray-600">Elementor</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
