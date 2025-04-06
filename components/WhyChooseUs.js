import { FaArrowRight } from "react-icons/fa";

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-black text-white py-20 px-6 md:px-12 lg:px-20">
      <div className="container mx-auto px-6 sm:px-12 lg:px-16 relative">
        {/* Section Title and Description */}
        <div className="flex flex-col lg:flex-row items-start mb-10">
          {/* Left Section (Title) */}
          <div className="lg:w-[700px] mb-8 lg:mb-0">
            <div className="text-orange-500 text-xl font-semibold">Why Choose Us</div>
            <h2 className="text-5xl font-extrabold text-start leading-snug mt-2">
              <span className="block mb-4">Maximizing Your Online</span>
              <span className="block mb-4">Presence Digital Marketing</span>
              <span className="block">Mastery</span>
            </h2>
            <p className="text-gray-400 text-lg mt-4">
              Welcome to our digital agency! We specialize in helping businesses like yours succeed online. From website design and development to digital marketing and advertising, we have the tools.
            </p>
          </div>

          {/* Right Section (Description) */}
          <div className="flex flex-col lg:w-1/3 mt-8 lg:mt-0 ml-auto">
            {/* Clean Code Card (Aligned to the right end) */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg group hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between h-full">
              <div className="flex items-start mb-4">
                <h3 className="text-xl font-semibold text-white">Clean Code</h3>
              </div>
              <p className="text-gray-400 mb-6">
                Award Winning Quality <br /> Digital of the day Mobile app excellence
              </p>
              <div className="flex justify-end">
                <FaArrowRight className="text-orange-500" size={20} />
              </div>
            </div>
          </div>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Card 1 */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg group hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between h-full">
            <div className="flex items-start mb-4">
              <h3 className="text-xl font-semibold text-white">Unique Design</h3>
            </div>
            <p className="text-gray-400 mb-6">
              Award Winning Quality <br /> Digital of the day Mobile app excellence
            </p>
            <div className="flex justify-end">
              <FaArrowRight className="text-orange-500" size={20} />
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg group hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between h-full">
            <div className="flex items-start mb-4">
              <h3 className="text-xl font-semibold text-white">User Testing</h3>
            </div>
            <p className="text-gray-400 mb-6">
              Award Winning Quality <br /> Digital of the day Mobile app excellence
            </p>
            <div className="flex justify-end">
              <FaArrowRight className="text-orange-500" size={20} />
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg group hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between h-full">
            <div className="flex items-start mb-4">
              <h3 className="text-xl font-semibold text-white">SEO Marketing</h3>
            </div>
            <p className="text-gray-400 mb-6">
              Award Winning Quality <br /> Digital of the day Mobile app excellence
            </p>
            <div className="flex justify-end">
              <FaArrowRight className="text-orange-500" size={20} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
