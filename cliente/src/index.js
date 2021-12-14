import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './header';
import Centro from './centro';
import Foot from './footer';
import Contacto from './contacto';
import Nosotros from './nosotros';
import Inscripcion from './inscripcion';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function Main() {
  return(
    <div>
      <Helmet>
        <title>EscanesGym - Inicio</title>
      </Helmet>
      <Header />
      <Centro />
      <Foot />
    </div>
  );
}

function NotFound() {
  return (
    <div>
      <Helmet>
        <title>EscanesGym - Not Found</title>
      </Helmet>
      <Header />
      <div className="notfound">
        <h1>404 - Page Not Found</h1>
      </div>
      <Foot />
    </div>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/inscripcion" element={<Inscripcion />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
