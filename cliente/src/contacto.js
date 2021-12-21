import React, { useState, useEffect } from 'react';
import Header from './header';
import Foot from './footer';
import { Helmet } from 'react-helmet';
import Axios from 'axios';


function Contacto() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [mensaje, setMensaje] = useState('');

  const Enviarmsj = function() {
    Axios.post("http://localhost:3001/api/enviarmsj", {
      nombre: nombre,
      email: email,
      telefono: telefono,
      mensaje: mensaje 
    }).then(function() {
      if (nombre === "" || nombre === undefined || nombre === null) {
        alert('Complete el campo Nombre');
      } else if (email === "" || email === undefined || email === null) {
        alert('Complete el campo Correo Electrónico');
      } else if (mensaje === "" || mensaje === undefined || mensaje === null) {
        alert('Complete el campo Mensaje');
      } else {
        alert('Mensaje enviado');
        console.log('Mensaje enviado');
        window.location.reload();
      }
    });
  }

  return (
    <div>
      <Helmet>
          <title>EscanesGym - Contacto</title>
      </Helmet>
      <Header />
      <main className="contactoMain">
          <div>
              <h2>Envíanos un mensaje</h2>
          </div>
          <br />
          <div>
              <div className="form">
                  <span>Nombre y Apellido *</span>
                  <br />
                  <input type="text" name="nombre" id="nombre" onChange={(e) => {setNombre(e.target.value);}} required></input>
                  <br />
                  <br />
                  <span>Correo Electrónico *</span>
                  <br />
                  <input type="email" name="email" id="email" onChange={(e) => {setEmail(e.target.value);}} required></input>
                  <br />
                  <br />
                  <span>Teléfono</span>
                  <br />
                  <input type="text" name="telefono" id="telefono" onChange={(e) => {setTelefono(e.target.value);}}></input>
                  <br />
                  <br />
                  <span>Mensaje *</span>
                  <br />
                  <textarea name="mensaje" id="mensaje" cols="" rows="" onChange={(e) => {setMensaje(e.target.value);}} required></textarea>
                  <br />
                  <br />
                  <div className="btnForm">
                    <button onClick={Enviarmsj}>Enviar</button>
                  </div>
              </div>
          </div>
      </main>
      <br />
      <br />
      <br />
      <Foot />
    </div>
  );
}

export default Contacto;