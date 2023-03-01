/* eslint-disable linebreak-style */
import { useState } from 'react';

function useResize() {
  const [size, setSize] = useState(window.innerWidth);

  function setWindowSize() {
    setSize(window.innerWidth);
  }

  window.addEventListener('resize', setWindowSize);

  () => {
    window.removeEventListener('resize', setWindowSize);
  };

  return { size };
}

export default useResize;
