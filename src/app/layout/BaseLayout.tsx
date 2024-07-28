import { Header } from './Header';
import { Footer } from './Footer';
import { Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } }
};

export function BaseLayout() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
      >
        <div className={isHome ? 'bg-gradient-to-r from-white via-white to-fuchsia-100' : ''}>
          <Header />
          <main>
            <Outlet />
          </main>
        </div>
        <div id="otherContent"></div>
      </motion.div>
      <Footer />
    </>
  );
}
