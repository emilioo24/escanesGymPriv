import React from 'react';

function Foot() {
    return (
        <div className="footF">
            <Footer />
            <Terminos />
        </div>
    );
}

function Footer() {
    return (
    <footer>
        <ContactoFooter />
        <Direccion />
        <Redes />
    </footer>
    );
}

function ContactoFooter() {
    return (
        <div className="contactoF">
            <h3>Contactos</h3>
            <span>Teléfono: <a href="tel:+543436856451">+54 346856451</a></span>
            <br />
            <span>Email: <a href="mailto:contacto@escanesgym.com">contacto@escanesgym.com</a></span>
            <br />
            <span>Ubicación: <a href="https://goo.gl/maps/gz8nVoLDkEw4DQScA">Juan Baez 275</a></span>
        </div>
    );
}

function Direccion() {
    return (
        <div className="horariosF">
            <h3>Horarios</h3>
            <span>Lunes a Sábados de 7:00 a 21:00 horas</span>
        </div>
    );
}

function Redes() {
    return (
        <div className="redesF">
            <h3>Redes Sociales</h3>
            <span><a href="https://instagram.com/gimnasio.escanes">Instagram</a></span>
            <br />
            <span><a href="https://facebook.com/gimnasio.escanes">Facebook</a></span>
        </div>
    );
}

function Terminos() {
    return (
        <div className="terminosF">
            <br />
            <span>EscanesGym &copy; 2021. Todos los derechos reservados.</span>
        </div>
    );
}

export default Foot;