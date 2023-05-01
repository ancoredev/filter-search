import { Route, Routes } from 'react-router-dom';
import './App.css'

import useProductList from './hooks/useProductList';

import { Layout } from './pages/Layout';
import { ProductsPage } from './pages/ProductsPage';
import { SingleProductPage } from './pages/SingleProductPage';


function App() {
  useProductList();

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<h1>Home</h1>} />
        <Route path="products/" element={<ProductsPage />}>
          <Route path=":id" element={<SingleProductPage />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
