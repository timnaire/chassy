interface LinkedInProps {
  /**
   * Url for the Linked in
   */
  url: string;
}

export function LinkedIn({ url }: LinkedInProps) {
  return (
    <a
      href={url}
      className="font-bold text-2xl text-white bg-sky-600 px-3 py-2 rounded-full ml-3 cursor-pointer"
      target="_blank"
      rel="noreferrer"
    >
      in
    </a>
  );
}
