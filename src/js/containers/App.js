import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Footer from './Footer';

function App({ pushPath, children }) {

  return (
    <div>
      <Header />
      <div className="container">
        {children}
      </div>
      <Footer />
    </div>
  );
}

module.exports = connect(null)(App);
