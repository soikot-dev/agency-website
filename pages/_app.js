// pages/_app.js
import 'swiper/css'; // Import Swiper styles globally
import 'swiper/css/pagination'; // Import pagination styles
import '../styles/globals.css'; // Import your global styles
import BackToTopButton from '../components/BackToTopButton'; // Import the BackToTopButton component

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <BackToTopButton />
    </>
  );
}

export default MyApp;
