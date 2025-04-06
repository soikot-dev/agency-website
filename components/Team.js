import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css';
import 'swiper/css/pagination'; 
import { Autoplay } from 'swiper';

export default function Team() {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto text-center px-6">
        {/* Section Title */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-5xl font-extrabold">
            Our Excellence Team That Can <br /> Digitalize Your Brand
          </h2>
          <button className="bg-orange-500 text-white py-2 px-6 rounded-full text-lg hover:bg-orange-400 transition-all">
            View All Members → 
          </button>
        </div>

        {/* Team Members Slider */}
        <Swiper
          slidesPerView={1} // One member per view on smaller screens
          spaceBetween={20} // Space between each slide
          loop={true} // Loop through the slides
          autoplay={{ delay: 3000, disableOnInteraction: false }} // Automatic sliding
          breakpoints={{
            640: {
              slidesPerView: 2, // 2 members per view on medium screens
            },
            1024: {
              slidesPerView: 4, // 4 members per view on larger screens
            },
          }}
        >
          {/* Member 1 */}
          <SwiperSlide>
            <div className="relative group">
              <img
                src="https://via.placeholder.com/400" // Replace with actual image
                alt="Bruce Stewart"
                className="w-full h-80 object-cover rounded-lg"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center transform group-hover:translate-y-16 transition-all duration-300">
                {/* Vertical Text */}
                <div className="text-center transform rotate-90 group-hover:rotate-0 transition-all duration-300 text-white">
                  <h3 className="text-xl font-bold">Bruce Stewart</h3>
                  <p className="text-sm">PHP Developer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Member 2 */}
          <SwiperSlide>
            <div className="relative group">
              <img
                src="https://via.placeholder.com/400" // Replace with actual image
                alt="Joseph Whorton"
                className="w-full h-80 object-cover rounded-lg"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center transform group-hover:translate-y-16 transition-all duration-300">
                {/* Vertical Text */}
                <div className="text-center transform rotate-90 group-hover:rotate-0 transition-all duration-300 text-white">
                  <h3 className="text-xl font-bold">Joseph Whorton</h3>
                  <p className="text-sm">UI/UX Designer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Member 3 */}
          <SwiperSlide>
            <div className="relative group">
              <img
                src="https://via.placeholder.com/400" // Replace with actual image
                alt="Gregory Terrell"
                className="w-full h-80 object-cover rounded-lg"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center transform group-hover:translate-y-16 transition-all duration-300">
                {/* Vertical Text */}
                <div className="text-center transform rotate-90 group-hover:rotate-0 transition-all duration-300 text-white">
                  <h3 className="text-xl font-bold">Gregory Terrell</h3>
                  <p className="text-sm">Web Developer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Member 4 */}
          <SwiperSlide>
            <div className="relative group">
              <img
                src="https://via.placeholder.com/400" // Replace with actual image
                alt="Andrew Lopeza"
                className="w-full h-80 object-cover rounded-lg"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center transform group-hover:translate-y-16 transition-all duration-300">
                {/* Vertical Text */}
                <div className="text-center transform rotate-90 group-hover:rotate-0 transition-all duration-300 text-white">
                  <h3 className="text-xl font-bold">Andrew Lopeza</h3>
                  <p className="text-sm">UX Sketch Designer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* Member 4 */}
          <SwiperSlide>
            <div className="relative group">
              <img
                src="https://via.placeholder.com/400" // Replace with actual image
                alt="Andrew Lopeza"
                className="w-full h-80 object-cover rounded-lg"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center transform group-hover:translate-y-16 transition-all duration-300">
                {/* Vertical Text */}
                <div className="text-center transform rotate-90 group-hover:rotate-0 transition-all duration-300 text-white">
                  <h3 className="text-xl font-bold">Andrew Lopeza</h3>
                  <p className="text-sm">UX Sketch Designer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* Member 4 */}
          <SwiperSlide>
            <div className="relative group">
              <img
                src="https://via.placeholder.com/400" // Replace with actual image
                alt="Andrew Lopeza"
                className="w-full h-80 object-cover rounded-lg"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center transform group-hover:translate-y-16 transition-all duration-300">
                {/* Vertical Text */}
                <div className="text-center transform rotate-90 group-hover:rotate-0 transition-all duration-300 text-white">
                  <h3 className="text-xl font-bold">Andrew Lopeza</h3>
                  <p className="text-sm">UX Sketch Designer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          
        </Swiper>
      </div>
    </section>
  );
}
