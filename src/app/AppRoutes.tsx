import { createBrowserRouter } from 'react-router-dom';
import { App } from './App';
import { Error } from './error/Error';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';


export const AppRoutes = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
    ],
    errorElement: <Error />
  },
]);
