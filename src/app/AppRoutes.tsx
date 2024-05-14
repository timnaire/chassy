import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Error } from './error/Error';
import { Home } from './home/Home';
import { About } from './about/About';
import { Contact } from './contact/Contact';

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
