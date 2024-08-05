
import { useEffect, useRef, useState } from 'react';
import { Button, Portal } from '@mui/base';
import { CaseStudy } from './CaseStudy';
import { Contact } from './Contact';
import { LinkedIn } from '../shared/components/LinkedIn';
import { motion } from 'framer-motion';
import Typed from 'typed.js';
// import Hero from './../../assets/images/hero.png'

export function Home() {
  const otherContent = useRef<HTMLElement | null>(null);
  const [isOtherContentReady, setIsOtherContentReady] = useState(false);
  const typingLetterRef = useRef(null);
  const linkedInUrl = 'https://www.linkedin.com/in/charcae-donaire-26b7a0183/';

  // Sets the Div for Portal use
  useEffect(() => {
    if (!otherContent.current) {
      const element = document.getElementById('otherContent');
      if (element) {
        otherContent.current = element;
        setIsOtherContentReady(true);
      }
    }
  }, []);

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

  return (
    <motion.article
      className="relative container mx-auto px-5 md:px-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { type: 'spring', duration: 3 } }}
    >
      <div className="grid grid-cols-none md:grid-cols-2">
        <div>
          <div className="mt-12">
            <h5 className="text-xl md:text-2xl font-bold">
              Hi, I'm Chas
            </h5>
            <h6 className="text-md md:text-lg">
              UI / UI Designer | Philippines
            </h6>
          </div>

          <h1 className="text-4xl md:text-7xl font-bold mt-16">
            I design <span ref={typingLetterRef} className="text-fuchsia-900">simple.</span>
          </h1>

          <Button className="bg-fuchsia-900 text-white px-5 md:px-10 py-3 font-bold text-sm md:text-xl rounded-full mt-32">
            Check Case Studies
          </Button>

          <div className="mt-64 text-xl py-6">
            Follow me <LinkedIn url={linkedInUrl} />
          </div>
        </div>
        {/* <div>
          <motion.div
            className="flex justify-end"
            // initial={{ translateX: 0, translateY: 0 }}
            // animate={{ translateX: 400, translateY: -500 }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <img src={Hero} width={450} alt="hero"/>
          </motion.div>
          <motion.div
            className="flex justify-center"
            // initial={{ translateX: 0, translateY: 0 }}
            // animate={{ translateX: 400, translateY: -500 }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <img src={Hero} width={450} alt="hero"/>
          </motion.div>
          <motion.div
            className="flex"
            // initial={{ translateX: 0, translateY: 0 }}
            // animate={{ translateX: 400, translateY: -500 }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <img src={Hero} width={450} alt="hero"/>
          </motion.div>
        </div> */}
      </div>
      {isOtherContentReady && (
        <Portal children={<CaseStudy isPage={false} />} container={otherContent.current} />
      )}
      {isOtherContentReady && (
        <Portal children={<Contact isPage={false} />} container={otherContent.current} />
      )}
    </motion.article>
  );
}

