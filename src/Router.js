import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Common/Nav';
import Footer from './components/Common/Footer';
import Main from './pages/Main/Main';
import NotFound from './pages/NotFound';
import ProductList from './pages/ProductList/ProductList';
import Detail from './pages/Detail/Detail';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/explore" element={<ProductList />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
