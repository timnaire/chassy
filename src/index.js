import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { AppRoutes } from "./app/AppRoutes";

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <RouterProvider router={AppRoutes} />
  </StrictMode>
);
