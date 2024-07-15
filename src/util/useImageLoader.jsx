import { useEffect, useState } from 'react';

const useImageLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleImageLoad = () => {
      const images = document.querySelectorAll('img');
      const imagePromises = Array.from(images).map((img) => new Promise((resolve) => {
        if (img.complete) {
          resolve();
        } else {
          img.addEventListener('load', resolve);
          img.addEventListener('error', resolve); // Resolve on error as well
        }
      }));

      Promise.all(imagePromises).then(() => {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      });
    };

    window.addEventListener('load', handleImageLoad);

    return () => {
      const images = document.querySelectorAll('img');
      images.forEach((img) => {
        img.removeEventListener('load', handleImageLoad);
        img.removeEventListener('error', handleImageLoad);
      });
      window.removeEventListener('load', handleImageLoad);
    };
  }, []);

  return loading;
};

export default useImageLoader;
