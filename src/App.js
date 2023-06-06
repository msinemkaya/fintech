import { Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import HomePage from './components/pages/HomePage';

function App() {

  const routes = [
    {
      path: '/',
      element: <HomePage/>
    },
    // {
    //   path: '/about',
    //   element: <HomePage/>
    // },
    // {
    //   path: '/products',
    //   element: <HomePage/>
    // },
    // {
    //   path: '/blog',
    //   element: <HomePage/>
    // },
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
