import { useEffect, useState } from 'react';

export default function useScreenSize() {
  const [screen, setScreen] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const update = () => {
    setScreen((prevState) => {
      return {
        ...prevState,
        height: window.innerHeight,
        width: window.innerWidth,
      };
    });
  };

  useEffect(() => {
    window.addEventListener('resize', () => update());
    return () => {
      window.removeEventListener('resize', () => null);
    };
  }, []);

  return { ...screen };
}
