export function LinkedIn({ href }: { href: string }) {
  return (
    <a
      href={href}
      className="font-bold text-2xl text-white bg-sky-600 px-3 py-2 rounded-full ml-3 cursor-pointer"
      target="_blank"
      rel="noreferrer"
    >
      in
    </a>
  );
}
