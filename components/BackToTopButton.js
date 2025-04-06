// components/BackToTopButton.js
import { useEffect, useState } from 'react';

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  // Show button when scroll position is greater than 300px
  const checkScrollPosition = () => {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollPosition);
    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    showButton && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-400 transition-all z-50"
        aria-label="Back to Top"
      >
        ↑
      </button>
    )
  );
};

export default BackToTopButton;
