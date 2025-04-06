import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination'; 
import { Pagination } from 'swiper/modules';

export default function Blogs() {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto text-center mb-12 px-6">
        {/* Section Title */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-5xl font-extrabold">
            Our Excellence Team That Can <br /> Digitalize Your Brand
          </h2>
          <button className="bg-orange-500 text-white py-2 px-6 rounded-full text-lg hover:bg-orange-400 transition-all">
            View All Blogs → 
          </button>
        </div>
      </div>

      <div className="px-4 py-8 ml-[130px]">
        <Swiper
          slidesPerView={3.5} // One blog per view on smaller screens
          spaceBetween={20} // Space between cards
          loop={true} // Loop through the slides
          autoplay={{ delay: 3000, disableOnInteraction: false }} // Automatic sliding
          breakpoints={{
            640: {
              slidesPerView: 2, // 2 blogs per view on medium screens
            },
            1024: {
              slidesPerView: 3, // 3 blogs per view on larger screens
            },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {/* Blog 1 */}
          <SwiperSlide className="bg-gray-800 p-8 rounded-lg shadow-lg hover:bg-gray-700 transition-all">
            <div className="relative">
              <img
                src="https://via.placeholder.com/600x400" // Replace with actual image
                alt="Blog 1"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-4 text-center">
                <h3 className="text-xl font-bold text-white mb-4">Reasons Business Needs a Agency</h3>
                <p className="text-gray-400 text-sm">The art of creative thinking could be a blog that explores the various ways in which people.</p>
              </div>
            </div>
            <button className="bg-orange-500 text-white py-2 px-6 rounded-full text-sm transition-all hover:bg-orange-400 mt-6 w-full">
              View More
            </button>
          </SwiperSlide>

          {/* Blog 2 */}
          <SwiperSlide className="bg-gray-800 p-8 rounded-lg shadow-lg hover:bg-gray-700 transition-all">
            <div className="relative">
              <img
                src="https://via.placeholder.com/600x400" // Replace with actual image
                alt="Blog 2"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-4 text-center">
                <h3 className="text-xl font-bold text-white mb-4">How a Creative Agency Can Help?</h3>
                <p className="text-gray-400 text-sm">The art of creative thinking could be a blog that explores the various ways in which people.</p>
              </div>
            </div>
            <button className="bg-orange-500 text-white py-2 px-6 rounded-full text-sm transition-all hover:bg-orange-400 mt-6 w-full">
              View More
            </button>
          </SwiperSlide>

          {/* Blog 3 */}
          <SwiperSlide className="bg-gray-800 p-8 rounded-lg shadow-lg hover:bg-gray-700 transition-all">
            <div className="relative">
              <img
                src="https://via.placeholder.com/600x400" // Replace with actual image
                alt="Blog 3"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-4 text-center">
                <h3 className="text-xl font-bold text-white mb-4">Maximizing Your Marketing Budget</h3>
                <p className="text-gray-400 text-sm">The art of creative thinking could be a blog that explores the various ways in which people.</p>
              </div>
            </div>
            <button className="bg-orange-500 text-white py-2 px-6 rounded-full text-sm transition-all hover:bg-orange-400 mt-6 w-full">
              View More
            </button>
          </SwiperSlide>

          {/* Blog 4 */}
          <SwiperSlide className="bg-gray-800 p-8 rounded-lg shadow-lg hover:bg-gray-700 transition-all">
            <div className="relative">
              <img
                src="https://via.placeholder.com/600x400" // Replace with actual image
                alt="Blog 4"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-4 text-center">
                <h3 className="text-xl font-bold text-white mb-4">Understanding Digital Marketing Trends</h3>
                <p className="text-gray-400 text-sm">Learn about the latest trends in digital marketing and how they can help your business grow.</p>
              </div>
            </div>
            <button className="bg-orange-500 text-white py-2 px-6 rounded-full text-sm transition-all hover:bg-orange-400 mt-6 w-full">
              View More
            </button>
          </SwiperSlide>

        </Swiper>
      </div>
    </section>
  );
}
