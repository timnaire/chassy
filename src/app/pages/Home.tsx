
import { useEffect, useRef, useState } from 'react';
import { Button, Portal } from '@mui/base';
import { CaseStudy } from './CaseStudy';
import Typed from 'typed.js';
import { Contact } from './Contact';

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
    <article className="container mx-auto px-5 md:px-0">
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

        <div className="mt-64 text-xl">
          Follow me in
        </div>
      </div>
      {isOtherContentReady && (
        <Portal children={<CaseStudy />} container={otherContent.current} />
      )}
      {isOtherContentReady && (
        <Portal children={<Contact />} container={otherContent.current} />
      )}
    </article>
  );
}

