import ReactDOM from 'react-dom/client';
import './index.css';
import ErrorBoundary from './ErrorBoundary.tsx';
import {RouterProvider } from 'react-router-dom';
import './routes/Routes.tsx';
import router from './routes/Routes.tsx';

// const router = createBrowserRouter([
//    {
//     path: "/",
//     element: (
//       <div>
//         <h1>Planets</h1>
//         <HomePage />
//       </div>
//     ),
//   },
//      {
//     path: "*",
//     element: (
//       <>
//         <h1>Error 404 - Page Not Found</h1>
//         <Link to="/">Back to Planets</Link>
//       </>
//     ),
//   },
// ])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ErrorBoundary fallback={<div>Something went wrong</div>}>
    <RouterProvider router={router} />
  </ErrorBoundary>
);

