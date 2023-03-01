/* eslint-disable linebreak-style */
import { useState, useEffect } from 'react';

function useResize() {
  const [size, setSize] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
    function setWindowSize() {
      setSize(window.innerWidth);
    }

    window.addEventListener('resize', setWindowSize);

    return () => {
      window.removeEventListener('resize', setWindowSize);
    };
  }, []);

  return { size };
}

export default useResize;
