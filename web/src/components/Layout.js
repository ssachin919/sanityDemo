import React from 'react';
import { SearchModalContextProvider } from '../contexts/SearchModalContext';
import GlobalStyles from '../styles/GlobalStyles';
import Footer from './Footer';
import Header from './Header';
import Search from './search/SearchModal';

function Layout({ children }) {
  return (
    <SearchModalContextProvider>
      <GlobalStyles />
      <Header />
      <Search />
      {children}
      <Footer />
    </SearchModalContextProvider>
  );
}

export default Layout;
