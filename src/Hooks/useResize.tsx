/* eslint-disable linebreak-style */
import { useState, useEffect } from 'react';

function useResize() {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    function setWindowSize() {
      setSize(window.innerWidth);
    }

    window.addEventListener('resize', setWindowSize);

    return () => {
      window.removeEventListener('resize', setWindowSize);
    };
  }, [size]);

  return { size };
}

export default useResize;
