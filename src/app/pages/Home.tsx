import { Button, Portal } from "@mui/base";
import { CaseStudy } from "./CaseStudy";
import { useEffect, useRef, useState } from "react";

export function Home() {
  const otherContent = useRef<HTMLElement | null>(null);
  const [isOtherContentReady, setIsOtherContentReady] = useState(false);

  useEffect(() => {
    if (!otherContent.current) {
      const element = document.getElementById('otherContent');
      if (element) {
        otherContent.current = element;
        setIsOtherContentReady(true);
      }
    }
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
          I design <span className="text-fuchsia-900">simple.</span>
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
    </article>
  );
}

