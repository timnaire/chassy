import { Header } from './Header';
import { Footer } from './Footer';
import { Outlet, useLocation } from 'react-router-dom';

export function BaseLayout() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      <div className={isHome ? 'bg-gradient-to-r from-white via-white to-fuchsia-100' : ''}>
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
      <div id="otherContent"></div>
      <Footer />
    </>
  );
}
