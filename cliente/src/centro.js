import React from 'react';

function Centro() {
    return (
    <main className="mainC">
        <Banner />
        <QuienesSomos />
        <hr />
        <br />
        <br />
        <Entrenamientos />
        <Semipersonal />
        <br />
    </main>
    );
}

function Banner() {
    return (
        <div className="imgBanner">
            <img src="images/fondoescanes.png" width="100%" height="700px" alt="Banner"></img>
        </div>
    );
}

function QuienesSomos() {
    return (
        <div className="quienesC">
            <h1>¿Quienes Somos?</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis aperiam consectetur impedit obcaecati beatae fuga delectus distinctio asperiores dolores, quod facere tempora cum maxime debitis quaerat quam, consequatur, inventore hic.</p>
        </div>
    );
}

function Entrenamientos() {
    return (
        <div className="fotosC">
            <h1>Entrenamientos</h1>
            <img src="images/foto1.png" width="150px" alt="foto1"></img>
            <img src="images/foto2.png" width="150px" alt="foto2"></img>
            <img src="images/foto3.png" width="150px" alt="foto3"></img>
            <img src="images/foto4.png" width="150px" alt="foto4"></img>
        </div>
    );
}

function Semipersonal() {
    return (
        <div>
            <br />
            <br />
            <h1>¿Entrenamiento Semipersonal?</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis aperiam consectetur impedit obcaecati beatae fuga delectus distinctio asperiores dolores, quod facere tempora cum maxime debitis quaerat quam, consequatur, inventore hic.</p>
        </div>
    );
}

export default Centro;