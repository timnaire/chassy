import { Dispatch } from 'react';

interface DrawerProps {
  children: any;
  isOpen: boolean;
  setIsOpen: Dispatch<React.SetStateAction<boolean>>
}

export default function Drawer({ children, isOpen, setIsOpen }: DrawerProps) {
  return (
    <main
      className={
        "fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? "transition-opacity opacity-100 duration-500 translate-x-0 "
          : "transition-all delay-500 opacity-0 translate-x-full")}>

      <section className={
        "w-screen max-w-72 sm:max-w-sm right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform " +
        (isOpen ? "translate-x-0 " : "translate-x-full ")}>

        <article className="relative w-screen pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
          {children}
        </article>

      </section>

      <section className="w-screen h-full cursor-pointer" onClick={() => setIsOpen(false)}></section>
    </main>
  );
}
