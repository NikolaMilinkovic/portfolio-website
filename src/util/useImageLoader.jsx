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
          const onLoadOrError = () => {
            img.removeEventListener('load', onLoadOrError);
            img.removeEventListener('error', onLoadOrError);
            resolve();
          };
          img.addEventListener('load', onLoadOrError);
          img.addEventListener('error', onLoadOrError);
          // setTimeout(() => {
          //   resolve();
          // }, 500);
        }
      }));

      Promise.all(imagePromises).then(() => {
        setTimeout(() => {
          setLoading(false);
        }, 100);
      });
    };

    handleImageLoad(); // Call the handler immediately in case images are already loaded

    window.addEventListener('load', handleImageLoad);

    return () => {
      const images = document.querySelectorAll('img');
      images.forEach((img) => {
        const onLoadOrError = () => {
          img.removeEventListener('load', onLoadOrError);
          img.removeEventListener('error', onLoadOrError);
        };
      });
      window.removeEventListener('load', handleImageLoad);
    };
  }, []);

  return loading;
};

export default useImageLoader;
