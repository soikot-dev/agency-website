import React, { useState } from 'react';

export default function Awards() {
  const [hovered, setHovered] = useState(null);

  const awards = [
    {
      name: 'IOS App Design Award',
      description: 'We specialize in helping businesses like yours succeed online. From website design and development to digital marketing and advertising, we have the tools.',
      icon: '/path-to-ios-icon.png',  // Replace with actual icon
      image: '/path-to-ios-image.png', // Replace with actual image
      platform: 'Dribbble', // Replace with actual platform
    },
    {
      name: 'Elite Author Award',
      description: 'We specialize in helping businesses like yours succeed online. From website design and development to digital marketing and advertising, we have the tools.',
      icon: '/path-to-elite-author-icon.png', // Replace with actual icon
      image: '/path-to-elite-author-image.png', // Replace with actual image
      platform: 'Envato', // Replace with actual platform
    },
    {
      name: 'CSS Design Award',
      description: 'We specialize in helping businesses like yours succeed online. From website design and development to digital marketing and advertising, we have the tools.',
      icon: '/path-to-css-icon.png', // Replace with actual icon
      image: '/path-to-css-image.png', // Replace with actual image
      platform: 'Awwward', // Replace with actual platform
    },
  ];

  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-5xl font-extrabold mb-12">Recognizing Excellence Our Award Winning Work</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {awards.map((award, index) => (
            <div
              key={index}
              className="relative p-6 bg-black rounded-lg shadow-lg group cursor-pointer hover:bg-gray-800"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Award Icon and Name */}
              <div className="flex items-center space-x-6">
                <img src={award.icon} alt={award.name} className="w-16 h-16"/>
                <div>
                  <h3 className="text-xl font-semibold">{award.name}</h3>
                  <p className="text-gray-400 text-sm">{award.description}</p>
                </div>
              </div>

              {/* Award Image */}
              {hovered === index && (
                <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
                  <img src={award.image} alt="Award Image" className="max-w-full max-h-full object-cover" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Platform Section */}
        <div className="flex justify-center mt-12 space-x-6">
          {awards.map((award, index) => (
            <div key={index} className="bg-black p-6 rounded-lg shadow-lg text-center">
              <p className="text-xl font-semibold">{award.platform}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
