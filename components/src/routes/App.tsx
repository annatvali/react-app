import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route, Link} from "react-router-dom";
import App from '../pages/HomePage';
import HomePage from '../pages/HomePage';
import NotFound from '../pages/NotFound';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '', element: <HomePage /> },
            { path: '', element: <NotFound /> },
        ]

    }
])


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="about">About Us</Link>
      </div>
    ),
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

