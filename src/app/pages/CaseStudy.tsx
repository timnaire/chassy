import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom"

export function CaseStudy() {
  const caseContent = useRef<HTMLElement | null>(null);
  const [isCaseContentReady, setIsCaseContentReady] = useState(false);

  useEffect(() => {
    if (!caseContent.current) {
      const element = document.getElementById('caseContent');
      if (element) {
        caseContent.current = element;
        setIsCaseContentReady(true);
      }
    }
  }, []);

  if (!isCaseContentReady) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      {createPortal(
        <p>This child is placed in the document body.</p>,
        caseContent.current as HTMLElement
      )}
    </div>
  );
}

