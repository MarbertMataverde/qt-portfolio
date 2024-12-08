import Image from "next/image";
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="h-screen overflow-hidden text-gray-800 relative">
      {/* Navigation Bar */}
      <nav className="absolute top-0 left-0 right-0 px-3 sm:px-6 md:px-8 lg:px-16 py-4 md:py-6 flex justify-between items-center z-50 bg-transparent backdrop-blur-sm">
        <div className="w-[80px] sm:w-[90px] md:w-[100px]">
          <div className="p-2">
            <span className="text-xl md:text-2xl lg:text-3xl font-bold text-[#f7a4b2]">QT</span>
            <span className="text-xl md:text-2xl lg:text-3xl font-bold text-[#f7a4b2]">.</span>
          </div>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2">
          {/* Center element if needed */}
        </div>
        <div className="flex gap-2 w-[80px] sm:w-[90px] md:w-[100px] justify-end">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
             className="bg-[#f7a4b2] p-2 rounded-full w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center hover:bg-[#f48a9c] transition-colors">
            <FaLinkedin size={14} className="text-white sm:hidden" />
            <FaLinkedin size={16} className="text-white hidden sm:block md:hidden" />
            <FaLinkedin size={18} className="text-white hidden md:block" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
             className="bg-[#f7a4b2] p-2 rounded-full w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center hover:bg-[#f48a9c] transition-colors">
            <FaInstagram size={14} className="text-white sm:hidden" />
            <FaInstagram size={16} className="text-white hidden sm:block md:hidden" />
            <FaInstagram size={18} className="text-white hidden md:block" />
          </a>
        </div>
      </nav>

      {/* Text Sections (Behind) */}
      <div className="absolute inset-0 px-3 sm:px-6 md:px-8 lg:px-16 z-0">
        {/* Left Text */}
        <div className="absolute left-[5%] top-[65%]">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
            Hi There<br />
            <span className="text-[#f7a4b2]">I'm Quezelle</span>
          </h1>
        </div>

        {/* Right Text */}
        <div className="absolute right-[5%] top-[65%] max-w-[500px]">
          <div className="space-y-3">
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              A Medical Virtual Assistant with 2 years of experience in healthcare digital solutions.
            </p>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Specializing comprehensive medical administrative roles including Medical Receptionist, Insurance & Eligibility Verification, Authorization Coordination, Patient Scheduling, Non-Clinical Quality Assurance Management, Medical Records Coordination, and Patient Intake Coordination.
            </p>
          </div>
        </div>
      </div>

      {/* Center Image (Front) */}
      <div className="absolute inset-0 flex items-end justify-center z-10">
        <div className="relative w-[1600px] h-[95vh] max-h-[1200px]">
          <Image
            src="/images/hero-image.webp"
            alt="Medical Assistant Hero"
            fill
            className="object-contain object-bottom"
            priority
          />
        </div>
      </div>
    </main>
  );
}
