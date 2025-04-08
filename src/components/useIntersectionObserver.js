import { useEffect, useState } from 'react';

const useIntersectionObserver = (options) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.5, ...options } // Cambiar el valor de threshold si se quiere más o menos visibilidad
    );

    const target = document.querySelector(options.target); // Asegúrate de asignar un 'target' al componente
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) observer.unobserve(target);
    };
  }, [options]);

  return isIntersecting;
};

export default useIntersectionObserver;
