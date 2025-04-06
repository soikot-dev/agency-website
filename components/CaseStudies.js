import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css'; 
import 'swiper/css/pagination'; 
import { Pagination } from 'swiper/modules';
import { FaArrowRight } from 'react-icons/fa';

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-6 sm:px-12 lg:px-16 relative">
        <div className="text-orange-500 text-xl font-semibold">Case Study</div>
        <h2 className="text-5xl font-extrabold text-start leading-tight mt-2">
          Some Recent Case Study We <br /> Successfully Done
        </h2>
      </div>

      <div className="px-4 py-8 ml-[130px]">
        <Swiper
          slidesPerView={3.5} // Show 3.5 cards at once
          spaceBetween={20} // Space between cards
          loop={true}
          grabCursor={true}
          pagination={{
            clickable: true, // Enables pagination dots
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {/* Case Study Slides */}
          <SwiperSlide className="bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col justify-between hover:bg-gray-700 transition-all">
            <img src="/case-study1.jpg" alt="Case Study 1" className="w-full h-auto object-cover mb-6 rounded-lg" />
            <h3 className="font-semibold text-lg mb-4">Project 1</h3>
            <p className="text-gray-400 text-sm mb-6">We successfully executed a digital transformation for our client.</p>
            <button className="bg-orange-500 text-white py-2 px-6 rounded-full text-sm transition-all hover:bg-orange-400">
              View More <FaArrowRight className="inline ml-2" />
            </button>
          </SwiperSlide>
          <SwiperSlide className="bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col justify-between hover:bg-gray-700 transition-all">
            <img src="/case-study1.jpg" alt="Case Study 1" className="w-full h-auto object-cover mb-6 rounded-lg" />
            <h3 className="font-semibold text-lg mb-4">Project 1</h3>
            <p className="text-gray-400 text-sm mb-6">We successfully executed a digital transformation for our client.</p>
            <button className="bg-orange-500 text-white py-2 px-6 rounded-full text-sm transition-all hover:bg-orange-400">
              View More <FaArrowRight className="inline ml-2" />
            </button>
          </SwiperSlide>
          <SwiperSlide className="bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col justify-between hover:bg-gray-700 transition-all">
            <img src="/case-study1.jpg" alt="Case Study 1" className="w-full h-auto object-cover mb-6 rounded-lg" />
            <h3 className="font-semibold text-lg mb-4">Project 1</h3>
            <p className="text-gray-400 text-sm mb-6">We successfully executed a digital transformation for our client.</p>
            <button className="bg-orange-500 text-white py-2 px-6 rounded-full text-sm transition-all hover:bg-orange-400">
              View More <FaArrowRight className="inline ml-2" />
            </button>
          </SwiperSlide>
          <SwiperSlide className="bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col justify-between hover:bg-gray-700 transition-all">
            <img src="/case-study1.jpg" alt="Case Study 1" className="w-full h-auto object-cover mb-6 rounded-lg" />
            <h3 className="font-semibold text-lg mb-4">Project 1</h3>
            <p className="text-gray-400 text-sm mb-6">We successfully executed a digital transformation for our client.</p>
            <button className="bg-orange-500 text-white py-2 px-6 rounded-full text-sm transition-all hover:bg-orange-400">
              View More <FaArrowRight className="inline ml-2" />
            </button>
          </SwiperSlide>
          <SwiperSlide className="bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col justify-between hover:bg-gray-700 transition-all">
            <img src="/case-study1.jpg" alt="Case Study 1" className="w-full h-auto object-cover mb-6 rounded-lg" />
            <h3 className="font-semibold text-lg mb-4">Project 1</h3>
            <p className="text-gray-400 text-sm mb-6">We successfully executed a digital transformation for our client.</p>
            <button className="bg-orange-500 text-white py-2 px-6 rounded-full text-sm transition-all hover:bg-orange-400">
              View More <FaArrowRight className="inline ml-2" />
            </button>
          </SwiperSlide>
          <SwiperSlide className="bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col justify-between hover:bg-gray-700 transition-all">
            <img src="/case-study1.jpg" alt="Case Study 1" className="w-full h-auto object-cover mb-6 rounded-lg" />
            <h3 className="font-semibold text-lg mb-4">Project 1</h3>
            <p className="text-gray-400 text-sm mb-6">We successfully executed a digital transformation for our client.</p>
            <button className="bg-orange-500 text-white py-2 px-6 rounded-full text-sm transition-all hover:bg-orange-400">
              View More <FaArrowRight className="inline ml-2" />
            </button>
          </SwiperSlide>
          <SwiperSlide className="bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col justify-between hover:bg-gray-700 transition-all">
            <img src="/case-study1.jpg" alt="Case Study 1" className="w-full h-auto object-cover mb-6 rounded-lg" />
            <h3 className="font-semibold text-lg mb-4">Project 1</h3>
            <p className="text-gray-400 text-sm mb-6">We successfully executed a digital transformation for our client.</p>
            <button className="bg-orange-500 text-white py-2 px-6 rounded-full text-sm transition-all hover:bg-orange-400">
              View More <FaArrowRight className="inline ml-2" />
            </button>
          </SwiperSlide>
          
        </Swiper>
      </div>

      {/* View All Case Study Button */}
      <div className="text-center mt-10">
        <button className="bg-orange-600 text-white py-3 px-8 rounded-full text-lg font-semibold shadow-lg hover:bg-orange-500 transition-all">
          View All Case Study
          <FaArrowRight className="inline ml-2" />
        </button>
      </div>
    </section>
  );
}
