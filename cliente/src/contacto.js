import React, { useState } from 'react';
import Header from './header';
import Foot from './footer';
import { Helmet } from 'react-helmet';
import Axios from 'axios';


function Contacto() {

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
      alert('Mensaje Enviado')
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
              <form method="post">
                  <span>Nombre y Apellido</span>
                  <br />
                  <input type="text" name="nombre" id="nombre" onChange={(e) => {setNombre(e.target.value);}} required></input>
                  <br />
                  <br />
                  <span>Correo Electrónico</span>
                  <br />
                  <input type="email" name="email" id="email" onChange={(e) => {setEmail(e.target.value);}} required></input>
                  <br />
                  <br />
                  <span>Teléfono</span>
                  <br />
                  <input type="text" name="telefono" id="telefono" onChange={(e) => {setTelefono(e.target.value);}} required></input>
                  <br />
                  <br />
                  <span>Mensaje</span>
                  <br />
                  <textarea name="mensaje" id="mensaje" cols="" rows="" onChange={(e) => {setMensaje(e.target.value);}}></textarea>
                  <br />
                  <br />
                  <div className="btnForm">
                    <button onClick={Enviarmsj}>Enviar</button>
                  </div>
              </form>
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