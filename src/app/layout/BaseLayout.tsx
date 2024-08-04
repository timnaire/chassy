import { Header } from './Header';
import { Footer } from './Footer';
import { Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export function BaseLayout() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      <motion.div
        initial={{ opacity: 0, }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
      >
        <div className={isHome ? 'bg-gradient-to-r from-white via-white to-fuchsia-100' : ''}>
          <Header />
          <main>
            <Outlet />
          </main>
        </div>
        <div id="otherContent" className="z-[1000]"></div>
      </motion.div>
      <Footer />
    </>
  );
}
