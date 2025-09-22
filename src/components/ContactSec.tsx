import React from 'react';
import Image from 'next/image';

const ContactSection: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900 text-white flex flex-col items-center justify-center p-8">
      <p className="text-xs tracking-widest uppercase text-gray-400 mb-2">
        Contact Me
      </p>
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
        Ready to develop your next big thing?
      </h1>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-1">Discord</h2>
          <p className="text-gray-400 mb-4">enzosthvs</p>
          <button className="px-6 py-2 rounded-full font-semibold bg-gradient-to-br from-yellow-400 to-orange-500 text-black shadow-lg hover:from-yellow-500 hover:to-orange-600 transition-all">
            Hit me up on Discord
          </button>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-1">LinkedIn</h2>
          <p className="text-gray-400 mb-4">in/enzosthvs</p>
          <button className="px-6 py-2 rounded-full font-semibold bg-gradient-to-br from-blue-400 to-blue-600 text-white shadow-lg hover:from-blue-500 hover:to-blue-700 transition-all">
            Visit my LinkedIn
          </button>
        </div>
      </div>

      <div className="mt-16 w-32 h-32 relative">
        <Image
          src="/path/to/your/avatar.png" // 🖼️ Replace with your image
          alt="Avatar with a thumbs up"
          layout="fill"
          objectFit="contain"
          unoptimized={true}
        />
      </div>
    </div>
  );
};

export default ContactSection;