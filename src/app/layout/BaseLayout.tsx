import { Header } from './Header';
import { Footer } from './Footer';
import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';

export function BaseLayout() {
  return (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1 } }}>
        <Header />
        <main>
          <Outlet />
        </main>
      </motion.div>
      <Footer />
    </>
  );
}
