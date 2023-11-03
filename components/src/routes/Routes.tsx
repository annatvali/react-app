import {createBrowserRouter, Link } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';


const router = createBrowserRouter([
   {
    path: "/",
    element: (
      <div>
        <h1>Planets</h1>
        <Home />
      </div>
    ),
  },
  {
    path: "characters",
    element: (
      <div>
        <h1>Characters</h1>
        <Link to="/">Back to Planets</Link>
      </div>
    ),
  },
  {
    path: "*",
    element: (
      <>
        <Link to="/" style={{position: 'absolute', color: 'white', fontSize: '28px', zIndex: '1', padding: '24px'}}>Back to Planets</Link>
        <NotFound />
      </>
    ),
  },
])

export default router;