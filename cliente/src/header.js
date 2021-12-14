import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
    <header className="headerH">
        <div className="headdiv">
            <Logo />
            <ListaHeader />
        </div>
    </header>
    );
}

function ListaHeader() {
    return (
        <div>
            <div className="listaH">
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/inscripcion">Inscripción</Link></li>
                    <li><Link to="/nosotros">Nosotros</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                </ul>
            </div>
            <input id="barra" type="checkbox" name="barra"></input>
            <label htmlFor="barra" className="barra-l">
                <i className="bi bi-list"></i>
            </label>
            <input id="equis" type="checkbox" name="equis"></input>
            <label htmlFor="equis" className="equis-l">
                <i className="bi bi-x"></i>
            </label>
            <div className="listaMobile">
                <ul>
                    <li><Link to="/"><i className="bi bi-house"></i> Inicio</Link></li>
                    <li><Link to="/inscripcion"><i className="bi bi-calendar-check"></i> Inscripción</Link></li>
                    <li><Link to="/nosotros"><i className="bi bi-info-circle"></i> Nosotros</Link></li>
                    <li><Link to="/contacto"><i className="bi bi-envelope"></i> Contacto</Link></li>
                </ul>
            </div>
        </div>
    );
}

function Logo() {
    return (
        <div className="logoH">
            <h1>Escanes<span>Gym</span></h1>
        </div>
    );
}

export default Header;