import ReactDOM from 'react-dom/client';
import HomePage from './pages/HomePage.tsx';
import './index.css';
import ErrorBoundary from './ErrorBoundary.tsx';
import {RouterProvider, createBrowserRouter} from 'react-router-dom'

const router = createBrowserRouter([
   {
    path: "/",
    element: (
      <div>
        <HomePage />
      </div>
    ),
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ErrorBoundary fallback={<div>Something went wrong</div>}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </ErrorBoundary>
);

