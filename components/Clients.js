import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper';

export default function Clients() {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto text-center px-6">
        {/* Section Title */}
        <h2 className="text-2xl font-extrabold mb-6">
          130+ Our Clients & Partners We Are Working Together
        </h2>

        {/* Clients Slider */}
        <Swiper
          slidesPerView={2} // Shows 2 clients at a time
          spaceBetween={30} // Space between slides
          loop={true} // Make it loop
          autoplay={{
            delay: 2000, // 2 seconds delay between slide transitions
            disableOnInteraction: false, // Continue sliding even if interacted
          }}
          breakpoints={{
            640: {
              slidesPerView: 3, // 3 clients per view on medium screens
            },
            1024: {
              slidesPerView: 5, // 5 clients per view on larger screens
            },
          }}
        >
          {/* Client Logo 1 */}
          <SwiperSlide>
            <img
              src="https://via.placeholder.com/150" // Replace with the actual logo
              alt="Client 1"
              className="w-full h-auto object-contain"
            />
          </SwiperSlide>

          {/* Client Logo 2 */}
          <SwiperSlide>
            <img
              src="https://via.placeholder.com/150" // Replace with the actual logo
              alt="Client 2"
              className="w-full h-auto object-contain"
            />
          </SwiperSlide>

          {/* Client Logo 3 */}
          <SwiperSlide>
            <img
              src="https://via.placeholder.com/150" // Replace with the actual logo
              alt="Client 3"
              className="w-full h-auto object-contain"
            />
          </SwiperSlide>

          {/* Client Logo 4 */}
          <SwiperSlide>
            <img
              src="https://via.placeholder.com/150" // Replace with the actual logo
              alt="Client 4"
              className="w-full h-auto object-contain"
            />
          </SwiperSlide>

          {/* Client Logo 5 */}
          <SwiperSlide>
            <img
              src="https://via.placeholder.com/150" // Replace with the actual logo
              alt="Client 5"
              className="w-full h-auto object-contain"
            />
          </SwiperSlide>

          {/* Client Logo 6 */}
          <SwiperSlide>
            <img
              src="https://via.placeholder.com/150" // Replace with the actual logo
              alt="Client 6"
              className="w-full h-auto object-contain"
            />
          </SwiperSlide>

          {/* Client Logo 7 */}
          <SwiperSlide>
            <img
              src="https://via.placeholder.com/150" // Replace with the actual logo
              alt="Client 7"
              className="w-full h-auto object-contain"
            />
          </SwiperSlide>

          {/* Add more client logos as needed */}
        </Swiper>
      </div>
    </section>
  );
}
