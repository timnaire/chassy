
import { useEffect, useRef, useState } from 'react';
import { Button, Portal } from '@mui/base';
import { CaseStudy } from './CaseStudy';
import Typed from 'typed.js';
import { Contact } from './Contact';
import { LinkedIn } from '../shared/components/LinkedIn';
import { motion } from 'framer-motion';

export function Home() {
  const otherContent = useRef<HTMLElement | null>(null);
  const [isOtherContentReady, setIsOtherContentReady] = useState(false);
  const el = useRef(null);

  useEffect(() => {
    if (!otherContent.current) {
      const element = document.getElementById('otherContent');
      if (element) {
        otherContent.current = element;
        setIsOtherContentReady(true);
      }
    }
  }, []);

  useEffect(() => {
    const typed = new Typed(el.current, {
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
      className="container mx-auto px-5 md:px-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { type: "spring", duration: 3 } }}
    >
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
          I design <span ref={el} className="text-fuchsia-900">simple.</span>
        </h1>

        <Button className="bg-fuchsia-900 text-white px-5 md:px-10 py-3 font-bold text-sm md:text-xl rounded-full mt-32">
          Check Case Studies
        </Button>

        <div className="mt-64 text-xl py-6">
          Follow me <LinkedIn href="https://www.linkedin.com/in/charcae-donaire-26b7a0183/" />
        </div>
      </div>
      {isOtherContentReady && (
        <Portal children={<CaseStudy showLinkedin={false} />} container={otherContent.current} />
      )}
      {isOtherContentReady && (
        <Portal children={<Contact showLinkedin={false} />} container={otherContent.current} />
      )}
    </motion.article>
  );
}

