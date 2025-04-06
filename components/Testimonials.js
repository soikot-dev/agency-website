import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper and SwiperSlide
import 'swiper/css';
import 'swiper/css/pagination';

export default function Testimonials() {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-6 sm:px-12 lg:px-16 relative">
      
        
        {/* Testimonial */}
        <div className="flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-6">
          
          {/* Customer Image */}
          <div className="w-full lg:w-1/3">
            <img 
              src="https://via.placeholder.com/150" // Replace with actual image
              alt="Client"
              className="rounded-full w-40 h-40 mx-auto mb-6"
            />
          </div>
          
          {/* Testimonial Quote (Swiper for sliding quotes) */}
          <div className="w-full lg:w-1/2">

            {/* Section Title */}
            <h2 className="text-5xl font-extrabold mb-12">
              Some Of Our Respected <br /> Happy Clients Says
            </h2>
            <Swiper
              slidesPerView={1} // Show 1 slide at a time
              spaceBetween={20} // Space between slides
              pagination={{ clickable: true }} // Pagination for navigation
              className="mySwiper"
            >
              {/* Testimonial Slide 1 */}
              <SwiperSlide>
                <div className="relative bg-gray-800 p-8 rounded-lg shadow-lg">
                  {/* Quote Icon */}
                  <div className="absolute left-0 top-0 text-4xl text-orange-500">
                    <span className="rotate-180">”</span>
                  </div>
                  {/* Testimonial Text */}
                  <p className="text-lg text-gray-300 italic mb-4">
                    "Welcome to our digital agency. We specialize in helping businesses like yours succeed online. From website design and development to digital marketing agency."
                  </p>
                  {/* Client Info */}
                  <div className="flex items-center mt-6">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img 
                        src="https://via.placeholder.com/150" // Replace with actual image
                        alt="Client" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">Delores Olivo</p>
                      <p className="text-gray-400">From USA</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* Testimonial Slide 2 */}
              <SwiperSlide>
                <div className="relative bg-gray-800 p-8 rounded-lg shadow-lg">
                  {/* Quote Icon */}
                  <div className="absolute left-0 top-0 text-4xl text-orange-500">
                    <span className="rotate-180">”</span>
                  </div>
                  {/* Testimonial Text */}
                  <p className="text-lg text-gray-300 italic mb-4">
                    "This agency has completely transformed our online presence. Highly recommend their services for web design and digital marketing."
                  </p>
                  {/* Client Info */}
                  <div className="flex items-center mt-6">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img 
                        src="https://via.placeholder.com/150" // Replace with actual image
                        alt="Client" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">John Doe</p>
                      <p className="text-gray-400">From UK</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
                {/* Testimonial Slide 2 */}
                <SwiperSlide>
                <div className="relative bg-gray-800 p-8 rounded-lg shadow-lg">
                  {/* Quote Icon */}
                  <div className="absolute left-0 top-0 text-4xl text-orange-500">
                    <span className="rotate-180">”</span>
                  </div>
                  {/* Testimonial Text */}
                  <p className="text-lg text-gray-300 italic mb-4">
                    "This agency has completely transformed our online presence. Highly recommend their services for web design and digital marketing."
                  </p>
                  {/* Client Info */}
                  <div className="flex items-center mt-6">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img 
                        src="https://via.placeholder.com/150" // Replace with actual image
                        alt="Client" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">John Doe</p>
                      <p className="text-gray-400">From UK</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
                {/* Testimonial Slide 2 */}
                <SwiperSlide>
                <div className="relative bg-gray-800 p-8 rounded-lg shadow-lg">
                  {/* Quote Icon */}
                  <div className="absolute left-0 top-0 text-4xl text-orange-500">
                    <span className="rotate-180">”</span>
                  </div>
                  {/* Testimonial Text */}
                  <p className="text-lg text-gray-300 italic mb-4">
                    "This agency has completely transformed our online presence. Highly recommend their services for web design and digital marketing."
                  </p>
                  {/* Client Info */}
                  <div className="flex items-center mt-6">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img 
                        src="https://via.placeholder.com/150" // Replace with actual image
                        alt="Client" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">John Doe</p>
                      <p className="text-gray-400">From UK</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
                {/* Testimonial Slide 2 */}
                <SwiperSlide>
                <div className="relative bg-gray-800 p-8 rounded-lg shadow-lg">
                  {/* Quote Icon */}
                  <div className="absolute left-0 top-0 text-4xl text-orange-500">
                    <span className="rotate-180">”</span>
                  </div>
                  {/* Testimonial Text */}
                  <p className="text-lg text-gray-300 italic mb-4">
                    "This agency has completely transformed our online presence. Highly recommend their services for web design and digital marketing."
                  </p>
                  {/* Client Info */}
                  <div className="flex items-center mt-6">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img 
                        src="https://via.placeholder.com/150" // Replace with actual image
                        alt="Client" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">John Doe</p>
                      <p className="text-gray-400">From UK</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* Add more slides as needed */}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
