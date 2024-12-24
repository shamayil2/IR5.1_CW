import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Movies from './pages/Movies';
import MovieDetails from './pages/MovieDetails';
import Report from './pages/Report';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  { path: '/movies', element: <Movies /> },
  { path: '/moviedetails/:pageId', element: <MovieDetails /> },
  { path: '/report', element: <Report /> },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
