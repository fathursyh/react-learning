import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage';
import ProductPage, { productLoader } from './pages/ProductPage';
import RootLayout from './layouts/RootLayout';
import ErrorPage from './pages/ErrorPage';
import './index.css';
import ProductDetail from './pages/ProductDetail';

const router = createBrowserRouter([
  { path: '/', Component: RootLayout, children: [
    { Component: HomePage, index: true },
    { path: '/products', Component: ProductPage, loader: productLoader },
    { path: '/products/detail/:id', Component: ProductDetail },
  ], errorElement: ErrorPage() },
]);

// * another old way
/*

const routeDefinitions = createRoutesFromElements(
  <Route>
    <Route path='/' element={HomePage()} />
    <Route path='/products' element={ProductPage()} />
  </Route>
);
const router = createBrowserRouter(routeDefinitions);

*/

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
