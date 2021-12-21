import React, { useEffect } from 'react';
import Header from './header';
import Foot from './footer';
import { Helmet } from 'react-helmet';

function Nosotros() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

    return(
      <div>
        <Helmet>
          <title>EscanesGym - Nosotros</title>
        </Helmet>
        <Header />
        <main className="nosotrosN">
            <div>
                <h2>¿Quiénes somos?</h2>
                <p>Somos un gimnasio familiar fundado hace poco y buscando mejorar para ofrecerles a nuestros alumnos el mejor entrenamiento. Te acompañamos en tus entrenamientos ayudando y corrigiendo. Te cuidamos en los ejercicios y alimentación. Y te entrenamos para poder lograr el objetivo que buscas.</p>
            </div>
            <br />
            <div>
                <h2>Equipamiento</h2>
                <p>Contamos con equipamientos nuevos para poder fortalecer los entrenamientos como sentadilla, pesas, barras, bastones, bancos, sogas, sogas elasticas, etc. Todo para mejorar en el gimnasio.</p>
            </div>
            <br />
            <div className="entrenadoresN">
                <h2>Entrenadores</h2>
                <p>Nuestros entrenadores son profesionales en su trabajo muy bien, siempre dan el 100% para poder entrenar a sus alumnos y mejorar la experiencia en el gimnasio y acompañarte en tus entrenamientos. Ellos son: <br/>
                  <a href="https://www.instagram.com/santiescanes/" target="_blank" rel="noreferrer">Santiago Escanes</a>
                  <br />
                  <a href="https://www.instagram.com/kevinfacttor/" target="_blank" rel="noreferrer">Kevin Facttor</a>
                  <br />
                  <a href="https://www.instagram.com/_luciolopez/" target="_blank" rel="noreferrer">Lucio López</a>
                </p>
            </div>
        </main>
        <br />
        <br />
        <Foot />
      </div>
    );
}

export default Nosotros;