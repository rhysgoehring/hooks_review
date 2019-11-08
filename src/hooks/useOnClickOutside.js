import { useEffect } from 'react';

// This hook will be used to see if the user clicks outside of DishForm

function useOnClickOutside(ref) {
  useEffect(() => {
    const listener = () => {
      console.log('ref.current', ref.current);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    // Cleanup:
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, []);
}

export default useOnClickOutside;
