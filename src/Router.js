import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Common/Nav';
import Footer from './components/Common/Footer';
import Main from './pages/Main/Main';
import ProductList from './pages/ProductList/ProductList';
import Detail from './pages/Detail/Detail';
import Carts from './pages/Cart/Carts';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/explore" element={<ProductList />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/cart" element={<Carts />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
