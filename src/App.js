import { Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/Aboutpage';
import ProductsPage from './components/pages/ProductsPage';
import BlogPage from './components/pages/BlogPage';

function App() {

  const routes = [
    {
      path: '/',
      element: <HomePage/>
    },
    {
      path: '/about',
      element: <AboutPage/>
    },
    {
      path: '/products',
      element: <ProductsPage/>
    },
    {
      path: '/blog',
      element: <BlogPage/>
    },
    // {
    //   path: '/contact',
    //   element: <HomePage/>
    // },
  ]

  return (
    <>
      <Navbar/>
      <Routes>
        {routes.map((route, index) => (
          <Route path={route.path} element={route.element} key={index}/>
        ))}
      </Routes>
    </>
  );
}

export default App;
