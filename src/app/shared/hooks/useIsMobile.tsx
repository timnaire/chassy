import { useEffect, useState } from 'react';
import { Breakpoints } from '../../core/models/constants';

export function useIsMobile({ breakpoint }: { breakpoint: Breakpoints }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= breakpoint) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    // Initial check
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [breakpoint]);

  return { isMobile };
}
