import {BrowserRouter, Routes, Route,Outlet} from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Characters from '../pages/Characters';
import '../pages/Characters';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import ItemDetails from '../components/ItemDetails';


export default function Router() {

  const Layout = () => {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    )
  }

  const BrowserRoutes = () => {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />} >
              <Route path='/' element={<Home />} />
              <Route path='characters' element={<Characters />} />
              {/* <Route path='/details' element={<ItemDetails /> } /> */}
              <Route path='*' element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </>
    )
  }

  return(
    <BrowserRoutes />
  )

}

