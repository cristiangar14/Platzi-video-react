import React from 'react';
import Footer from './footer';
import Header from './Header';

const Layout = ({ children }) => (
  <div className='App'>

    { children }
    <Footer />
  </div>
);

export default Layout;
