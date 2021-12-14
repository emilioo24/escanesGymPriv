import React, { useState } from 'react';
import Header from './header';
import Foot from './footer';
import { Helmet } from 'react-helmet';
import Axios from 'axios';

function Inscripcion() {

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [dias, setDias] = useState('');
  const [horarios, setHorarios] = useState('');

  const Inscribir = function() {
    Axios.post("http://localhost:3001/api/inscribir", {
      nombre: nombre,
      email: email,
      telefono: telefono,
      dias: dias,
      horarios: horarios
    }).then(function() {
      alert('Mensaje Enviado')
    });
  }

    return(
      <div>
        <Helmet>
          <title>EscanesGym - Inscripción</title>
        </Helmet>
        <Header />
        <main className="inscripMain">
            <div>
                <h2>Inscribite</h2>
            </div>
            <br />
            <div>
                <form method="post" action="inscribir">
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
                    <span>Elegí los dias</span>
                    <br />
                    <select onChange={(e) => {setDias(e.target.value);}}>
                        <option>Lunes, Miercoles y Viernes</option>
                        <option>Martes, Jueves y Sábado</option>
                    </select>
                    <br />
                    <br />
                    <span>Elegí los horarios</span>
                    <br />
                    <select onChange={(e) => {setHorarios(e.target.value);}}>
                        <option>7:00 a 9:00</option>
                        <option>9:00 a 11:00</option>
                        <option>13:00 a 15:00</option>
                        <option>15:00 a 17:00</option>
                        <option>17:00 a 19:00</option>
                        <option>19:00 a 21:00</option>
                    </select>
                    <br />
                    <br />
                    <br />
                    <div className="btnForm">
                        <button onClick={Inscribir}>Inscribirse</button>
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

export default Inscripcion;