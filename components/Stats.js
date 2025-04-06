import React from 'react';
import CountUp from 'react-countup';

export default function Stats() {
  return (
    <section id="stats" className="py-16 text-white">
      <div className="container mx-auto text-center px-4">
        {/* <h2 className="text-5xl font-extrabold mb-12">
          Our Achievements
        </h2> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Stats Item 1 */}
          <div className="flex flex-col justify-center items-center">
            <CountUp 
              start={0} 
              end={91000} 
              duration={2.5} 
              formattingFn={(value) => value.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',')} // Adds comma to number
              suffix="K" // Adds K for thousands
              className="text-7xl font-extrabold text-orange-500 mb-4" 
            />
            <p className="text-xl font-semibold text-gray-400">Project Completed</p>
          </div>

          {/* Stats Item 2 */}
          <div className="flex flex-col justify-center items-center">
            <CountUp 
              start={0} 
              end={2000} 
              duration={2.5} 
              formattingFn={(value) => value.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',')} // Adds comma to number
              suffix="K" // Adds K for thousands
              className="text-7xl font-extrabold text-orange-500 mb-4" 
            />
            <p className="text-xl font-semibold text-gray-400">Happy Customers</p>
          </div>

          {/* Stats Item 3 */}
          <div className="flex flex-col justify-center items-center">
            <CountUp 
              start={0} 
              end={21} 
              duration={2.5} 
              className="text-7xl font-extrabold text-orange-500 mb-4" 
            />
            <p className="text-xl font-semibold text-gray-400">Years Experience</p>
          </div>

          {/* Stats Item 4 */}
          <div className="flex flex-col justify-center items-center">
            <CountUp 
              start={0} 
              end={42} 
              duration={2.5} 
              formattingFn={(value) => value.toFixed(0)} // Keeps the value as integer
              className="text-7xl font-extrabold text-orange-500 mb-4" 
            />
            <p className="text-xl font-semibold text-gray-400">Awards Achievement</p>
          </div>
        </div>
      </div>
    </section>
  );
}
