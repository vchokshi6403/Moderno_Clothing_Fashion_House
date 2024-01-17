import React,{useState,useEffect} from 'react'
import './backtoTop.css'

function BackToTop() {
    const [isVisible,setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 100) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };
    
  return (
   <button
      className={`back-to-top-btn ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      title="Back to Top">
      ↑
    </button>
  )
}

export default BackToTop