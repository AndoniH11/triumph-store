import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import 'react-slideshow-image/dist/styles.css';
import { ProductProvider } from './context';
import ScrollToTop from './components/ScrollToTop';


ReactDOM.render(
  <ProductProvider>

    <Router>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </Router>

  </ProductProvider>
  ,
  document.querySelector('#root')
)


