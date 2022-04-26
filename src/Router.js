import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Common/Nav';
import Footer from './components/Common/Footer';
import Main from './pages/Main/Main';
import ProductList from './pages/ProductList/ProductList';
import Detail from './pages/Detail/Detail';
const Router = props => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/explore" element={<ProductList />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
