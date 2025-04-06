import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css';
import 'swiper/css/pagination'; 
import { Pagination } from 'swiper/modules';

export default function Services() {
  return (
    <section id="services" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto text-center mb-12 px-4"> {/* Centered content with no extra left space */}
        <h2 className="text-5xl sm:text-6xl font-extrabold mb-6">
          Digital Marketing Strategy <br />
          Transformation
        </h2>
      </div>

      <div className="px-4 py-8 ml-[130px]">
        <Swiper
          slidesPerView={3.5} // Show 3.5 cards at once
          spaceBetween={20} // Space between cards
          grabCursor={true}
          loop={true} // Infinity loop (no limits on the slides)
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {/* 1st Card */}
          <SwiperSlide className="bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col justify-between hover:bg-gray-700 transition-all">
            <h3 className="font-semibold text-lg mb-4">Digital Marketing</h3>
            <p className="text-gray-400 text-sm mb-6">Welcome to our digital agency! We specialize in helping businesses like yours succeed online.</p>
            <button className="bg-orange-500 text-white py-2 px-6 rounded-full text-sm transition-all hover:bg-orange-400">
              View More
            </button>
          </SwiperSlide>

          {/* 2nd Card */}
          <SwiperSlide className="bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col justify-between hover:bg-gray-700 transition-all">
            <h3 className="font-semibold text-lg mb-4">SEO Optimization</h3>
            <p className="text-gray-400 text-sm mb-6">We optimize websites to rank higher and drive organic traffic, improving your online visibility.</p>
            <button className="bg-orange-500 text-white py-2 px-6 rounded-full text-sm transition-all hover:bg-orange-400">
              View More
            </button>
          </SwiperSlide>

          {/* 3rd Card */}
          <SwiperSlide className="bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col justify-between hover:bg-gray-700 transition-all">
            <h3 className="font-semibold text-lg mb-4">Social Media Marketing</h3>
            <p className="text-gray-400 text-sm mb-6">Boost your social presence and engage with your target audience to build brand loyalty.</p>
            <button className="bg-orange-500 text-white py-2 px-6 rounded-full text-sm transition-all hover:bg-orange-400">
              View More
            </button>
          </SwiperSlide>

          {/* 4th Card */}
          <SwiperSlide className="bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col justify-between hover:bg-gray-700 transition-all">
            <h3 className="font-semibold text-lg mb-4">PPC Advertising</h3>
            <p className="text-gray-400 text-sm mb-6">Drive targeted traffic to your site with pay-per-click advertising strategies that work.</p>
            <button className="bg-orange-500 text-white py-2 px-6 rounded-full text-sm transition-all hover:bg-orange-400">
              View More
            </button>
          </SwiperSlide>

          {/* 5th Card */}
          <SwiperSlide className="bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col justify-between hover:bg-gray-700 transition-all">
            <h3 className="font-semibold text-lg mb-4">Branding & Identity</h3>
            <p className="text-gray-400 text-sm mb-6">Establish a powerful brand identity that resonates with your audience and elevates your business.</p>
            <button className="bg-orange-500 text-white py-2 px-6 rounded-full text-sm transition-all hover:bg-orange-400">
              View More
            </button>
          </SwiperSlide>

          {/* 6th Card */}
          <SwiperSlide className="bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col justify-between hover:bg-gray-700 transition-all">
            <h3 className="font-semibold text-lg mb-4">Content Marketing</h3>
            <p className="text-gray-400 text-sm mb-6">Create compelling content that drives engagement and connects with your target market.</p>
            <button className="bg-orange-500 text-white py-2 px-6 rounded-full text-sm transition-all hover:bg-orange-400">
              View More
            </button>
          </SwiperSlide>

        </Swiper>
      </div>
    </section>
  );
}
