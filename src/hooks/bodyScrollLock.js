import { useLayoutEffect } from 'react';

// "Cleanup" can be thought of similarly to componentWillUnmount

function useBodyScrollLock() {
  useLayoutEffect(() => {
    const originalOverflow = window.getComputedStyle(document.body).overflow;

    document.body.style.overflow = 'hidden';

    // Cleanup:
    // return function cleanup() {
    //   document.body.style.overflow = '';
    // };

    // Cleanup w/ arrow function
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);
}

export default useBodyScrollLock;
