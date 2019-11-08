import { useEffect } from 'react';

// This hook will be used to see if the user clicks outside of DishForm

function useOnClickOutside(ref) {
  useEffect(() => {
    console.log('ref.current', ref.current);
    // Cleanup:
    return () => {};
  }, []);
}

export default useOnClickOutside;
