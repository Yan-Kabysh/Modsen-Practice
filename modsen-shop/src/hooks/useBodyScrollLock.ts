import { useEffect } from 'react';

const useBodyScrollLock = (isOpen: boolean) => {
  useEffect(() => {
    console.log('useBodyScrollLock effect', { isOpen });
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      console.log('Scroll locked');
    } else {
      document.body.style.overflow = '';
      console.log('Scroll unlocked');
    }

    return () => {
      document.body.style.overflow = '';
      console.log('Cleanup: Scroll unlocked');
    };
  }, [isOpen]);
};

export default useBodyScrollLock;
