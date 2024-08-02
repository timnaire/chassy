interface HighlightProps {
  /**
   * Class for the root element
   */
  rootClass?: string;
  /**
   * The text to be searched for highlight
   */
  text: string;
  /**
   * The text to be highlighted
   */
  highlight: string;
  /**
   * Class for the highlighted text, default class is ```"text-fuchsia-900 font-bold"```
   */
  highlightClass?: string;
}

export function Highlight({
  rootClass = '',
  text,
  highlight,
  highlightClass = 'text-fuchsia-900 font-bold'
}: HighlightProps
) {

  if (!highlight.trim()) {
    return <span>{text}</span>;
  }

  const regex = new RegExp(`(${highlight})`, 'gi');
  const parts = text.split(regex);

  const highlighted = parts.map((part, index) =>
    part.toLowerCase() !== highlight.toLowerCase() ? (
      part
    ) : (
      <span key={index} className={highlightClass}>{highlight}</span>
    )
  );

  return (<><span className={rootClass}>{highlighted}</span></>);
}
