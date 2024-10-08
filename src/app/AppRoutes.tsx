import { createBrowserRouter } from 'react-router-dom';
import { App } from './App';
import { Error } from './error/Error';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { CaseStudy } from './pages/CaseStudy';
import { AnimatePresence } from 'framer-motion';


export const AppRoutes = createBrowserRouter([
  {
    element: <AnimatePresence mode="wait"><App /></AnimatePresence>,
    children: [
      { path: "/", element: <Home /> },
      { path: "/case-studies", element: <CaseStudy /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
    ],
    errorElement: <Error />
  },
]);
