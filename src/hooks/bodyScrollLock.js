import { useLayoutEffect } from 'react';

// "Cleanup" can be thought of similarly to componentWillUnmount

function useBodyScrollLock() {
  useLayoutEffect(() => {
    document.body.style.overflow = 'hidden';

    // Cleanup:
    // return function cleanup() {
    //   document.body.style.overflow = '';
    // };

    // Cleanup w/ arrow function
    return () => {
      document.body.style.overflow = '';
    };
  });
}

export default useBodyScrollLock;
