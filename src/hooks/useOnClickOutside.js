import { useEffect } from 'react';

// This hook will be used to see if the user clicks outside of DishForm

function useOnClickOutside(ref) {
  useEffect(() => {
    const listener = event => {
      // Check to see if the click is inside of the element we want to use:
      if (!ref.current || ref.current.contains(event.target))
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
