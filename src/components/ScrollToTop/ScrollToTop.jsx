import React, { useState, useEffect } from 'react';
import "./ScrollToTop.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) setVisible(true);
      else setVisible(false);
    });
  }, []);

  return (
    <>
      {visible && 
        <div className="scroll-to-top" onClick={() => window.scrollTo(0,0)}>
          <FontAwesomeIcon icon={faChevronUp} className="scroll-icon" />
        </div>
      }
    </>
  )
}

export default ScrollToTop;