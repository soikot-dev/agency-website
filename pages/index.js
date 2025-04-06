import { useEffect } from 'react';
import gsap from 'gsap';
import Navbar from '../components/Navbar.js';
import Hero from '../components/Hero.js';
import Services from '../components/Services.js';
import CaseStudies from '../components/CaseStudies.js';
import Stats from '../components/Stats.js';
import Testimonials from '../components/Testimonials.js';
import Team from '../components/Team.js';
import Footer from '../components/Footer.js';
import WhyChooseUs from '@components/WhyChooseUs.js';
import Awards from '@components/Awards.js';
import Clients from '@components/Clients.js';
import Blogs from '@components/Blogs.js';
import Contact from '@components/Contact.js';

export default function Home() {
  useEffect(() => {
    gsap.from('h1', { opacity: 0, y: -50, duration: 1 });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs/>
      <CaseStudies />
      <Stats />
      <Awards/>
      <Testimonials />
      <Team />
      <Clients/>
      <Blogs/>
      <Contact/>
      <Footer />
    </div>
  );
}
