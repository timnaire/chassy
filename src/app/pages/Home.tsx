import { useEffect, useRef } from 'react';
import { Button } from '@mui/base';
import { CaseStudy } from './CaseStudy';
import { Contact } from './Contact';
import { LinkedIn } from '../shared/components/LinkedIn';
import { motion } from 'framer-motion';
import { useIsMobile } from '../shared/hooks/useIsMobile';
import { Breakpoints } from '../core/models/constants';
import Typed from 'typed.js';
import Hero from './../../assets/images/hero.png';
import App1 from './../../assets/images/app_1.png';

export function Home() {
  const typingLetterRef = useRef(null);
  const linkedInUrl = 'https://www.linkedin.com/in/charcae-donaire-26b7a0183/';
  const { isMobile } = useIsMobile({ breakpoint: Breakpoints.LG });

  // For typing letter animation
  useEffect(() => {
    const typed = new Typed(typingLetterRef.current, {
      strings: ['simple', 'elegant', 'fast'],
      typeSpeed: 120,
      loop: true,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });

  return (
    <>
      <motion.div
        className="bg-gradient-to-r from-white via-white to-fuchsia-100 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { type: 'spring', duration: 3 } }}
      >
        <article className="container mx-auto px-5 md:px-0 overflow-hidden">
          <div className="relative z-20">
            <div className="pt-12">
              <h5 className="text-xl md:text-2xl font-bold">Hi, I'm Chas</h5>
              <h6 className="text-md md:text-lg">UI / UI Designer | Philippines</h6>
            </div>

            <h1 className="text-4xl md:text-7xl font-bold mt-16">
              I design{' '}
              <span ref={typingLetterRef} className="text-fuchsia-900">
                simple.
              </span>
            </h1>

            <Button className="bg-fuchsia-900 text-white px-5 md:px-10 py-3 font-bold text-sm md:text-xl rounded-full mt-32">
              Check Case Studies
            </Button>

            <div className="mt-64 text-xl py-6">
              Follow me <LinkedIn url={linkedInUrl} />
            </div>
          </div>

          {!isMobile &&
            [0, 1, 2, 3].map((v) => (
              <motion.img
                key={v}
                className="absolute z-10"
                initial={{ y: 0, x: 510 }}
                animate={{ y: -1350, x: 1250 }}
                transition={{ ease: 'linear', repeat: Infinity, duration: 10, delay: 2.5 * v }}
                src={Hero}
                alt="hero"
              ></motion.img>
            ))}

          {isMobile &&
            [0, 1, 2, 3].map((v) => (
              <motion.img
                key={v}
                className="absolute z-10 bottom-20"
                initial={{ x: -400 }}
                animate={{ x: Breakpoints.LG }}
                transition={{ ease: 'linear', repeat: Infinity, duration: 10, delay: 2.5 * v }}
                src={App1}
                width={250}
                alt="hero"
              ></motion.img>
            ))}
        </article>
      </motion.div>

      <div className="bg-white relative z-20">
        <CaseStudy isPage={false} />
        <Contact isPage={false} />
      </div>
    </>
  );
}
