import React from 'react';
import Header from './header';
import Foot from './footer';
import { Helmet } from 'react-helmet';

function Nosotros() {
    return(
      <div>
        <Helmet>
          <title>EscanesGym - Nosotros</title>
        </Helmet>
        <Header />
        <main className="nosotrosN">
            <div>
                <h2>¿Quiénes somos?</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis aperiam consectetur impedit obcaecati beatae fuga delectus distinctio asperiores dolores, quod facere tempora cum maxime debitis quaerat quam, consequatur, inventore hic.</p>
            </div>
            <br />
            <div>
                <h2>Equipamiento</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis aperiam consectetur impedit obcaecati beatae fuga delectus distinctio asperiores dolores, quod facere tempora cum maxime debitis quaerat quam, consequatur, inventore hic.</p>
            </div>
            <br />
            <div>
                <h2>Entrenadores</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis aperiam consectetur impedit obcaecati beatae fuga delectus distinctio asperiores dolores, quod facere tempora cum maxime debitis quaerat quam, consequatur, inventore hic.</p>
            </div>
        </main>
        <br />
        <br />
        <Foot />
      </div>
    );
}

export default Nosotros;